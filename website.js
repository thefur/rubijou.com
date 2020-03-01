(function($) {
  $.getJSON('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
    var main = $('main');

    main.append('<img src="' + data[0]['url'] + '">');
    main.fadeIn();
  });
})(jQuery);
