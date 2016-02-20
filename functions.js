$(document).ready(function() {
    $("#article-one").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-one").css("visibility", "hidden");
      $("#text-one").css("visibility", "visible")
    });
    $("#article-one").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-one").css("visibility", "visible");
      $("#text-one").css("visibility", "hidden")
    });
    $("#article-two").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-two").css("visibility", "hidden");
      $("#text-two").css("visibility", "visible")
    });
    $("#article-two").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-two").css("visibility", "visible");
      $("#text-two").css("visibility", "hidden")
    });
    $("#article-three").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-three").css("visibility", "hidden");
      $("#text-three").css("visibility", "visible")
    });
    $("#article-three").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-three").css("visibility", "visible");
      $("#text-three").css("visibility", "hidden")
    });
    $("#article-four").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-four").css("visibility", "hidden");
      $("#text-four").css("visibility", "visible")
    });
    $("#article-four").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-four").css("visibility", "visible");
      $("#text-four").css("visibility", "hidden")
    });
    $("#article-five").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-five").css("visibility", "hidden");
      $("#text-five").css("visibility", "visible")
    });
    $("#article-five").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-five").css("visibility", "visible");
      $("#text-five").css("visibility", "hidden")
    });
    $("#article-six").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-six").css("visibility", "hidden");
      $("#text-six").css("visibility", "visible")
    });
    $("#article-six").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-six").css("visibility", "visible");
      $("#text-six").css("visibility", "hidden")
    });
});
