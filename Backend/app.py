from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd

# Load trained model and feature names
model = joblib.load("Linear Regression_best_model.pkl")
feature_names = joblib.load("feature_names.pkl")

# Initialize FastAPI app
app = FastAPI(title="Mental Health Predictor API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input schema
class InputData(BaseModel):
    screen_time_hours: float
    sleep_quality_1_5: float
    stress_level_0_10: float
    sleep_hours: float
    age: float

# Health check
@app.get("/")
def read_root():
    return {"message": "Mental Health Prediction API is running!"}

# Prediction endpoint
@app.post("/predict")
def predict(data: InputData):
    input_dict = {
        "screen_time_hours": data.screen_time_hours,
        "sleep_quality_1_5": data.sleep_quality_1_5,
        "stress_level_0_10": data.stress_level_0_10,
        "sleep_hours": data.sleep_hours,
        "age": data.age
    }

    input_df = pd.DataFrame([input_dict], columns=feature_names)
    prediction = model.predict(input_df)[0]
    return {"predicted_mental_health_score": round(float(prediction), 2)}