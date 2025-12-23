//your JS code here. If required.
const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const age = ageInput.value;
  const name = nameInput.value;

  // Validation (NO period at the end)
  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

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
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
