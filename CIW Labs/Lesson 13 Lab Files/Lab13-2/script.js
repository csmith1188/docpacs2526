document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener('click', checkForm);
});

function checkForm() {
    const nameInput = document.getElementById("username1");
    const passwordInput = document.getElementById("password1");
    const emailInput = document.getElementById("email1");
    const websiteInput = document.getElementById("website1");
    const successMessage = document.getElementById("successMessage");

    successMessage.textContent = ""; // Clear previous message

    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();
    const website = websiteInput.value.trim();

    if (!name || !password || !email || !website) {
        alert("Fill All Fields");
        return;
    }

    const usernameFeedback = document.getElementById("username").innerText;
    const passwordFeedback = document.getElementById("password").innerText;
    const emailFeedback = document.getElementById("email").innerText;
    const websiteFeedback = document.getElementById("website").innerText;

    if (
        usernameFeedback === "Must be 3+ letters" ||
        passwordFeedback === "Password too short" ||
        emailFeedback === "Invalid email" ||
        websiteFeedback === "Invalid website"
    ) {
        alert("Some fields are invalid. Please correct and resubmit.");
        return;
    }

    // Clear the form inputs
    nameInput.value = "";
    passwordInput.value = "";
    emailInput.value = "";
    websiteInput.value = "";

    // Clear all validation feedback messages
    document.getElementById("username").textContent = "";
    document.getElementById("password").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("website").textContent = "";

    // Show success message with extra spacing
    successMessage.textContent = "Your information has been submitted successfully.";
}

function validate(field, query) {
    const feedbackElement = document.getElementById(field);
    feedbackElement.innerText = "Validating...";

    fetch(`https://www.ucertify.com/utils/validation-test.php?field=${field}&query=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(text => {
            feedbackElement.innerHTML = text;
        })
        .catch(() => {
            feedbackElement.innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
        });
}
