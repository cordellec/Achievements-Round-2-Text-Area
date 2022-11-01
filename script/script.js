const myTextArea = document.getElementById("my-textarea");
const remaningCharText = document.getElementById("my-textarea-remaining-chars");
const maxChars = 500;

myTextArea.addEventListener("input", () => {
  const remaining = maxChars - myTextArea.value.length;
  const colour = remaining < maxChars * 0.1 ? "red" : null;

  remaningCharText.textContent = `${remaining} characters remaining`;
  remaningCharText.style.color = colour;
});
