$( document ).ready(function() {

  var applyButton, applyForm, htmlBody, formId;

  applyButton = $('.btn-slider');
  applyForm = $('.position-section__form');
  htmlBody = $('html,body');
  formId = $('#formId');

  applyButton.on('click', function() {
    applyForm.addClass('form__is-expanded');
    htmlBody.animate({scrollTop: formId.offset().top},'slow');
  })
});