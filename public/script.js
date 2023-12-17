$(document).ready(function () {
  setTimeout(() => {
    $(".modal-wrapper").fadeIn();
  }, 500);

  $("#email-form").on("submit", (event) => {
    event.preventDefault();

    const email = $("#email").val();
    if (email.length == 0 || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        $("#email-form p").removeClass("success");
        $("#email-form p").addClass("error");
        $("#email-form p").html("Please enter your email address");
      return;
    } else {
        $("#email-form p").removeClass("error");
        $("#email-form p").addClass("success");
        $('.initial-popup').hide();
        $('.final-popup').show();
    }
    $("#email-form p").html("");
  });

  $(".modal-close").on("click", () => {
    $(".modal-wrapper").fadeOut();
  });
});
