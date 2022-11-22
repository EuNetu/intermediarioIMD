/*$(document).ready(function () {
  $("#question-1").click(function () {
      $("#answer-1").toggle();
  });

  $("#question-2").click(function () {
      $("#answer-2").toggle();
  });

  $("#question-3").click(function () {
      $("#answer-3").toggle();
  });
});*/

function acharPrimeiroIrmao(event) {
  var target = $( event.target );
  var li = target.parent();
  var p = li.children()[1]
  $(p).toggle()
}
$("a").click(acharPrimeiroIrmao);
