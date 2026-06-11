async function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: user,
      password: pass
    })
  });

  const data = await response.json();

  if (data.success) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Foute login!";
  }
}