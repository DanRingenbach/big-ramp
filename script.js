$(document).ready(function () {

    $('#overlay').hide();

    $('.gallery-img').click(function () {
        var imgSrc = $(this).attr('src');
        $('#overlayImg').attr('src', imgSrc);
        $('#overlay').fadeIn();
      });

      // Click event for overlay to close it
      $('#overlay').click(function () {
        $(this).fadeOut();
      });

  });

  function openPdfInNewTab(pdfSrc) {
    window.open(pdfSrc, '_blank');
  }