document.getElementById("studentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;

    const response = await fetch("/students/store", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, city })
    });

    const data = await response.json();

    const resultDiv = document.getElementById("result");
    if (response.ok) {
        resultDiv.innerHTML = `✅ Name: ${data.data.name}, City: ${data.data.city}`;
    } else {
        resultDiv.innerHTML = `❌ Error: ${data.errors.map(err => err.message).join(", ")}`;
    }
});