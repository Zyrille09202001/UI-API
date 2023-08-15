document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("userList");
  
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
  
      userList.innerHTML = data.data.map(user => `
        <div class="user-card">
          <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
          <p>${user.first_name} ${user.last_name}</p>
          <p> ${user.email}</p>
        </div>
      `).join("");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  });
  