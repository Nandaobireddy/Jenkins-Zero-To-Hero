function fetchBackend() {
    fetch("http://localhost:5000/api")
      .then(res => res.json())
      .then(data => {
        document.getElementById("response").innerText = data.message;
      })
      .catch(err => console.error("Error calling backend:", err));
  }