const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const age = ageInput.value;
  const name = nameInput.value;

  // Validation (no period)
  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

  // Clear previous output
  output.textContent = "";

  // Promise with 4-second delay
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });

  promise
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
      output.textContent = `Welcome, ${name}. You can vote.`;
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
      output.textContent = `Oh sorry ${name}. You aren't old enough.`;
    });
});
