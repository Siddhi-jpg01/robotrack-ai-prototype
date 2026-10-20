from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from ai_integration.detector import run_detection

app = FastAPI(
    title="ROBOTRAC AI Integration Gateway",
    description="Bridge connecting Sanjana's AI perception output to Siddhi's operator dashboard.",
    version="1.0"
)

# Enable CORS for React frontend (Vite default: http://localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DetectionItem(BaseModel):
    object: str
    confidence: float
    risk: str
    bbox: Optional[List[int]] = None

class TelemetryPayload(BaseModel):
    system_status: str
    camera_status: str
    ai_status: str
    vehicle_status: str
    detections: List[DetectionItem]
    risk: str
    recommended_action: str
    message: str

# Current live telemetry state cache
current_telemetry = run_detection()

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "robotrac-ai-gateway",
        "version": "1.0",
        "model_loaded": True
    }

@app.get("/api/status")
def get_status():
    return {
        "system": current_telemetry["system_status"],
        "camera": current_telemetry["camera_status"],
        "ai": current_telemetry["ai_status"],
        "vehicle": current_telemetry["vehicle_status"]
    }

@app.get("/api/detections", response_model=TelemetryPayload)
def get_detections():
    return current_telemetry

@app.post("/api/detect")
def trigger_detection():
    global current_telemetry
    current_telemetry = run_detection()
    return current_telemetry

@app.post("/api/simulate/{scenario}")
def simulate_scenario(scenario: str):
    global current_telemetry
    scenarios = {
        "safe": {
            "system_status": "active",
            "camera_status": "connected",
            "ai_status": "active",
            "vehicle_status": "ready",
            "detections": [],
            "risk": "safe",
            "recommended_action": "Continue Monitoring",
            "message": "No relevant object detected."
        },
        "person": {
            "system_status": "active",
            "camera_status": "connected",
            "ai_status": "active",
            "vehicle_status": "ready",
            "detections": [{"object": "Person", "confidence": 0.94, "risk": "high", "bbox": [420, 180, 240, 520]}],
            "risk": "high",
            "recommended_action": "Emergency Stop",
            "message": "Person detected in operating zone."
        },
        "animal": {
            "system_status": "active",
            "camera_status": "connected",
            "ai_status": "active",
            "vehicle_status": "ready",
            "detections": [{"object": "Animal", "confidence": 0.91, "risk": "high", "bbox": [310, 220, 180, 260]}],
            "risk": "high",
            "recommended_action": "Stop",
            "message": "Animal detected in operating zone."
        },
        "obstacle": {
            "system_status": "active",
            "camera_status": "connected",
            "ai_status": "active",
            "vehicle_status": "ready",
            "detections": [{"object": "Large Obstacle", "confidence": 0.88, "risk": "medium", "bbox": [500, 320, 350, 280]}],
            "risk": "medium",
            "recommended_action": "Slow Down / Stop",
            "message": "Large obstacle detected ahead."
        },
        "tractor": {
            "system_status": "active",
            "camera_status": "connected",
            "ai_status": "active",
            "vehicle_status": "ready",
            "detections": [{"object": "Tractor", "confidence": 0.76, "risk": "low", "bbox": [200, 150, 480, 390]}],
            "risk": "low",
            "recommended_action": "Monitor",
            "message": "Tractor detected nearby."
        },
        "aiFailure": {
            "system_status": "warning",
            "camera_status": "connected",
            "ai_status": "disconnected",
            "vehicle_status": "standby",
            "detections": [],
            "risk": "unknown",
            "recommended_action": "Check AI Connection",
            "message": "AI perception system is currently unavailable."
        },
        "cameraFailure": {
            "system_status": "warning",
            "camera_status": "disconnected",
            "ai_status": "inactive",
            "vehicle_status": "standby",
            "detections": [],
            "risk": "unknown",
            "recommended_action": "Reconnect Camera",
            "message": "Camera input is unavailable."
        }
    }
    if scenario in scenarios:
        current_telemetry = scenarios[scenario]
        return {"status": "success", "active_scenario": scenario}
    return {"status": "error", "message": "Unknown scenario"}
