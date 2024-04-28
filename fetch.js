let container = document.getElementById("container");
let fetchButton = document.getElementById("fetchButton");

fetchButton.addEventListener("click", fetchData);

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        appendData(data);
        container.style.display = "block"; // Show the container after data is fetched
    })
    .catch(error => console.error("Error fetching data:", error));
    fetchButton.classList.add("clicked");
}

function appendData(data) {
    container.innerHTML = ""; // Clear previous content
    data.forEach(item => {
        let todo = createTodoItem(item);
        container.append(todo);
    });
}

function createTodoItem(item) {
    let div = document.createElement("div");
    let label = document.createElement("label");
    label.innerText = item.title;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    div.append(label, checkbox);
    return div;
}
