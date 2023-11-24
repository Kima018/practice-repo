fetch("https://reqres.in/api/users?page=2")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
document.cookie =
  "korisnickoIme=JohnDoe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
