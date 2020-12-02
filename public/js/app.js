console.log("Client side JavaScript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msgOne = document.querySelector("#msg-1");
const msgTwo = document.querySelector("#msg-2");

// We add an event listener - callback runs evertime event occurs
weatherForm.addEventListener("submit", (event) => {
  // Prevents default behaviour - stops page refresh
  event.preventDefault();

  // Get the search text value
  const location = search.value;

  msgOne.textContent = "Loading...";
  msgTwo.textContent = "";

  // Weather data is fetched when form is submitted
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        msgOne.textContent = data.error;
      } else {
        msgOne.textContent = data.location;
        msgTwo.textContent = data.forecast;
      }
    });
  });
});
