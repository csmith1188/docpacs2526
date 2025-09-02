// Wait for the DOM to be fully loaded
$(document).ready(function () {
  // Initialize Parsley validation on the form
  $('#registrationForm').parsley();

  // Attach submit event handler to the form
  $('#registrationForm').on('submit', function (event) {
    // Validate the form using Parsley
    const isValid = $(this).parsley().validate();

    if (!isValid) {
      // If the form is invalid, prevent submission
      event.preventDefault();
      event.stopPropagation();
      alert('Please correct the errors in the form before submitting.');
    }
    // If valid, form will submit naturally to submitted.html
  });
});
