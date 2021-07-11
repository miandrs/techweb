$( document ).ready(function () {
  // nombre des contenus à afficher
  $(".moreAbout").slice(0, 1).show();
    // on affiche le bouton loadmore s'il y a des contenues cachés
    if ($(".blogAbout:hidden").length != 0) {
      $("#loadMore").show();
    }   
    // déclenchement de l'évènement loadmore lors du click sur le bouton
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreAbout:hidden").slice(0, 2).slideDown();
      if ($(".moreAbout:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });