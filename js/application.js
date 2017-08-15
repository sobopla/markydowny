requirejs(["markdown"], function(markdown) {

function MarkdownRenderer() {
  this.text = "Z";
}

MarkdownRenderer.prototype.transform = function(theMarkupText) {
  return markdown.toHTML(theMarkupText);
}

var renderer = new MarkdownRenderer;

$(document).ready(function(){
  $(".markdown").keyup(function(){
    $("#preview").html(renderer.transform($(".markdown").val()));
  });
});

});
