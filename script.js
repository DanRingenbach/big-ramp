$(document).ready(function () {

    $('#overlay').hide();

    // Click event for main images
    $('.gallery-img').click(function () {
      var imgSrc = $(this).attr('src');
      $('#overlayImg').attr('src', imgSrc);
      $('#overlay').fadeIn();
    });

    // Click event for overlay to close it
    $('#overlay').click(function () {
      $(this).fadeOut();
    });

    function openPdfOverlay(pdfSrc) {
        $('#overlayContent').html('<iframe src="' + pdfSrc + '" width="100%" height="100%" style="border: none;"></iframe>');
        $('#overlay').fadeIn();
      }
  });