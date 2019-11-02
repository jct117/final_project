$(function () {
  let race
  let userClass
  let background
  let ability
  let proficiencies

  //
  // $('#rightButton').click(() => {
  //   $("body div.main").fadeOut(500)
  //   setTimeout(function(){ $("#main").fadeIn(500)}, 400);
  //
  //   console.log("right button clicked")
  //
  // })
  //
  // $('#leftButton').click(() => {
  //   $("#main").fadeOut(500)
  //   setTimeout(function(){ $("#main").fadeIn(500)}, 400);
  //   console.log("left button clicked")
  // })

  $('body').on('click', 'button.navArrow', (event) => {
    let name = $('#characterName').val()
  })

  $("body #wrapper").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    race = $(event.target).attr("id")
    console.log(race)
  })

  $("body #wrapper1").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    userClass = $(event.target).attr("id")

    console.log(userClass)
  })

  $("body #wrapper2").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    background = $(event.target).attr("id")

    console.log(background)
  })

  $("body #wrapper3").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    background = $(event.target).attr("id")

    console.log(background)
  })

  $('body').on('click', '#strengthMins', (event ) => {
    let currentStrength = $('#strength').html()
    let id = $('#strength').attr('id')
    let btn = "mins"
    limitor(currentStrength, id, btn)
  })

  $('body').on('click', '#strengthPlus', (e) =>{
    let currentStrength = $('#strength').html()
    let id = $('#strength').attr('id')
    let btn = "plus"
    limitor(currentStrength, id, btn)
  })












// ******* UTILITIES ******
  function removeClasses() {
    let els = document.getElementsByClassName('imgSelect')
    while (els[0]) {
      els[0].classList.remove('imgSelect')
    }
  }

  function limitor(ability, id, btn) {
    console.log(btn)
    if(btn === "mins" && ability <= 14) {
      ability--
      $('tr').find(`#${id}`).html(`${ability}`)
    } else if(btn === "plus" && ability <= 14) {
        ability++
        $('tr').find(`#${id}`).html(`${ability}`)
    } else if (btn === "plus" && ability < 14) {
        $('#notes').html("Cannot be higher than 15")
    } else if (btn === "mins" && ability <= 14) {
      ability--
      $('tr').find(`#${id}`).html(`${ability}`)
    }
  }

  

  function progress() {
    $("div.progressbar").addClass("active")
  }
})
