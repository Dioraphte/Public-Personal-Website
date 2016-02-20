$(document).ready(function() {
    $("#article-one").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-one").css("visibility", "hidden");
    });
    $("#article-one").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-one").css("visibility", "visible");
    });
    $("#article-two").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-two").css("visibility", "hidden");
    });
    $("#article-two").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-two").css("visibility", "visible");
    });
    $("#article-three").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-three").css("visibility", "hidden");
    });
    $("#article-three").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-three").css("visibility", "visible");
    });
    $("#article-four").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-four").css("visibility", "hidden");
    });
    $("#article-four").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-four").css("visibility", "visible");
    });
    $("#article-five").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
      $("#thumbnail-text-five").css("visibility", "hidden");
    });
    $("#article-five").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-five").css("visibility", "visible");
    });
    $("#article-six").hover(function() {
      $(this).css("flex-grow", "9001");
      $(this).css("max-width", "none");
        $("#thumbnail-text-six").css("visibility", "hidden");
    });
    $("#article-six").mouseleave(function() {
      $(this).css("flex-grow", "1");
      $(this).css("max-width", "16.666666666")
      $("#thumbnail-text-six").css("visibility", "visible");
    });
});
