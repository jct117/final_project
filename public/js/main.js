$(function () {
  let userNameChoice
  let userRaceChoice
  let userChoiceClass
  let userStrengthChoice
  let userDexChoice
  let userConstChoice
  let userIntelChoice
  let userWisChoice
  let userCharChoice
  let proficienciesChoices

// updates the progressBar
  $('#main').onload = progress()



  $('body').on('click', 'button.navArrow', (event) => {




  })

  $("body #wrapper").on('click', (event) => {
    userNameChoice = $('#characterName').val()
    removeClasses()
    $(event.target).addClass("imgSelect")
    let raceId = $(event.target).attr("id")
    // console.log(race)
    searchRace(raceId)
  })

  $("body #wrapper1").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    userClassChoice = $(event.target).attr("id")

    console.log(userClassChoice)
    searchClass(userClassChoice)
  })

  $("body #wrapper2").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    userBackgroundChoice = $(event.target).attr("id")

    console.log(background)
  })

  $("tbody").on('click', (event) => {
    userStrengthChoice = $('#1').html()
    userDexChoice = $('#2').html()
    userConstChoice = $('#3').html()
    userIntelChoice =  $('#4').html()
    userWisChoice = $('#5').html()
    userCharChoice = $('#6').html()



    console.log(userStrengthChoice)
  })

  // $('#proficiencies').load(() => {
  //   // let classSkill1 = $('#dropdown1')
  //   // let classSkill2 = $('#dropdown2')
  //   console.log(proficienciesChoices)
  //
  //
  //
  // })


//****** Ability Events *******//
  $('body').on('click', '#strengthMins', (event ) => {
    let currentStrength = $('#1').html()
    let id = $('#1').attr('id')
    let btn = "mins"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentStrength, id)
    ability(id)
  })

  $('body').on('click', '#strengthPlus', (e) => {
    let currentStrength = $('#1').html()
    let id = $('#1').attr('id')
    let btn = "plus"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentStrength, id)
    ability(id)
  })

  $('body').on('click', '#dexMins', (e) => {
    let currentDex = $('#2').html()
    let id = $('#2').attr('id')
    let btn = "mins"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentDex, id)
    ability(id)

  })

  $('body').on('click', '#dexPlus', (e) =>{
    let currentDex = $('#2').html()
    let id = $('#2').attr('id')
    let btn = "plus"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentDex, id)
    ability(id)
  })

  $('body').on('click', '#constMins', (event ) => {
    let currentConst = $('#3').html()
    let id = $('#3').attr('id')
    let btn = "mins"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentConst, id)
    ability(id)
  })

  $('body').on('click', '#constPlus', (e) =>{
    let currentConst = $('#3').html()
    let id = $('#3').attr('id')
    let btn = "plus"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentConst, id)
    ability(id)
  })

  $('body').on('click', '#intelMins', (event ) => {
    let currentIntel = $('#4').html()
    let id = $('#4').attr('id')
    let btn = "mins"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentIntel, id)
    ability(id)
  })

  $('body').on('click', '#intelPlus', (e) =>{
    let currentIntel = $('#4').html()
    let id = $('#4').attr('id')
    let btn = "plus"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentIntel, id)
    ability(id)
  })
  $('body').on('click', '#wisMins', (e) => {
    let currentWisdom = $('#5').html()
    let id = $('#5').attr('id')
    let btn = "mins"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentWisdom, id)
    ability(id)
  })

  $('body').on('click', '#wisPlus', (e) =>{
    let currentWisdom = $('#5').html()
    let id = $('#5').attr('id')
    let btn = "plus"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentWisdom, id)
    ability(id)
  })

  $('body').on('click', '#charMins', (e) => {
    let currentChar = $('#6').html()
    let id = $('#6').attr('id')
    let btn = "mins"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentChar, id)
    ability(id)
    // limitor(currentChar, id, btn)
  })

  $('body').on('click', '#charPlus', (e) =>{
    let currentChar = $('#6').html()
    let id = $('#6').attr('id')
    let btn = "plus"
    let totalPoints =  $('#numPts').html()
    totalAbilityPoints(totalPoints, btn, currentChar, id)
    ability(id)
    // limitor(currentChar, id, btn)
  })












// ******* UTILITIES ******
  function removeClasses() {
    let els = document.getElementsByClassName('imgSelect')
    while (els[0]) {
      els[0].classList.remove('imgSelect')
    }
  }
// for page 5 ability calc *********************
  function limitor(ability, id, btn, totalPoints) {
    $('#notes').html("")

    if(btn === "mins" && ability <= 14) {
      ability--
      totalPoints = parseInt(totalPoints) - 1
      $('tr').find(`#${id}`).html(`${ability}`)
    } else if(btn === "plus" && ability <= 14) {
        ability++
        totalPoints = parseInt(totalPoints) + 1
        $('tr').find(`#${id}`).html(`${ability}`)
    } else if (btn === "plus" && ability > 14) {
        alert("Cannot be higher than 15")
        console.log("hit 15")
    } else if (btn === "mins" && ability > 14) {
      ability--
      totalPoints = parseInt(totalPoints) - 1
      $('tr').find(`#${id}`).html(`${ability}`)
    } else {
      console.log("END")
      return
    }
    $('#numPts').html(`${totalPoints}`)
  }

  // API calls for page page 1 Race *********************
  //***************************************************************
  async function searchRace (raceId) {
    // ** making API request using async/await **
    try {
      const url = `http://www.dnd5eapi.co/api/races/${raceId}`
      const response = await axios.get(url, {
        params: {}
      })

      // console.log(response)
      displayRace(response.data)
    } catch (error) {
      console.log(error)
      console.log('an error occurred with your request')
    }
  }

  function displayRace (repos) {
    console.log(repos)

    userRaceChoice = repos.name

      $('#notes').html(
        `<li>${repos.age}</li>
        <li>${repos.alignment}</li>
        <li>${repos.language_desc}</li>
        <li>${repos.size_description}</li>`
      )
      console.log(userRaceChoice)
      return userRaceChoice
  }
  //***************************************************************
  //***************************************************************

  // API calls for page page 2 Class *********************
  //***************************************************************
  async function searchClass (classId) {
    // ** making API request using async/await **
    try {
      const url = `http://www.dnd5eapi.co/api/classes/${classId}`
      const response = await axios.get(url, {
        params: {}
      })

      console.log(response)
      displayClass(response.data)
    } catch (error) {
      console.log(error)
      console.log('an error occurred with the request')
    }
  }

  function displayClass (repos) {
    // console.log(repos)
    $('#notes').html(
      `<li>Hit Die: ${repos.hit_die}</li>
      `
    )
    repos.proficiencies.forEach((prof) => {
      $('#notes').append(`<li>${prof.name}</li>`)
    })

    proficienciesChoices = repos.proficiencies
    localStorage.setItem("proficienciesChoices", JSON.stringify(proficienciesChoices))
    console.log(proficienciesChoices)
    // call this to get the data back
    // JSON.parse(localStorage.getItem("proficienciesChoices"))
  }
  //***************************************************************
  //***************************************************************


  async function ability (ability) {
    // ** making API request using async/await **
    try {
      const url = `http://www.dnd5eapi.co/api/ability-scores/${ability}`
      const response = await axios.get(url, {
        params: {}
      })

      // console.log(response)
      displayAbility(response.data)
    } catch (error) {
      console.log(error)
      console.log('an error occurred with your request')
    }
  }

  function displayAbility (ability) {
    console.log(ability)
    $('#notes').html(
      `<li>Ability: ${ability.desc[1]}</li>
      `
    )
  }

  function totalAbilityPoints(totalPoints, btn, ability, id)  {
    console.log(`total ability passes ${ability}, ${id}, ${btn}, and ${totalPoints}`)
    if(totalPoints === "27" && btn === "plus") {
      alert("Max Points")
      return
    } else if (totalPoints < 27 && btn ===  "mins") {
      console.log(totalPoints)
      limitor(ability, id, btn, totalPoints)
    } else if (totalPoints < 27 && btn === "plus") {

      console.log(totalPoints)
      limitor(ability, id, btn, totalPoints)
    } else if (totalPoints >= 27 && btn === "mins") {

      limitor(ability, id, btn, totalPoints)
    } else {

      limitor(ability, id, btn, totalPoints)
    }
    console.log('printing points running limitor')
    charStrength = $('td#1').html()
    charDex = $('td#2').html()
    charConst = $('td#3').html()
    charIntel = $('td#4').html()
    charWis = $('td#5').html()
    charChar = $('td#6').html()

  }




  function progress() {
    let lastPageNumber = $('content').data("page-number")
    console.log(lastPageNumber)
    // localStorage.setItem("lastPageNumber", lastPageNumber)
    switch (lastPageNumber) {
      case 1:
      $('#pb1').addClass("active")
        break;
      case 2:
        $('#pb1').addClass("active")
        $('#pb2').addClass("active")
        break;
      case 3:
        $('#pb1').addClass("active")
        $('#pb2').addClass("active")
        $('#pb3').addClass("active")
        break;
      case 4:
        $('#pb1').addClass("active")
        $('#pb2').addClass("active")
        $('#pb3').addClass("active")
        $('#pb4').addClass("active")
        break;
      case 5:
        $('#pb1').addClass("active")
        $('#pb2').addClass("active")
        $('#pb3').addClass("active")
        $('#pb4').addClass("active")
        $('#pb5').addClass("active")
        break;
      case 6:
      $('#pb1').addClass("active")
      $('#pb2').addClass("active")
      $('#pb3').addClass("active")
      $('#pb4').addClass("active")
      $('#pb5').addClass("active")
      $('#pb6').addClass("active")
        break;
      default:
    }
  }

})
