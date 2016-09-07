$( document ).ready(function() {
  "use strict";

  var applyButton, applyForm, htmlBody, formId, uploadCv, textCv, contactForm;

  applyButton = $('.apply-button');
  applyForm = $('.position-section__form');
  htmlBody = $('html,body');
  formId = $('#formId');
  uploadCv = $('.upload-cv');
  textCv = $('.cv-name > p');
  contactForm = $('form[name="contactForm"]');

  applyButton.on('click', function() {
    applyForm.addClass('form__is-expanded');
    htmlBody.animate({scrollTop: formId.offset().top},'slow');
    applyButton.addClass('hidden');
  });

  uploadCv.on('change', function(e) {
    var fileName = e.target.files[0];
    //if there is no file change it
    fileName = fileName ? fileName.name:'';
    // name of the file in html
    textCv.text(fileName);
  });

  contactForm.on("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    // console.log( $( this ).serialize() );
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



    return false;
  })

});