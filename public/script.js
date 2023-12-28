$(document).ready(function () {
  // Modal Auto Open Function
  setTimeout(() => {
    $(".modal-wrapper").fadeIn();
  }, 500);

  $("#email-form").on("submit", (event) => {
    event.preventDefault();
    // Creating A Form Data
    const formData = new FormData(event.target);
    // Getting Form Email Value
    const emailValue = formData.get('email');

    const email = $("#email").val();
    // regex for email validation
    if (email.length == 0 || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        $("#email-form p").removeClass("success");
        $("#email-form p").addClass("error");
        $("#email-form p").html("Please enter your valid email address");
      return;
    } else {
        $("#email-form p").removeClass("error");
        $("#email-form p").addClass("success");
        $('.initial-popup').hide();
        $('.final-popup').show();

        alert(`Thank you for subscribing.\nYou will receive emails from us at ${emailValue}`);
    }
    $("#email-form p").html("");
  });

  // Modal Close Function
  $(".modal-close").on("click", () => {
    $(".modal-wrapper").fadeOut();
  });
});
