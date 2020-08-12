$( document ).ready(function() {
    $('.collapse').on('show.bs.collapse', function () {
    
    // hide all accordion except the clicked one
    $('.collapse').not(this).collapse('hide');
  });
});