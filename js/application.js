function MarkdownModel() {
}

MarkdownModel.prototype.transform = function(theMarkupText) {
// must do double-star before single-star
  return theMarkupText.replace(/\*\*(.*)\*\*/g, "<b>$1</b>")
                      .replace(/\*(.*)\*/g, "<i>$1</i>")
                      .replace(/_(.*)_/g, "<i>$1</i>");
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

