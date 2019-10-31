$(function () {



  $('#rightButton').click(() => {
    $("#main").fadeOut(500)
    setTimeout(function(){ $("#main").fadeIn(500)}, 400);

    console.log("right button clicked")

    app.get('/class')
  })

  $('#leftButton').click(() => {
    $("#main").fadeOut(500)
    setTimeout(function(){ $("#main").fadeIn(500)}, 400);
    console.log("left button clicked")
  })






})
