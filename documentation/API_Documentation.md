# ROBOTRAC API Documentation
## AI Gateway & Operator Dashboard Communication Layer

### Base URL
`http://localhost:8000`

### Endpoints
#### 1. Health Check
- `GET /api/health` -> Returns service uptime & model load status.

#### 2. System Status
- `GET /api/status` -> Returns live system, camera, AI, and vehicle indicators.

#### 3. Live Detections
- `GET /api/detections` -> Returns current frame target class, confidence, bounding boxes, risk, and directives.

#### 4. Scenario Simulation
- `POST /api/simulate/{scenario}` -> Switches telemetry state for verification testing.
