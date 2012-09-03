// Flickr Gallery Widget

// Grab Flickr JSON feed - "1267301@N24" is the Flickr ID, obtained from http://idgettr.com/
$.getJSON("http://api.flickr.com/services/feeds/groups_pool.gne?id=1267301@N24&lang=en-us&format=json&jsoncallback=?", function(data){

  $.each(data.items, function(i,item){

    $("<img/>").attr("src", item.media.m).appendTo(".flickr-gallery-widget .images")

      // Put together list item
      .wrap("<li><a href='" + item.link + "' target=\"_blank\"></a></li>");

  });

  // Title linking to Flickr source
  $(".flickr-gallery-widget h1").html("<a href='"+data.link+"' target=\"_blank\">The "+data.title+"</a>");

  // Description of gallery (hidden by default)
  $(".flickr-gallery-widget p").html(data.description);

  // Hide/show gallery controls
  $('.flickr-gallery-widget').hover(
    function() { $('.flickr-gallery-widget .gallery-nav').fadeIn(); },
    function() { $('.flickr-gallery-widget .gallery-nav').fadeOut(); }
  );

  // Set up jQuery Cycle Lite plugin
  $('.flickr-gallery-widget .images').cycle({
    timeout: 1000,
    fit: 1,
    pause: 1,
    width: 293,
    height: 197,
    next: '.next',
    prev: '.prev'
  });

});
