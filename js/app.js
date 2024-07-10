const uri = "https://jsonplaceholder.typicode.com/users";

async function loadDatos() {
  try {
    const response = await fetch(uri);
    if (!response.ok) {
      throw new Error('Error al cargar ' + response.statusText);
    }
    const todos = await response.json(); 
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < todos.length; i++) {
      console.log(todos[i].name);

      const row = document.createElement("tr");
      const column1 = document.createElement("td");
      column1.textContent = todos[i].id;
      const column2 = document.createElement("td");
      column2.textContent = todos[i].name;
      const column3 = document.createElement("td");
      column3.textContent = todos[i].address.city;

      row.appendChild(column1);
      row.appendChild(column2);
      row.appendChild(column3);

      fragment.appendChild(row);
    }

    document.getElementById("table-container").appendChild(fragment);
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}

document.addEventListener("DOMContentLoaded", loadDatos);
 




async function fetchUserById() {
  const userId = document.getElementById('user-id-input').value;
  if (!userId) {
    alert('Por favor ingrese un ID de usuario');
    return;
  }

  try {
    const response = await fetch(`${uri}/${userId}`);
    if (!response.ok) {
      throw new Error('Error al cargar ' + response.statusText);
    }
    const user = await response.json(); 
    const userDetails = document.getElementById('user-details');
    userDetails.textContent = `Nombre: ${user.name}, Teléfono: ${user.phone}`;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}


document.getElementById('fetch-user-btn').addEventListener('click', fetchUserById);

document.addEventListener("DOMContentLoaded", loadDatos);