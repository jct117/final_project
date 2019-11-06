$(function () {
  let userNameChoice
  let userRaceChoice
  let userStrengthChoice
  let userDexChoice
  let userConstChoice
  let userIntelChoice
  let userWisChoice
  let userCharChoice
  let proficienciesChoices
  let userClassChoice
  let userBackgroundChoice

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA2HNGHUGJcDXfoaKynd8dNL3R7tufxyIc",
    authDomain: "dndbuilder-527d5.firebaseapp.com",
    databaseURL: "https://dndbuilder-527d5.firebaseio.com",
    projectId: "dndbuilder-527d5",
    storageBucket: "dndbuilder-527d5.appspot.com",
    messagingSenderId: "1009831528309",
    appId: "1:1009831528309:web:e1a3b7f8db68583656353c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const dbChar = firebase.firestore().collection('characters')

  // updates the progressBar on page laod ***********
  $('#main').onload = progress()

  // submit for character creation ***********
  $('body #submit').on('click', (event) => {
    event.preventDefault()

    callLocalStorage()


    $('div #final').html(
      `
      <p>Character Name: ${userNameChoice} </p>
      <p>Race: ${userRaceChoice} </p>
      <p>Class: ${userClassChoice} </p>
      <p>Background: ${userBackgroundChoice}</p>
      <p>Abilities:
      <li>Strength: ${JSON.parse(localStorage.getItem("userStrengthChoice"))}</li>
      <li>Dexterity: ${JSON.parse(localStorage.getItem("userDexChoice"))}</li>
      <li>Constitution: ${JSON.parse(localStorage.getItem("userConstChoice"))}</li>
      <li>Intelligence: ${JSON.parse(localStorage.getItem("userIntelChoice"))}</li>
      <li>Wisdom: ${JSON.parse(localStorage.getItem("userWisChoice"))}</li>
      <li>Charisma: ${JSON.parse(localStorage.getItem("userCharChoice"))}</li>
      </p>
      `)


  })

  function callLocalStorage() {
    userNameChoice = JSON.parse(localStorage.getItem("userNameChoice"))
    userRaceChoice = JSON.parse(localStorage.getItem("userRaceChoice"))
    userClassChoice = JSON.parse(localStorage.getItem("userClassChoice"))
    userBackgroundChoice = JSON.parse(localStorage.getItem("userBackgroundChoice"))

  }
  function displayFinal() {

  }

  $('body').on('click', 'button.navArrow', (event) => {
    if ($('#characterName').length){
      let nameChoice = $('#characterName').val()
      localStorage.setItem("userNameChoice", JSON.stringify(nameChoice))
    }
    checkPage()
  })


 // first page Race click events **********************
  $("body #wrapper").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    let raceId = $(event.target).attr("id")
    searchRace(raceId)
  })

 // second page Class click events ********************
  $("body #wrapper1").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    userClassChoice = $(event.target).attr("id")


    searchClass(userClassChoice)
  })

 // third page Background click events ****************
  $("body #wrapper2").on('click', (event) => {
    removeClasses()
    $(event.target).addClass("imgSelect")
    backgroundChoice = $(event.target).attr("id")

    localStorage.setItem("userBackgroundChoice", JSON.stringify(backgroundChoice))
  })

  // fourth page Ability click events *****************
  $("tbody").on('click', (event) => {
    strengthChoice = $('#1').html()
    dexChoice = $('#2').html()
    constChoice = $('#3').html()
    intelChoice =  $('#4').html()
    wisChoice = $('#5').html()
    charChoice = $('#6').html()

    localStorage.setItem("userStrengthChoice", JSON.stringify(strengthChoice))
    localStorage.setItem("userDexChoice", JSON.stringify(dexChoice))
    localStorage.setItem("userConstChoice", JSON.stringify(constChoice))
    localStorage.setItem("userIntelChoice", JSON.stringify(intelChoice))
    localStorage.setItem("userWisChoice", JSON.stringify(wisChoice))
    localStorage.setItem("userCharChoice", JSON.stringify(charChoice))
  })




 //****** Ability Events *******//
  //**********************************************
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
  //**********************************************

  //**********************************************
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
  //**********************************************

  //**********************************************
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
  //**********************************************

  //**********************************************
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
  //**********************************************

  //**********************************************
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
  //**********************************************

  //**********************************************
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
  //**********************************************

  //******** Background info***********************
  $("body #Acolyte").on('click', (event) => {
    $('#notes').html(
      `<li> You have spent your life in the service of a temple to a specific god or pantheon of gods.
      You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.
      You are not necessarily a cleric — performing sacred rites is not the same thing as channeling divine power.</li>

      <li>As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity.
      You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your
      faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.</li>

      <li>You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there.
      This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home.
      While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.</li>
      `
    )
  })

  $("body #Criminal").on('click', (event) => {
    $('#notes').html(
      `<li>You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld.
      You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by
      flouting the rules and regulations of society.</li>

      <li>You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals.
      You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</li>
      `
    )
  })

  $("body #folkHero").on('click', (event) => {
    $('#notes').html(
      `<li>You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.</li>
      <li>Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.</li>
      <li>A folk hero is one of the common people, for better or for worse. Most folk heroes look on their humble origins as a virtue, not a shortcoming, and their home communities remain very important to them.</li>
      `
    )
  })

  $("body #Noble").on('click', (event) => {
    $('#notes').html(
      `<li>You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own—it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you.</li>
      <li>Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.</li>
      `
    )
  })

  $("body #Sage").on('click', (event) => {
    $('#notes').html(
      `<li>You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.</li>
      <li>hen you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.</li>
      <li>Sages are defined by their extensive studies, and their characteristics reflect this life of study. Devoted to scholarly pursuits, a sage values knowledge highly — sometimes in its own right, sometimes as a means toward other ideals.</li>
      `
    )
  })

  $("body #Soldier").on('click', (event) => {
    $('#notes').html(
      `<li>War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia w ho rose to prominence during a recent war.</li>
      <li>When you choose this background, work with your DM to determine which military organization you w ere a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, or a mercenary company.</li>
      <li>You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.</li>
      <li>The horrors of war combined with the rigid discipline of military service leave their mark on all soldiers, shaping their ideals, creating strong bonds, and often leaving them scarred and vulnerable to fear, shame, and hatred.</li>
      `
    )
  })
  //**********************************************


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

    } else if (btn === "mins" && ability > 14) {
      ability--
      totalPoints = parseInt(totalPoints) - 1
      $('tr').find(`#${id}`).html(`${ability}`)

    } else {
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
    let raceChoice = repos.name

      $('#notes').html(
        `<li>${repos.age}</li>
        <li>${repos.alignment}</li>
        <li>${repos.language_desc}</li>
        <li>${repos.size_description}</li>`
      )
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

      displayClass(response.data)
    } catch (error) {
      console.log(error)
      console.log('an error occurred with the request')
    }
  }

  function displayClass (repos) {
    let classChoice = repos.name
    localStorage.setItem("userClassChoice", JSON.stringify(classChoice))
    $('#notes').html(
      `<li>Hit Die: ${repos.hit_die}</li>
      `
    )
    repos.proficiencies.forEach((prof) => {
      $('#notes').append(`<li>${prof.name}</li>`)
    })
  }
  //***************************************************************
  //***************************************************************

  // API calls for page page 4 Ability *********************
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

    $('#notes').html(
      `<li>Ability: ${ability.desc[1]}</li>
      `
    )
  }

  // max points counter ***********
  function totalAbilityPoints(totalPoints, btn, ability, id)  {

    if(totalPoints === "27" && btn === "plus") {
      alert("Max Points")
      return
    } else if (totalPoints < 27 && btn ===  "mins") {

      limitor(ability, id, btn, totalPoints)
    } else if (totalPoints < 27 && btn === "plus") {

      limitor(ability, id, btn, totalPoints)
    } else if (totalPoints >= 27 && btn === "mins") {

      limitor(ability, id, btn, totalPoints)
    } else {

      limitor(ability, id, btn, totalPoints)
    }

    charStrength = $('td#1').html()
    charDex = $('td#2').html()
    charConst = $('td#3').html()
    charIntel = $('td#4').html()
    charWis = $('td#5').html()
    charChar = $('td#6').html()

  }
  //***************************************************************
  //***************************************************************

  //progress bar updater
  function progress() {
    let lastPageNumber = $('content').data("page-number")

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

      default:
    } return lastPageNumber
  }

})
