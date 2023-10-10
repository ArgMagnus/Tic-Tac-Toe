var count = 1;
if (count % 2 == 0) $("h1").text("GO ON, MAGNETO");
else $("h1").text("Your turn, Hulk");
$("button").click(function(){
  location.reload();
});
$(".btn").click(function () {
  if (count % 2 != 0) $("h1").text("GO ON, MAGNETO");
  else $("h1").text("Your turn, Hulk");

  if (count == 9) $("h1").text("Tie");
  if ($(this).hasClass("p1") == false && $(this).hasClass("p2") == false) {
    if (count % 2 == 0) {
      $(this).addClass("p2");
      count++;
    } else {
      $(this).addClass("p1");
      count++;
    }
  }
  checkVictory();
});
function checkVictory() {
  var arr = ["c", "r", "d"];
  var check = 0;
  var see = 0;
  for (var k = 0; k < arr.length; k++) {
    if (k == arr.length - 1) {
      for (var i = 1; i <= 2; i++) {
        check = see = 0;
        $("." + arr[k] + i).each(function () {
          if ($(this).hasClass("p1")) check++;
          if ($(this).hasClass("p2")) see++;
        });
        console.log(check);
        if (check == 3 || see == 3) break;
      }
    } else {
      for (var i = 1; i <= 3; i++) {
        check = see = 0;
        $("." + arr[k] + i).each(function () {
          if ($(this).hasClass("p1")) check++;
          if ($(this).hasClass("p2")) see++;
        });
        console.log(check);
        if (check == 3 || see == 3) break;
      }
    }
    if (check == 3 || see == 3) break;
  }

  if (check == 3) {
    $("h1").text("HULK SMASH !!!");
    $("body").css("background-color", "green");
  } else if (see == 3) {
    $("h1").text("MASTER of MAGNETISM");
    $("body").css("background-color", "purple");
  }
}
