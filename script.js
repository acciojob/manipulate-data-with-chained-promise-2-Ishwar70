const output = document.getElementById("output");

// Initially empty
output.textContent = "";

// First promise resolves after 1 second
new Promise((resolve) => {
  setTimeout(() => {
    resolve([2, 4]);
  }, 1000);
})
  .then((res) => {
    output.textContent = res.join(","); // #output shows "2,4"

    // Second promise resolves after 2 more seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([4, 8]);
      }, 2000);
    });
  })
  .then((res) => {
    output.textContent = res.join(","); // #output shows "4,8"
  });
