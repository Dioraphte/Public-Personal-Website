$(document).ready(function() {
  $("#article-one").hover(function() {
    $("#article-one").css("flex-grow", "9001");
    $("#article-one").css("max-width", "none");
    $("#thumbnail-text-one").css("visibility", "hidden");
    $("#text-one").css("visibility", "visible")
  });
  $("#article-one").mouseleave(function() {
    $("#article-one").css("flex-grow", "1");
    $("#article-one").css("max-width", "16.666666666")
    $("#thumbnail-text-one").css("visibility", "visible");
    $("#text-one").css("visibility", "hidden");
  });
  $("#article-two").hover(function() {
    $("#article-two").css("flex-grow", "9001");
    $("#article-two").css("max-width", "none");
    $("#thumbnail-text-two").css("visibility", "hidden");
    $("#text-two").css("visibility", "visible");
  });
  $("#article-two").mouseleave(function() {
    $("#article-two").css("flex-grow", "1");
    $("#article-two").css("max-width", "16.666666666")
    $("#thumbnail-text-two").css("visibility", "visible");
    $("#text-two").css("visibility", "hidden");
  });
  $("#article-three").hover(function() {
    $("#article-three").css("flex-grow", "9001");
    $("#article-three").css("max-width", "none");
    $("#thumbnail-text-three").css("visibility", "hidden");
    $("#text-three").css("visibility", "visible");
  });
  $("#article-three").mouseleave(function() {
    $("#article-three").css("flex-grow", "1");
    $("#article-three").css("max-width", "16.666666666")
    $("#thumbnail-text-three").css("visibility", "visible");
    $("#text-three").css("visibility", "hidden");
  });
  $("#article-four").hover(function() {
    $("#article-four").css("flex-grow", "9001");
    $("#article-four").css("max-width", "none");
    $("#thumbnail-text-four").css("visibility", "hidden");
    $("#text-four").css("visibility", "visible");
  });
  $("#article-four").mouseleave(function() {
    $("#article-four").css("flex-grow", "1");
    $("#article-four").css("max-width", "16.666666666")
    $("#thumbnail-text-four").css("visibility", "visible");
    $("#text-four").css("visibility", "hidden");
  });
  $("#article-five").hover(function() {
    $("#article-five").css("flex-grow", "9001");
    $("#article-five").css("max-width", "none");
    $("#thumbnail-text-five").css("visibility", "hidden");
    $("#text-five").css("visibility", "visible");
  });
  $("#article-five").mouseleave(function() {
    $("#article-five").css("flex-grow", "1");
    $("#article-five").css("max-width", "16.666666666")
    $("#thumbnail-text-five").css("visibility", "visible");
    $("#text-five").css("visibility", "hidden");
  });
  $("#article-six").hover(function() {
    $("#article-six").css("flex-grow", "9001");
    $("#article-six").css("max-width", "none");
    $("#thumbnail-text-six").css("visibility", "hidden");
    $("#text-six").css("visibility", "visible");
  });
  $("#article-six").mouseleave(function() {
    $("#article-six").css("flex-grow", "1");
    $("#article-six").css("max-width", "16.666666666")
    $("#thumbnail-text-six").css("visibility", "visible");
    $("#text-six").css("visibility", "hidden");
  });
  $("#li-one").hover(function() {
    $("#li-one").css("color", "#6f6f6f");
    $("#underline-one").fadeIn(400);
  });
  $("#li-one").mouseleave(function() {
    $("#li-one").css("color", "#000000")
    $("#underline-one").fadeOut(1000);
  });
  $("#li-two").hover(function() {
    $("#li-two").css("color", "#6f6f6f");
    $("#underline-two").fadeIn(400);
  });
  $("#li-two").mouseleave(function() {
    $("#li-two").css("color", "#000000")
    $("#underline-two").fadeOut(1000);
  });
  $("#li-three").hover(function() {
    $("#li-three").css("color", "#6f6f6f");
    $("#underline-three").fadeIn(400);
  });
  $("#li-three").mouseleave(function() {
    $("#li-three").css("color", "#000000")
    $("#underline-three").fadeOut(1000);
  });
  $("#li-four").hover(function() {
    $("#li-four").css("color", "#6f6f6f");
    $("#underline-four").fadeIn(400);
  });
  $("#li-four").mouseleave(function() {
    $("#li-four").css("color", "#000000")
    $("#underline-four").fadeOut(1000);
  });
  $("#li-five").hover(function() {
    $("#li-five").css("color", "#6f6f6f");
    $("#underline-five").fadeIn(400);
  });
  $("#li-five").mouseleave(function() {
    $("#li-five").css("color", "#000000")
    $("#underline-five").fadeOut(1000);
  });
  $("#li-six").hover(function() {
    $("#li-six").css("color", "#6f6f6f");
    $("#underline-six").fadeIn(400);
  });
  $("#li-six").mouseleave(function() {
    $("#li-six").css("color", "#000000")
    $("#underline-six").fadeOut(1000);
  });
  $("#li-seven").hover(function() {
    $("#li-seven").css("color", "#6f6f6f");
    $("#underline-seven").fadeIn(400);
  });
  $("#li-seven").mouseleave(function() {
    $("#li-seven").css("color", "#000000")
    $("#underline-seven").fadeOut(1000);
  });
  $("#li-one").click(function() {
    $("#article-one").css("flex-grow", "9001");
    $("#article-one").css("max-width", "none");
    $("#thumbnail-text-one").css("visibility", "hidden");
    $("#text-one").css("visibility", "visible");
    $("#article-two").css("flex-grow", "1");
    $("#article-two").css("max-width", "16.666666666")
    $("#thumbnail-text-two").css("visibility", "visible");
    $("#text-two").css("visibility", "hidden");
    $("#article-three").css("flex-grow", "1");
    $("#article-three").css("max-width", "16.666666666")
    $("#thumbnail-text-three").css("visibility", "visible");
    $("#text-three").css("visibility", "hidden");
    $("#article-four").css("flex-grow", "1");
    $("#article-four").css("max-width", "16.666666666")
    $("#thumbnail-text-four").css("visibility", "visible");
    $("#text-four").css("visibility", "hidden");
    $("#article-five").css("flex-grow", "1");
    $("#article-five").css("max-width", "16.666666666")
    $("#thumbnail-text-five").css("visibility", "visible");
    $("#text-five").css("visibility", "hidden");
    $("#article-six").css("flex-grow", "1");
    $("#article-six").css("max-width", "16.666666666")
    $("#thumbnail-text-six").css("visibility", "visible");
    $("#text-six").css("visibility", "hidden");
  });
  $("#li-two").click(function() {
    $("#article-two").css("flex-grow", "9001");
    $("#article-two").css("max-width", "none");
    $("#thumbnail-text-two").css("visibility", "hidden");
    $("#text-two").css("visibility", "visible");
    $("#article-one").css("flex-grow", "1");
    $("#article-one").css("max-width", "16.666666666")
    $("#thumbnail-text-one").css("visibility", "visible");
    $("#text-one").css("visibility", "hidden");
    $("#article-three").css("flex-grow", "1");
    $("#article-three").css("max-width", "16.666666666")
    $("#thumbnail-text-three").css("visibility", "visible");
    $("#text-three").css("visibility", "hidden");
    $("#article-four").css("flex-grow", "1");
    $("#article-four").css("max-width", "16.666666666")
    $("#thumbnail-text-four").css("visibility", "visible");
    $("#text-four").css("visibility", "hidden");
    $("#article-five").css("flex-grow", "1");
    $("#article-five").css("max-width", "16.666666666")
    $("#thumbnail-text-five").css("visibility", "visible");
    $("#text-five").css("visibility", "hidden");
    $("#article-six").css("flex-grow", "1");
    $("#article-six").css("max-width", "16.666666666")
    $("#thumbnail-text-six").css("visibility", "visible");
    $("#text-six").css("visibility", "hidden");
  });
  $("#li-three").click(function() {
    $("#article-three").css("flex-grow", "9001");
    $("#article-three").css("max-width", "none");
    $("#thumbnail-text-three").css("visibility", "hidden");
    $("#text-three").css("visibility", "visible");
    $("#article-one").css("flex-grow", "1");
    $("#article-one").css("max-width", "16.666666666")
    $("#thumbnail-text-one").css("visibility", "visible");
    $("#text-one").css("visibility", "hidden");
    $("#article-two").css("flex-grow", "1");
    $("#article-two").css("max-width", "16.666666666")
    $("#thumbnail-text-two").css("visibility", "visible");
    $("#text-two").css("visibility", "hidden");
    $("#article-four").css("flex-grow", "1");
    $("#article-four").css("max-width", "16.666666666")
    $("#thumbnail-text-four").css("visibility", "visible");
    $("#text-four").css("visibility", "hidden");
    $("#article-five").css("flex-grow", "1");
    $("#article-five").css("max-width", "16.666666666")
    $("#thumbnail-text-five").css("visibility", "visible");
    $("#text-five").css("visibility", "hidden");
    $("#article-six").css("flex-grow", "1");
    $("#article-six").css("max-width", "16.666666666")
    $("#thumbnail-text-six").css("visibility", "visible");
    $("#text-six").css("visibility", "hidden");
  });
  $("#li-four").click(function() {
    $("#article-four").css("flex-grow", "9001");
    $("#article-four").css("max-width", "none");
    $("#thumbnail-text-four").css("visibility", "hidden");
    $("#text-four").css("visibility", "visible");
    $("#article-one").css("flex-grow", "1");
    $("#article-one").css("max-width", "16.666666666")
    $("#thumbnail-text-one").css("visibility", "visible");
    $("#text-one").css("visibility", "hidden");
    $("#article-two").css("flex-grow", "1");
    $("#article-two").css("max-width", "16.666666666")
    $("#thumbnail-text-two").css("visibility", "visible");
    $("#text-two").css("visibility", "hidden");
    $("#article-three").css("flex-grow", "1");
    $("#article-three").css("max-width", "16.666666666")
    $("#thumbnail-text-three").css("visibility", "visible");
    $("#text-three").css("visibility", "hidden");
    $("#article-five").css("flex-grow", "1");
    $("#article-five").css("max-width", "16.666666666")
    $("#thumbnail-text-five").css("visibility", "visible");
    $("#text-five").css("visibility", "hidden");
    $("#article-six").css("flex-grow", "1");
    $("#article-six").css("max-width", "16.666666666")
    $("#thumbnail-text-six").css("visibility", "visible");
    $("#text-six").css("visibility", "hidden");
  });
  $("#li-five").click(function() {
    $("#article-five").css("flex-grow", "9001");
    $("#article-five").css("max-width", "none");
    $("#thumbnail-text-five").css("visibility", "hidden");
    $("#text-five").css("visibility", "visible");
    $("#article-one").css("flex-grow", "1");
    $("#article-one").css("max-width", "16.666666666")
    $("#thumbnail-text-one").css("visibility", "visible");
    $("#text-one").css("visibility", "hidden");
    $("#article-two").css("flex-grow", "1");
    $("#article-two").css("max-width", "16.666666666")
    $("#thumbnail-text-two").css("visibility", "visible");
    $("#text-two").css("visibility", "hidden");
    $("#article-three").css("flex-grow", "1");
    $("#article-three").css("max-width", "16.666666666")
    $("#thumbnail-text-three").css("visibility", "visible");
    $("#text-three").css("visibility", "hidden");
    $("#article-four").css("flex-grow", "1");
    $("#article-four").css("max-width", "16.666666666")
    $("#thumbnail-text-four").css("visibility", "visible");
    $("#text-four").css("visibility", "hidden");
    $("#article-six").css("flex-grow", "1");
    $("#article-six").css("max-width", "16.666666666")
    $("#thumbnail-text-six").css("visibility", "visible");
    $("#text-six").css("visibility", "hidden");
  });
  $("#li-six").click(function() {
    $("#article-six").css("flex-grow", "9001");
    $("#article-six").css("max-width", "none");
    $("#thumbnail-text-six").css("visibility", "hidden");
    $("#text-six").css("visibility", "visible");
    $("#article-one").css("flex-grow", "1");
    $("#article-one").css("max-width", "16.666666666")
    $("#thumbnail-text-one").css("visibility", "visible");
    $("#text-one").css("visibility", "hidden");
    $("#article-two").css("flex-grow", "1");
    $("#article-two").css("max-width", "16.666666666")
    $("#thumbnail-text-two").css("visibility", "visible");
    $("#text-two").css("visibility", "hidden");
    $("#article-three").css("flex-grow", "1");
    $("#article-three").css("max-width", "16.666666666")
    $("#thumbnail-text-three").css("visibility", "visible");
    $("#text-three").css("visibility", "hidden");
    $("#article-four").css("flex-grow", "1");
    $("#article-four").css("max-width", "16.666666666")
    $("#thumbnail-text-four").css("visibility", "visible");
    $("#text-four").css("visibility", "hidden");
    $("#article-five").css("flex-grow", "1");
    $("#article-five").css("max-width", "16.666666666")
    $("#thumbnail-text-five").css("visibility", "visible");
    $("#text-five").css("visibility", "hidden");
  });
});
