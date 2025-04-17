function changeText() {
    const textEl = document.getElementById("text");
    textEl.textContent = "🎉 The text has been updated dynamically!";
}

function toggleStyle() {
    const heading = document.getElementById("main-heading");
    heading.classList.toggle("highlight");
}

function addElement() {
    const list = document.getElementById("list-container");
    const newItem = document.createElement("li");
    newItem.textContent = "🆕 New list item added!";
    list.appendChild(newItem);
}

function removeElement() {
    const list = document.getElementById("list-container");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    } else {
        alert("No more elements to remove!");
    }
}
