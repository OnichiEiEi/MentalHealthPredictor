import React, { useState } from "react";

function MentalHealthForm() {
  const [formData, setFormData] = useState({
    screen_time_hours: "",
    sleep_quality_1_5: "",
    stress_level_0_10: "",
    sleep_hours: "",
    age: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      screen_time_hours: parseFloat(formData.screen_time_hours),
      sleep_quality_1_5: parseFloat(formData.sleep_quality_1_5),
      stress_level_0_10: parseFloat(formData.stress_level_0_10),
      sleep_hours: parseFloat(formData.sleep_hours),
      age: parseFloat(formData.age)
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      setResult(data.predicted_mental_health_score);
    } catch (error) {
      setResult("Error: Unable to connect to API.");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl border border-gray-200 shadow-md p-6">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
        Mental Health Predictor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "screen_time_hours", label: "Screen Time (hrs)" },
          { name: "sleep_quality_1_5", label: "Sleep Quality (1–5)" },
          { name: "stress_level_0_10", label: "Stress Level (0–10)" },
          { name: "sleep_hours", label: "Sleep Hours" },
          { name: "age", label: "Age" }
        ].map((field) => (
          <div key={field.name} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="text-sm font-medium text-gray-600 mb-1"
            >
              {field.label}
            </label>
            <input
              type="number"
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-400 outline-none transition-all"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-2 py-2.5 bg-linear-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-transform"
        >
          Predict
        </button>
      </form>

      {result !== null && (
        <div className="mt-5 p-4 rounded-lg border border-teal-200 bg-teal-50 text-center">
          <p className="text-gray-700 font-medium">
            Predicted Mental Health Score:
          </p>
          <p className="text-2xl font-bold text-teal-600">{result}</p>
        </div>
      )}
    </div>
  );
}

export default MentalHealthForm;
