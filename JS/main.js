$(".my-images").on("mousemove", function (e) {
  var img = document.createElement("img");
  img.src = this.src;
  img.className = "hovered-image";
  $("#container").append(img);
  $(".hovered-image").css("left", e.clientX + "px");
  $(".hovered-image").css("top", e.clientY + "px");
  if (
    document.getElementsByTagName("body")[0].scrollWidth >
    document.getElementsByTagName("body")[0].clientWidth
  ) {
    $(".hovered-image").css(
      "left",
      e.clientX -
        (document.getElementsByTagName("body")[0].scrollWidth -
          document.getElementsByTagName("body")[0].clientWidth) +
        "px"
    );
  }
});

$(".my-images").on("mouseleave", function (e) {
  $(".hovered-image").remove();
});
