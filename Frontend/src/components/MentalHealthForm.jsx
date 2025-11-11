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
  const [showStressTable, setShowStressTable] = useState(false);

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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      const clamped = Math.max(0, Math.min(100, data.predicted_mental_health_score));
      setResult(Math.round(clamped));
    } catch (error) {
      setResult("Error: Unable to connect to API.");
    }
  };

  const getMentalHealthLabel = (score) => {
    if (score >= 0 && score <= 20) return { label: "ภาวะเครียด", detail: "อาจมีภาวะซึมเศร้าหรือความเครียดสูง มีแนวโน้มต้องการความช่วยเหลือจากผู้เชี่ยวชาญ", color: "text-red-500" };
    if (score <= 40) return { label: "สุขภาพจิตต่ำ", detail: "มีอาการเครียด วิตกกังวล หรือหมดแรงจูงใจบ้าง ควรได้รับการดูแลหรือพักผ่อน", color: "text-orange-500" };
    if (score <= 60) return { label: "สุขภาพจิตปานกลาง", detail: "อยู่ในระดับปกติ อาจมีอารมณ์ขึ้นลงตามสถานการณ์ ควรดูแลตนเองอย่างต่อเนื่อง", color: "text-yellow-500" };
    if (score <= 80) return { label: "สุขภาพจิตดี", detail: "มีความมั่นคงทางอารมณ์ รับมือกับความเครียดได้ดี มีความสุขในชีวิตประจำวัน", color: "text-green-500" };
    return { label: "สุขภาพจิตดีเยี่ยม", detail: "มีความยืดหยุ่นทางจิตใจสูง อารมณ์มั่นคง มองโลกในแง่ดี และมีพลังบวก", color: "text-teal-600" };
  };

  const stressLevels = [
    "ไม่มีความเครียดเลย (No Stress)",
    "ผ่อนคลายแต่เริ่มมีสิ่งรบกวนเล็กน้อย (Barely Noticeable Stress)",
    "ความเครียดต่ำมาก (Very Low Stress)",
    "ความเครียดเล็กน้อย (Mild Stress)",
    "ความเครียดค่อนข้างต่ำ (Low-Moderate Stress)",
    "ความเครียดปานกลาง (Moderate Stress)",
    "ความเครียดปานกลางค่อนไปสูง (Moderately High Stress)",
    "ความเครียดสูง (High Stress)",
    "ความเครียดรุนแรง (Very High Stress)",
    "ความเครียดเฉียบพลัน (Severe Stress)",
    "ความเครียดขั้นวิกฤติ (Extreme / Crisis Level Stress)"
  ];

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl border border-gray-200 shadow-md p-6">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
        Mental Health Predictor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "age", label: "Age" },
          { name: "screen_time_hours", label: "Screen Time (hrs)", min: 0, max: 24 },
          { name: "sleep_quality_1_5", label: "Sleep Quality (1–5)", min: 1, max: 5 },
          { name: "sleep_hours", label: "Sleep Hours", min: 0, max: 24 },
          { name: "stress_level_0_10", label: "Stress Level (0–10)", min: 0, max: 10 },
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
            {field.name === "stress_level_0_10" && (
              <button
                type="button"
                onClick={() => setShowStressTable(!showStressTable)}
                className="mt-2 text-sm text-teal-600 hover:underline self-start"
              >
                {showStressTable ? "Hide Stress Table" : "View Stress Table"}
              </button>
            )}
          </div>
        ))}

        {showStressTable && (
          <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-600 font-medium">
                <tr>
                  <th className="px-3 py-2 border-r">ระดับ</th>
                  <th className="px-3 py-2">คำอธิบาย</th>
                </tr>
              </thead>
              <tbody>
                {stressLevels.map((desc, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-3 py-2 border-r font-semibold">{index}</td>
                    <td className="px-3 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

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
          {typeof result === "number" ? (
            <>
              <p className="text-2xl font-bold text-teal-600">{result}</p>
              <p className={`text-sm mt-2 font-medium ${getMentalHealthLabel(result).color}`}>
                {getMentalHealthLabel(result).label}
              </p>
              <p className="text-sm mt-2 font-light">
                {getMentalHealthLabel(result).detail}
              </p>
            </>
          ) : (
            <p className="text-red-600 font-medium">{result}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MentalHealthForm;