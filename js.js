const button = document.querySelector(".button");
const txt = document.querySelector(".txt");
const close = document.querySelector(".close");

button.addEventListener("click", () => {
    txt.classList.add("visible");
});

close.addEventListener("click", () => {
    txt.classList.remove("visible");
});
