const textareaForm = document.querySelector(".message");
const p = document.querySelector(".text-counter");
console.log(textareaForm);
textareaForm.addEventListener("input", () => {
  let lettersCount = textareaForm.value.length;

  if (lettersCount >= 40) {
    textareaForm.style.color = "red";
    p.style.color = "red";
  } else if (lettersCount >= 30 && lettersCount < 40) {
    textareaForm.style.color = "orange";
    p.style.color = "orange";
  } else {
    textareaForm.style.color = "white";
    p.style.color = "white";
  }
  p.textContent = lettersCount;
});
