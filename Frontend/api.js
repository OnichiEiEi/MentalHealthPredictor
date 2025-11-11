document.getElementById("predict-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // Convert string inputs to float
  for (let key in data) {
    data[key] = parseFloat(data[key]);
  }

  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/predict`, {
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