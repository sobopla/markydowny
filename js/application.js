function MarkdownRenderer() {
  this.text = "Z";
}

MarkdownRenderer.prototype.transform = function(theMarkupText) {
  return theMarkupText.replace(/_(.*)_/g, "<i>$1</i>");
}

var renderer = new MarkdownRenderer;

$(document).ready(function(){
  $(".markdown").keyup(function(){
    $("#preview").html(renderer.transform($(".markdown").val()));
  });
});
