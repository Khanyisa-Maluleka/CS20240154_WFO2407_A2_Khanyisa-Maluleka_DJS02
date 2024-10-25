const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "") {
    result.innerText ="Division not performed. Both values are required in inputs. Try again"
    return;
  }

  if (isNaN(dividend) || isNaN(divider)) {
    console.error("Input not numeric")
    document.body.innerText = "Something critical went wrong. Please reload the page"
  }

  if (Number(divider) === 0) {
    console.error("Division by zero is an error")
    result.innerText = "Division not performed. Invalid number provided. Try again"
    return;
  }

  result.innerText = Math.floor(dividend / divider);
});