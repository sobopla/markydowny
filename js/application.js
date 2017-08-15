requirejs(["markdown/markdown"], function(markdown) {

function MarkdownModel() {
}

MarkdownModel.prototype.transform = function(theMarkupText) {
  return markdown.toHTML(theMarkupText);
}

function MarkdownView() {
}

MarkdownView.prototype.getMarkdownText = function() {
  return $(".userinput").val();
}

MarkdownView.prototype.setHTML = function(theHtmlVersion) {
  $("#preview").html(theHtmlVersion);
}

function MarkdownController(model, view) {
  $(".userinput").keyup(function(){
    view.setHTML(model.transform(view.getMarkdownText()));
  });
}

$(document).ready(function(){
  var model      = new MarkdownModel;
  var view       = new MarkdownView;
  var controller = new MarkdownController(model, view);
});

});
