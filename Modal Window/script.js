const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let x = 0; x < btnsOpenModel.length; x++)
  btnsOpenModel[x].addEventListener("click", openModal);

btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

// IMPLEMENT KEYBOARD EVENT

document.addEventListener("keydown", function (e) {
  console.log("a key was pressed");
  console.log(e.key);

  if (e.key == "Escape") {
    closeModel();
  }
});
