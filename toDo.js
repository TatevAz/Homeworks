let inputBox = document.getElementById("input");
let buttonBox = document.getElementById("addButton");
let listContainer = document.getElementById("list-container");

buttonBox.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Write something imprtant");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";

    li.addEventListener("click", function () {
      li.style.textDecoration = "line-through";
    });

    li.addEventListener("dblclick", function () {
      listContainer.removeChild(li);
    });
  }
});
