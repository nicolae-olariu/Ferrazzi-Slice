$(document).ready(function () {
  "use strict";

  var applyButton, applyForm, htmlBody, formId, uploadCv, textCv, contactForm, submitButton;

  applyButton = $('.apply-button');
  applyForm = $('.position-section__form');
  htmlBody = $('html,body');
  formId = $('#formId');
  uploadCv = $('.upload-cv');
  textCv = $('.cv-name > p');
  contactForm = $('form[name="contactForm"]');
  submitButton = $('.position-section__button--submit');

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
  });

  function animationSubmit() {
    debugger
    submitButton.addClass('submit-error');
    setTimeout(function () {
      submitButton.removeClass('submit-error');
    }, 1000);
  }

  contactForm.validate({
    debug: true,
    ignore: [],
    rules: {
      name: 'required',
      phone: {
        required: true,
        digits: true
      },
      email: {
        required: true,
        email: true
      },
      cv: {
        required: true
      }
    },
    messages: {
      name: 'Please provide your name',
      phone: {
        required:'Please provide your number',
        digits: 'please provide a valid number'
      },
      email: {
        required: 'please enter an email address',
        email:'Please enter a valid email address'
      },
      cv: 'Please upload your cv'
    },
    invalidHandler: function () {
      animationSubmit();
    },
    submitHandler: function (form) {
      var formData = new FormData(form);
        $.ajax({
          url: 'php/upload-form.php',
          type: 'POST',
          data: formData,
          async: false,
          success: function (data) {
            alert(data)
          },
          cache: false,
          contentType: false,
          processData: false
        });
    }
  });

  // contactForm.on("submit", function (event) {
  //   event.preventDefault();
  //
  //   debugger;
  //
  //   // var formData = new FormData(this);
  //   // $.ajax({
  //   //   url: 'php/upload-form.php',
  //   //   type: 'POST',
  //   //   data: formData,
  //   //   async: false,
  //   //   success: function (data) {
  //   //     alert(data)
  //   //   },
  //   //   cache: false,
  //   //   contentType: false,
  //   //   processData: false
  //   // });
  //
  //   return false;
  // })

});