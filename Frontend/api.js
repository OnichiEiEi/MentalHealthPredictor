document.getElementById("predict-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // Convert string inputs to float
  for (let key in data) {
    data[key] = parseFloat(data[key]);
  }

  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById("result").innerText =
    "Predicted Mental Health Score: " + result.predicted_mental_health_score;
});