const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusText.textContent = "Sending...";
  statusText.style.color = "#6ea8fe";

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbxdTovhvtX70-f9y8xVkEYkOM0C9aoETZ4flFaGq_9h4C40yXBehbwCMZkVTORVQDrF/exec", {
    method: "POST",
    body: formData
  })
  .then(() => {
    statusText.textContent = "Message sent successfully!";
    statusText.style.color = "limegreen";

    form.reset();

    // ⏳ Hide success message after 3 seconds
    setTimeout(() => {
      statusText.textContent = "";
    }, 3000);
  })
  .catch((error) => {
    console.error(error);
    statusText.textContent = "Network error. Try again later.";
    statusText.style.color = "red";

    // ⏳ Hide error message after 3 seconds
    setTimeout(() => {
      statusText.textContent = "";
    }, 3000);
  });
});
