$(document).ready(function () {
  "use strict";

  var applyButton, applyForm, htmlBody, formId, uploadCv, textCv, contactForm, submitButton, emailField, errorLabel;

  applyButton = $('.apply-button');
  applyForm = $('.position-section__form');
  htmlBody = $('html,body');
  formId = $('#formId');
  uploadCv = $('.upload-cv');
  textCv = $('.cv-name > p');
  contactForm = $('form[name="contactForm"]');
  submitButton = $('.position-section__button--submit');
  emailField = $('input[name="email"]');
  errorLabel = $('.label-error');

  applyButton.on('click', function () {
    applyForm.addClass('form__is-expanded');
    htmlBody.animate({scrollTop: formId.offset().top}, 'slow');
    applyButton.addClass('hidden');
  });

  uploadCv.on('change', function (e) {
    var fileName = e.target.files[0];
    //if there is no file change it
    fileName = fileName ? fileName.name : '';
    // name of the file in html
    textCv.text(fileName);
    //label removal for input type
    var currentInput = e.target;
    $(currentInput.labels[1]).addClass('hidden');
  });

  //button shake animation
  function animationSubmit() {
    submitButton.addClass('submit-error');
    setTimeout(function () {
      submitButton.removeClass('submit-error');
    }, 1000);
  }

  //filter the label
  function getLabel(labels, labelName) {
    var len = labels.length;
    for (var i = 0; i < len; i++) {
      if ($(labels[i]).attr('for') === labelName){
        return $(labels[i]);
      }
    }
  }


  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = re.test(email);
    //get only the label associated with the email input
    var emailLabel = getLabel(errorLabel, 'email');
    valid ? emailLabel.text('') : emailLabel.text("please insert a valid email");
    return valid;
  }



  contactForm.on("submit", function (event) {
    event.preventDefault();
    var fail = false;
    $(this).find('input, textarea').each(function(){
      var singleInput = $(this);
      singleInput.on('focus', function () {
        $(this.labels[1]).addClass('hidden');
      });
      if(singleInput.prop('required')) {
        if (!singleInput.val()) {
          $(this.labels[1]).removeClass('hidden');
          fail = true;
        }
      }
    });

    // if (fail) {
    //   var formData = new FormData(this);
    //   $.ajax({
    //     url: 'php/upload-form.php',
    //     type: 'POST',
    //     data: formData,
    //     async: false,
    //     success: function (data) {
    //       alert(data)
    //     },
    //     cache: false,
    //     contentType: false,
    //     processData: false
    //   });
    // }

    return false;
  })

});