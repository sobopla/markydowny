requirejs(["markdown/markdown"], function(markdown) {

function MarkdownRenderer() {
  this.text = "Z";
}

MarkdownRenderer.prototype.transform = function(theMarkupText) {
  return markdown.toHTML(theMarkupText);
}

var renderer = new MarkdownRenderer;

$(document).ready(function(){
  $(".userinput").keyup(function(){
    $("#preview").html(renderer.transform($(".userinput").val()));
  });
});

});
