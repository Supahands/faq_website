$(document).ready(function () {
  var accordionId = location.hash;
  $(accordionId).on('shown.bs.collapse', function () {
    var position = $(accordionId).offset().top;
    $('body').animate({ scrollTop: position }, 500); //500 specifies the speed
  });

  $(accordionId).click();
});