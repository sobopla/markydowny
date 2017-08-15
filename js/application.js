function MarkdownRenderer() {
  this.text = "Z";
}

MarkdownRenderer.prototype.transform = function(theMarkupText) {
// must do double-star before single-star
  return theMarkupText.replace(/\*\*(.*)\*\*/g, "<b>$1</b>")
                      .replace(/\*(.*)\*/g, "<i>$1</i>")
                      .replace(/_(.*)_/g, "<i>$1</i>");
}

var renderer = new MarkdownRenderer;

$(document).ready(function(){
  $(".markdown").keyup(function(){
    $("#preview").html(renderer.transform($(".markdown").val()));
  });
});
