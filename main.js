var iframe = $("iframe:first");
var iframe_src = iframe.attr("src");
var youtube_video_id = iframe_src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

if (youtube_video_id.length == 11) {
  var video_thumbnail = $('<img src="//img.youtube.com/vi/' + youtube_video_id + '/0.jpg">');
  $("body").append(video_thumbnail);

  $("img:first").click(function () {
    $("iframe:first").fadeToggle("400");
  });
}
