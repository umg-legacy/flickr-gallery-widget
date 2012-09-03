$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=e9exxx009a5b5xxxxxx707&photoset_id=7215xxxxx608&format=json&nojsoncallback=1", function (data) {
var list = $("<ul id=’gallery’></ul>").appendTo("#images");
$.each(data.photoset.photo, function(i,item){
var photo = ‘http://farm’ + item.farm + ‘.static.flickr.com/’ + item.server + ‘/’ + item.id + ‘_’ + item.secret + ‘.jpg’; //WAS item.originalsecret _o
$("<img>").attr("src", photo).appendTo(list)
</pre>
