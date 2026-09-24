export const scenarios = {
  safe: {
    system_status: "active",
    camera_status: "connected",
    ai_status: "active",
    vehicle_status: "ready",
    detections: [],
    risk: "safe",
    recommended_action: "Continue Monitoring",
    message: "No relevant object detected."
  },

  person: {
    system_status: "active",
    camera_status: "connected",
    ai_status: "active",
    vehicle_status: "ready",
    detections: [
      {
        object: "Person",
        confidence: 0.94,
        risk: "high"
      }
    ],
    risk: "high",
    recommended_action: "Emergency Stop",
    message: "Person detected in operating zone."
  },

  animal: {
    system_status: "active",
    camera_status: "connected",
    ai_status: "active",
    vehicle_status: "ready",
    detections: [
      {
        object: "Animal",
        confidence: 0.91,
        risk: "high"
      }
    ],
    risk: "high",
    recommended_action: "Stop",
    message: "Animal detected in operating zone."
  },

  obstacle: {
    system_status: "active",
    camera_status: "connected",
    ai_status: "active",
    vehicle_status: "ready",
    detections: [
      {
        object: "Large Obstacle",
        confidence: 0.88,
        risk: "medium"
      }
    ],
    risk: "medium",
    recommended_action: "Slow Down / Stop",
    message: "Large obstacle detected ahead."
  },

  tractor: {
    system_status: "active",
    camera_status: "connected",
    ai_status: "active",
    vehicle_status: "ready",
    detections: [
      {
        object: "Tractor",
        confidence: 0.76,
        risk: "low"
      }
    ],
    risk: "low",
    recommended_action: "Monitor",
    message: "Tractor detected nearby."
  },

  aiFailure: {
    system_status: "warning",
    camera_status: "connected",
    ai_status: "disconnected",
    vehicle_status: "standby",
    detections: [],
    risk: "unknown",
    recommended_action: "Check AI Connection",
    message: "AI perception system is currently unavailable."
  },

  cameraFailure: {
    system_status: "warning",
    camera_status: "disconnected",
    ai_status: "inactive",
    vehicle_status: "standby",
    detections: [],
    risk: "unknown",
    recommended_action: "Reconnect Camera",
    message: "Camera input is unavailable."
  }
};