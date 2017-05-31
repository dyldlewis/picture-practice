$(document).ready(function() {
  $("span#display").click(function() {
    $("div#picture").prepend("<img src=\"img/fruit.jpg\">");
    $("div#picture").children().click(function() {
      $(this).remove();
    });
  });
});
