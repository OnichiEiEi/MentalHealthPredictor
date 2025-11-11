import React, { useState } from "react";

function MentalHealthForm() {
  const [formData, setFormData] = useState({
    age: "",
    screen_time_hours: "",
    stress_level_0_10: "",
    sleep_quality_1_5: "",
    sleep_hours: "",
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
    const data = await response.json();

    // Clamp result between 0 and 100, then round to integer
    const clamped = Math.max(0, Math.min(100, data.predicted_mental_health_score));
    setResult(Math.round(clamped));
    const payload = {
      screen_time_hours: parseFloat(formData.screen_time_hours),
      sleep_quality_1_5: parseFloat(formData.sleep_quality_1_5),
      stress_level_0_10: parseFloat(formData.stress_level_0_10),
      sleep_hours: parseFloat(formData.sleep_hours),
      age: parseFloat(formData.age)
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
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
          { name: "age", label: "Age" },
          { name: "screen_time_hours", label: "Screen Time (hrs)",min:0,max:24 },
          { name: "sleep_quality_1_5", label: "Sleep Quality (1–5)", min:1,max:5},
          { name: "stress_level_0_10", label: "Stress Level (0–10)",min:0,max:10 },
          { name: "sleep_hours", label: "Sleep Hours",min:0,max:24 },
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
              min={field.min}
              max={field.max}
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
