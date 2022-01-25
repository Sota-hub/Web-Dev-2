const ul = document.getElementById("list");
const input = document.getElementById("add-input");
const button = document.getElementById("add-btn");

const addNote = (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  const value = input.value;

  li.innerHTML = `<p>${value}</p><p><i class="fa fa-pencil"></i><i class="fa fa-times"></i></p>`;
  ul.appendChild(li);
  input.value = "";
};

button.addEventListener("click", () => addNote(event));
