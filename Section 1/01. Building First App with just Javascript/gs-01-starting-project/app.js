window.addEventListener("DOMContentLoaded", function () {
  const buttonEl = document.querySelector("button");
  const inputEl = document.querySelector("input");
  const listEl = document.querySelector("ul");

  buttonEl.addEventListener("click", function () {
    const goal = inputEl.value;
    if (goal === "") {
      return;
    }
    inputEl.value = "";

    const child = document.createElement("li");
    child.innerText = goal;

    listEl.appendChild(child);
  });
});
