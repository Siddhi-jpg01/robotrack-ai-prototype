# ROBOTRAC Risk Logic & Decision Rules

## Decision Rules Table
| Detected Target | Confidence Threshold | Prototype Risk Level | Operator Directive |
| :--- | :--- | :--- | :--- |
| **Person** | >= 0.50 | HIGH | **EMERGENCY STOP** |
| **Animal** | >= 0.50 | HIGH | **STOP** |
| **Large Obstacle** | >= 0.50 | MEDIUM / HIGH | **SLOW DOWN / STOP** |
| **Tractor** | >= 0.50 | LOW / MEDIUM | **MONITOR** |
| **No Target** | N/A | SAFE | **CONTINUE MONITORING** |
| **Any Target** | < 0.50 | UNCERTAIN | **LOW CONFIDENCE WARNING** |

## Multi-Target Rule
When multiple objects appear in a frame, the system resolves to the highest risk tier among all detected targets.
