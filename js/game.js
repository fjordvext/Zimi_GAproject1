console.log ("javascript is working!")
//jQuery ready function
$(document).ready(function(){

  //TODO: FINISH ENTERING IN COMBOTOBEAT AND INPUT COMBOTOBEATMESSAGE IN HAND CHECKS
  //TODO: ADD IN CARD IMAGES TO CARDS
  //TODO: DISPLAY CARD IMAGES WHEN HAND IS PLAYED
  //TODO: FIX WIN MECHANICS
  //TODO: FIX BUILD AREA BACK TO DECK MECHANICS
  //TODO: FIX OPENING CARD 5 GLITCH
  //TODO: FIX GLITCH WHERE PUTTING CARDS BACK IN DECK DOUBLES THEM UP
  //TODO: ADD TEXT EFFECTS
  //TODO: ANIMATE ZEPHYR
  //TODO: USE BUILD AREA AS AREA TO DISPLAY MESSAGE OF WHAT PLAYER MUST DO NEXT
  //TODO: SOUND?
  //TODO: FIGURE OUT DRAG AND DROP CARDS

  //PART ONE
  //GLOBAL VARIABLES
  //establish build array
  let build1 = [];

  //establish turn counter
  let turnCounter = 0;
  let player = "P1"

  //deck1 empty array here
  let deck1Unsorted = [];

  //deck2 empty array here
  let deck2Unsorted = [];

  //establish undefined set combo value and number, and undefined combo to beat message
  let setComboValue;
  let setComboNumber;
  let comboValue;
  let comboNumber;
  let comboToBeat;
  let comboToBeatMessage;

  //establish win state
  let winState = false;

  //establish valid hand state
  let handIsValid = false;

  //cards array here
  let cards = [
  {
  name: "Pho",
  level: 1,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail: "./images/c1thumb.png",
  },
  {
  name: "Pho",
  level: 1,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w1thumb.png",
  },
  {
  name: "Pho",
  level: 1,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p1thumb.png",
  },
  {
  name: "Pho",
  level: 1,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m1thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c2thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w2thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p2thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m2thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c3thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w3thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p3thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m3thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c4thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w4thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p4thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m4thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail: "./images/c5thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w5thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p5thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m5thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail: "./images/c6thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w6thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p6thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m6thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c7thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w7thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p7thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m7thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c8thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w8thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p8thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m8thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c9thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w9thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p9thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m9thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c10thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w10thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p10thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m10thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c11thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w11thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p11thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m11thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c12thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w12thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p12thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m12thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./images/c13thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./images/w13thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./images/p13thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./images/m13thumb.png",
  },
  ]

  // PART TWO
  // FUNCTIONS THAT  WON'T BE REPEATED AND ONLY HAPPEN ONCE AT THE START OF THE GAME

  // Shuffling the array cards using the Fisher Yates method (found at https://bost.ocks.org/mike/shuffle/).
  function shuffle(cards) {
    var m = cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = cards[m];
      cards[m] = cards[i];
      cards[i] = t;
    }

    return cards;
  };

  //teaching program to sort cards in ascending order of value, and in cases of ties, in ascending order of elementIndex
  function compareByLevel(first, second){
      if (first.level == second.level) {
          return compareByElement(first, second);
      } else if (first.level < second.level)
          return -1;
      else
          return 1;
  }
  function compareByElement(first, second) {
    if (first.elementIndex < second.elementIndex)
          return -1;
      else
          return 1;
  }

  //turn count function here
  function turnCount(){
    turnCounter % 2 === 0 ? player = "P1" : player = "P2"
  }

  //when game screen loads, cards are shuffled, deck of 17 cards is dealt to deck1 and deck2 arrays

  //shuffle cards
  shuffle(cards);

  //deal first seventeen cards of shuffled cards to deck1
  for (i=0; i < 17; i++) {
    deck1Unsorted.push(cards[i]);
  }
  //sort deck1
  let deck1 = deck1Unsorted.sort(compareByLevel);
  console.log(`deck 1 is ${deck1.length} elements long`);
  console.log(deck1);
  //deal next seventeen cards to deck2
  for (i=17; i < 34; i++) {
    deck2Unsorted.push(cards[i]);
  }
  let deck2 = deck2Unsorted.sort(compareByLevel);
  console.log(`deck 2 is ${deck2.length} elements long`);
  console.log(deck2);

  let activeDeck = deck1;


  //PART THREE
  //GAME MECHANICS FUNCTIONS


  //select card function
  function cardToBuild(){
    $(".card-area").mousedown(function(){
      let selectedCard = activeDeck[this.id];
      build1.push(selectedCard);
      activeDeck[this.id] = {};
      mapCardsToDeckArea();
      mapCardsToBuildArea();

      console.log(selectedCard);
      // console.log(build1);
      // console.log(`function for activeDeck[${this.id}] called!`)
    })
  };
  cardToBuild();

  //map clicked cards to build array
  function mapCardsToBuildArea(){
    let buildAreaContent = build1.map(function(card) {
      return `<img src= ${card.thumbnail}>`
    } );
    let buildAreaText = buildAreaContent.join(" ");
    $('.build-area').html(buildAreaText);

  }

  //remove card from build
  function cardFromBuildToDeck(){
    $(".build-area").mousedown(function(){
      let $index = $(".build-area-cards").data()
      let selectedCard = build1[this.$index];
      activeDeck.push(selectedCard);
      build1[this.$index] = {};
      mapCardsToDeckArea();
      mapCardsToBuildArea();

      console.log(selectedCard);
      // console.log(`function for activeDeck[${this.id}] called!`)
    })
  };
  cardFromBuildToDeck();

  //return entire build to deck
  function allBuildToDeck(){
    // TODO: find more elegant solution
    activeDeck = activeDeck.filter(function(card) {
      return card.level
    }).concat(build1)
    build1 = [];
    activeDeck.sort(compareByLevel);
    // for (i=0; i < build1.length; i++){
    //   activeDeck.push(build1[i]);
    // };
      mapCardsToBuildArea();
      mapCardsToDeckArea();
  }

  //reset build deck
  function resetBuildDeck(){
    console.log("clearing build deck!")
    build1 = [];
    $(".build-area").html('<div class = "build-area-label"><h2> CLICK CARDS TO BUILD YOUR </br> 1, 2, 3, OR 5 </br>CARD HAND HERE</h2></div><div class = "build-area-cards" id = "first" data-build-index = "1"> </div><div class = "build-area-cards" id = "second" data-build-index = "2"></div><div class = "build-area-cards" id = "third" data-build-index = "3"></div><div class = "build-area-cards" id = "fourth" data-build-index = "4"></div><div class = "build-area-cards" id = "fifth" data-build-index = "5">  </div>')
  }
  //map card divs to positions in array deck1
  function mapCardsToDeckArea(){
  for (i=0; i < activeDeck.length; i++){
    $(`#${i}`).html(activeDeck[i].thumbnail ?  `<img src= ${activeDeck[i].thumbnail}>` : "");
    }
    $(".deck-title").html(`<h1> ${player} DECK <h1>`)
  }

  //PART FOUR
  //POKER / BIG TWO SPECIFIC RULES FUNCTIONS

  // THIS IS THE GAME LOGIC, ESSENTIALLY THE RULES OF POKER
  // THIS IS WHERE I DEFINE WHAT COMPRISES EACH COMBO OF CARDS

  //Note: don't have to define singles

  // check for pair
  function checkForPair(array) {
    console.log("checking for pair!")
    array.sort(compareByLevel);
    if (array[0].level === array[1].level){
      console.log("pair detected!")
      let comboType = "pair";
       comboNumber = "2 Card";
      pairValueAssign(array);
      return handIsValid = true;
    } else {
      alert("Not a valid pair!");
      allBuildToDeck();
    }
  }

  //check for triple
  function checkForTriple(array) {
    console.log("checking for triple!")
    array.sort(compareByLevel);
    if ((array[0].level === array[1].level) && (array[0].level === array[2].level)){
      console.log("triple detected!")
      let comboType = "triple";
       comboNumber = "3 Card";
      tripleValueAssign(array);
      return handIsValid = true;
    } else {
      alert("Not a valid triple!")
      allBuildToDeck();
    }
  }

  //check for straight
  function checkForStraight(array) {
    console.log("checking for straight!")
    array.sort(compareByLevel);
    console.log("straight check:")
    if (array[4].level == (array[0].level + 4) && array[4].level === (array[1].level + 3) && array[4].level === (array[2].level + 2) && array[4].level === (array[3].level + 1)){
      console.log("Straight detected!")
  //check for straight flush
      if (array[0].element == array[1].element && array[0].element == array[2].element  && array[0].element == array[3].element  && array[0].element ==  array[4].element) {
         console.log("Straight flush detected!")
         let comboType = "Straight Flush";
         comboNumber = "5 Card";
        straightFlushValueAssign(array);
         return handIsValid = true;
      }else{
        let comboType = "Straight";
         comboNumber = "5 Card";
        straightValueAssign(array);
         return handIsValid = true;
      }
    } else {
      checkForFlush(array);
    }
  }

  //check for flush
  function checkForFlush(array) {
    console.log("checking for flush!");
    console.log("flush check:");
      console.log(array[0].element);
      console.log(array[1].element);
      console.log(array[2].element);
      console.log(array[3].element);
      console.log(array[4].element);
    if (array[0].element == array[1].element && array[0].element == array[2].element  && array[0].element == array[3].element  && array[0].element ==  array[4].element) {
      console.log("Flush detected!" )
      let comboType = "Flush";
       comboNumber = "5 Card";
      flushValueAssign(array);
       return handIsValid = true;
    } else {
      checkForFullHouse(array);
    }
  }

  //check for full house
  function checkForFullHouse(array) {
    console.log("checking for full house!")
    array.sort(compareByLevel);
    if (((array[0].level === array[1].level) && (array[0].level === array[2].level)) && (array[3].level === array[4].level)) {
      console.log("Full house detected!")
      let comboType = "Full House";
       comboNumber = "5 Card";
      fullHouseValueAssign(array);
       return handIsValid = true;
    } else if ((array[0].level === array[1].level) && ((array[2].level === array[3].level)) && (array[2].level === array[4].level)){
      console.log("Full house detected!")
      let comboType = "Full House";
       comboNumber = "5 Card";
      fullHouseValueAssign(array);
       return handIsValid = true;
    } else {
      checkForFourOfAKind(array);
    }
  }

  //check for four of a kind
  function checkForFourOfAKind(array) {
    console.log("checking for four of a kind!")
    array.sort(compareByLevel);
    if ((array[0].level === array[1].level) && (array[0].level === array[2].level) && (array[0].level === array[3].level))  {
      console.log("Four of a kind detected!")
      let comboType = "Four of a kind";
       comboNumber = "5 Card";
      fourOfAKindValueAssign(array);
       return handIsValid = true;
    } else if ((array[1].level === array[2].level) && (array[1].level === array[3].level) && (array[1].level === array[4].level)){
      console.log("Four of a kind detected!")
      let comboType = "Four of a kind";
       comboNumber = "5 Card";
      fourOfAKindValueAssign(array);
       return handIsValid = true;
    }else {
      alert("Not a valid five card hand!");
      allBuildToDeck();
    }
  }

  //AND THIS IS WHERE I DEFINE HAND VALUES
  // I'M DEFINING 247 DISTINCT (52 SINGLE, 39 PAIR, 26 TRIPLE, 130 FIVE CARD) HAND VALUES

  //assign value to single
  function singleValueAssign(array){
    if (array[0].level === 1 && array[0].elementIndex === 1){
      comboValue = 1;
      comboToBeat = "Level 1 Crystal";
    }else if (array[0].level === 1 && array[0].elementIndex === 2){
      comboValue = 2;
      comboToBeat = "Level 1 Wind";
    }else if (array[0].level === 1 && array[0].elementIndex === 3){
      comboValue = 3;
      comboToBeat = "Level 1 Poison";
    }else if (array[0].level === 1 && array[0].elementIndex === 4){
      comboValue = 4;
      comboToBeat = "Level 1 Magic";
    }else if (array[0].level === 2 && array[0].elementIndex === 1){
      comboValue = 5;
      comboToBeat = "Level 2 Crystal";
    }else if (array[0].level === 2 && array[0].elementIndex === 2){
      comboValue = 6;
      comboToBeat = "Level 2 Wind";
    }else if (array[0].level === 2 && array[0].elementIndex === 3){
      comboValue = 7;
      comboToBeat = "Level 2 Poison";
    }else if (array[0].level === 2 && array[0].elementIndex === 4){
      comboValue = 8;
      comboToBeat = "Level 2 Magic";
    }else if (array[0].level === 3 && array[0].elementIndex === 1){
      comboValue = 9;
      comboToBeat = "Level 3 Crystal";
    }else if (array[0].level === 3 && array[0].elementIndex === 2){
      comboValue = 10;
      comboToBeat = "Level 3 Wind";
    }else if (array[0].level === 3 && array[0].elementIndex === 3){
      comboValue = 11;
      comboToBeat = "Level 3 Poison";
    }else if (array[0].level === 3 && array[0].elementIndex === 4){
      comboValue = 12;
      comboToBeat = "Level 3 Magic";
    }else if (array[0].level === 4 && array[0].elementIndex === 1){
      comboValue = 13;
      comboToBeat = "Level 4 Crystal";
    }else if (array[0].level === 4 && array[0].elementIndex === 2){
      comboValue = 14;
      comboToBeat = "Level 4 Wind";
    }else if (array[0].level === 4 && array[0].elementIndex === 3){
      comboValue = 15;
      comboToBeat = "Level 4 Poison";
    }else if (array[0].level === 4 && array[0].elementIndex === 4){
      comboValue = 16;
      comboToBeat = "Level 4 Magic";
    }else if (array[0].level === 5 && array[0].elementIndex === 1){
      comboValue = 17;
      comboToBeat = "Level 5 Crystal";
    }else if (array[0].level === 5 && array[0].elementIndex === 2){
      comboValue = 18;
      comboToBeat = "Level 5 Wind";
    }else if (array[0].level === 5 && array[0].elementIndex === 3){
      comboValue = 19;
      comboToBeat = "Level 5 Poison";
    }else if (array[0].level === 5 && array[0].elementIndex === 4){
      comboValue = 20;
      comboToBeat = "Level 5 Magic";
    }else if (array[0].level === 6 && array[0].elementIndex === 1){
      comboValue = 21;
      comboToBeat = "Level 6 Crystal";
    }else if (array[0].level === 6 && array[0].elementIndex === 2){
      comboValue = 22;
      comboToBeat = "Level 6 Wind";
    }else if (array[0].level === 6 && array[0].elementIndex === 3){
      comboValue = 23;
      comboToBeat = "Level 6 Poison";
    }else if (array[0].level === 6 && array[0].elementIndex === 4){
      comboValue = 24;
      comboToBeat = "Level 6 Magic";
    }else if (array[0].level === 7 && array[0].elementIndex === 1){
      comboValue = 25;
      comboToBeat = "Level 7 Crystal";
    }else if (array[0].level === 7 && array[0].elementIndex === 2){
      comboValue = 26;
      comboToBeat = "Level 7 Wind";
    }else if (array[0].level === 7 && array[0].elementIndex === 3){
      comboValue = 27;
      comboToBeat = "Level 7 Poison";
    }else if (array[0].level === 7 && array[0].elementIndex === 4){
      comboValue = 28;
      comboToBeat = "Level 7 Magic";
    }else if (array[0].level === 8 && array[0].elementIndex === 1){
      comboValue = 29;
      comboToBeat = "Level 8 Crystal";
    }else if (array[0].level === 8 && array[0].elementIndex === 2){
      comboValue = 30;
      comboToBeat = "Level 8 Wind";
    }else if (array[0].level === 8 && array[0].elementIndex === 3){
      comboValue = 31;
      comboToBeat = "Level 8 Poison";
    }else if (array[0].level === 8 && array[0].elementIndex === 4){
      comboValue = 32;
      comboToBeat = "Level 8 Magic";
    }else if (array[0].level === 9 && array[0].elementIndex === 1){
      comboValue = 33;
      comboToBeat = "Level 9 Crystal";
    }else if (array[0].level === 9 && array[0].elementIndex === 2){
      comboValue = 34;
      comboToBeat = "Level 9 Wind";
    }else if (array[0].level === 9 && array[0].elementIndex === 3){
      comboValue = 35;
      comboToBeat = "Level 9 Poison";
    }else if (array[0].level === 9 && array[0].elementIndex === 4){
      comboValue = 36;
      comboToBeat = "Level 9 Magic";
    }else if (array[0].level === 10 && array[0].elementIndex === 1){
      comboValue = 37;
      comboToBeat = "Level 10 Crystal";
    }else if (array[0].level === 10 && array[0].elementIndex === 2){
      comboValue = 38;
      comboToBeat = "Level 10 Wind";
    }else if (array[0].level === 10 && array[0].elementIndex === 3){
      comboValue = 39;
      comboToBeat = "Level 10 Poison";
    }else if (array[0].level === 10 && array[0].elementIndex === 4){
      comboValue = 40;
      comboToBeat = "Level 10 Magic";
    }else if (array[0].level === 11 && array[0].elementIndex === 1){
      comboValue = 41;
      comboToBeat = "Level 11 Crystal";
    }else if (array[0].level === 11 && array[0].elementIndex === 2){
      comboValue = 42;
      comboToBeat = "Level 11 Wind";
    }else if (array[0].level === 11 && array[0].elementIndex === 3){
      comboValue = 43;
      comboToBeat = "Level 11 Poison";
    }else if (array[0].level === 11 && array[0].elementIndex === 4){
      comboValue = 44;
      comboToBeat = "Level 11 Magic";
    }else if (array[0].level === 12 && array[0].elementIndex === 1){
      comboValue = 45;
      comboToBeat = "Level 12 Crystal";
    }else if (array[0].level === 12 && array[0].elementIndex === 2){
      comboValue = 46;
      comboToBeat = "Level 12 Wind";
    }else if (array[0].level === 12 && array[0].elementIndex === 3){
      comboValue = 47;
      comboToBeat = "Level 12 Poison";
    }else if (array[0].level === 12 && array[0].elementIndex === 4){
      comboValue = 48;
      comboToBeat = "Level 12 Magic";
    }else if (array[0].level === 13 && array[0].elementIndex === 1){
      comboValue = 49;
      comboToBeat = "Level 13 Crystal";
    }else if (array[0].level === 13 && array[0].elementIndex === 2){
      comboValue = 50;
      comboToBeat = "Level 13 Wind";
    }else if (array[0].level === 13 && array[0].elementIndex === 3){
      comboValue = 51;
      comboToBeat = "Level 13 Poison";
    }else if (array[0].level === 13 && array[0].elementIndex === 4){
      comboValue = 52;
      comboToBeat = "Unbeatable! Say Zimi";
    }
  }

  //assign value to pair
  function pairValueAssign(array){
    array.sort(compareByLevel);
    if (array[1].level === 1 && array[1].elementIndex === 2){
      comboValue = 1;
      comboToBeat = "Level 1 low pair";
    } else if (array[1].level === 1 && array[1].elementIndex === 3){
      comboValue = 2;
      comboToBeat = "Level 1 middle pair";
    } else if (array[1].level === 1 && array[1].elementIndex === 4){
      comboValue = 3;
      comboToBeat = "Level 1 high pair";
    } else if (array[1].level === 2 && array[1].elementIndex === 2){
      comboValue = 4;
      comboToBeat = "Level 2 low pair";
    } else if (array[1].level === 2 && array[1].elementIndex === 3){
      comboValue = 5;
      comboToBeat = "Level 2 middle pair";
    } else if (array[1].level === 2 && array[1].elementIndex === 4){
      comboValue = 6;
      comboToBeat = "Level 2 high pair";
    } else if (array[1].level === 3 && array[1].elementIndex === 2){
      comboValue = 7;
      comboToBeat = "Level 3 low pair";
    } else if (array[1].level === 3 && array[1].elementIndex === 3){
      comboValue = 8;
      comboToBeat = "Level 3 middle pair";
    } else if (array[1].level === 3 && array[1].elementIndex === 4){
      comboValue = 9;
      comboToBeat = "Level 3 high pair";
    } else if (array[1].level === 4 && array[1].elementIndex === 2){
      comboValue = 10;
      comboToBeat = "Level 4 low pair";
    } else if (array[1].level === 4 && array[1].elementIndex === 3){
      comboValue = 11;
      comboToBeat = "Level 4 middle pair";
    } else if (array[1].level === 4 && array[1].elementIndex === 4){
      comboValue = 12;
      comboToBeat = "Level 4 high pair";
    } else if (array[1].level === 5 && array[1].elementIndex === 2){
      comboValue = 13;
      comboToBeat = "Level 5 low pair";
    } else if (array[1].level === 5 && array[1].elementIndex === 3){
      comboValue = 14;
      comboToBeat = "Level 5 middle pair";
    } else if (array[1].level === 5 && array[1].elementIndex === 4){
      comboValue = 15;
      comboToBeat = "Level 5 high pair";
    } else if (array[1].level === 6 && array[1].elementIndex === 2){
      comboValue = 16;
      comboToBeat = "Level 6 low pair";
    } else if (array[1].level === 6 && array[1].elementIndex === 3){
      comboValue = 17;
      comboToBeat = "Level 6 middle pair";
    } else if (array[1].level === 6 && array[1].elementIndex === 4){
      comboValue = 18;
      comboToBeat = "Level 6 high pair";
    } else if (array[1].level === 7 && array[1].elementIndex === 2){
      comboValue = 19;
      comboToBeat = "Level 7 low pair";
    } else if (array[1].level === 7 && array[1].elementIndex === 3){
      comboValue = 20;
      comboToBeat = "Level 7 middle pair";
    } else if (array[1].level === 7 && array[1].elementIndex === 4){
      comboValue = 21;
      comboToBeat = "Level 7 high pair";
    } else if (array[1].level === 8 && array[1].elementIndex === 2){
      comboValue = 22;
      comboToBeat = "Level 8 low pair";
    } else if (array[1].level === 8 && array[1].elementIndex === 3){
      comboValue = 23;
      comboToBeat = "Level 8 middle pair";
    } else if (array[1].level === 8 && array[1].elementIndex === 4){
      comboValue = 24;
      comboToBeat = "Level 8 high pair";
    } else if (array[1].level === 9 && array[1].elementIndex === 2){
      comboValue = 25;
      comboToBeat = "Level 9 low pair";
    } else if (array[1].level === 9 && array[1].elementIndex === 3){
      comboValue = 26;
      comboToBeat = "Level 9 middle pair";
    } else if (array[1].level === 9 && array[1].elementIndex === 4){
      comboValue = 27;
      comboToBeat = "Level 9 high pair";
    } else if (array[1].level === 10 && array[1].elementIndex === 2){
      comboValue = 28;
      comboToBeat = "Level 10 low pair";
    } else if (array[1].level === 10 && array[1].elementIndex === 3){
      comboValue = 29;
      comboToBeat = "Level 10 middle pair";
    } else if (array[1].level === 10 && array[1].elementIndex === 4){
      comboValue = 30;
      comboToBeat = "Level 10 high pair";
    } else if (array[1].level === 11 && array[1].elementIndex === 2){
      comboValue = 31;
      comboToBeat = "Level 11 low pair";
    } else if (array[1].level === 11 && array[1].elementIndex === 3){
      comboValue = 32;
      comboToBeat = "Level 11 middle pair";
    } else if (array[1].level === 11 && array[1].elementIndex === 4){
      comboValue = 33;
      comboToBeat = "Level 11 high pair";
    } else if (array[1].level === 12 && array[1].elementIndex === 2){
      comboValue = 34;
      comboToBeat = "Level 12 low pair";
    } else if (array[1].level === 12 && array[1].elementIndex === 3){
      comboValue = 35;
      comboToBeat = "Level 12 middle pair";
    } else if (array[1].level === 12 && array[1].elementIndex === 4){
      comboValue = 36;
      comboToBeat = "Level 12 high pair";
    } else if (array[1].level === 13 && array[1].elementIndex === 2){
      comboValue = 37;
      comboToBeat = "Level 13 low pair";
    } else if (array[1].level === 13 && array[1].elementIndex === 3){
      comboValue = 38;
      comboToBeat = "Level 13 middle pair";
    } else if (array[1].level === 13 && array[1].elementIndex === 4){
      comboValue = 39;
      comboToBeat = "Unbeatable! Say Zimi";
    }
  }
  //assign value to triple
  function tripleValueAssign(array){
    array.sort(compareByLevel);
    if (array[2].level === 1 && array[2].elementIndex === 3){
      comboValue = 1;
      comboToBeat = "Level 1 triple";
    }else if (array[2].level === 1 && array[2].elementIndex === 4){
      comboValue = 2;
      comboToBeat = "Level 1 triple";
    }else if (array[2].level === 2 && array[2].elementIndex === 3){
      comboValue = 3;
      comboToBeat = "Level 2 triple";
    }else if (array[2].level === 2 && array[2].elementIndex === 4){
      comboValue = 4;
      comboToBeat = "Level 2 triple";
    }else if (array[2].level === 3 && array[2].elementIndex === 3){
      comboValue = 5;
      comboToBeat = "Level 3 triple";
    }else if (array[2].level === 3 && array[2].elementIndex === 4){
      comboValue = 6;
      comboToBeat = "Level 3 triple";
    }else if (array[2].level === 4 && array[2].elementIndex === 3){
      comboValue = 7;
      comboToBeat = "Level 4 triple";
    }else if (array[2].level === 4 && array[2].elementIndex === 4){
      comboValue = 8;
      comboToBeat = "Level 4 triple";
    }else if (array[2].level === 5 && array[2].elementIndex === 3){
      comboValue = 9;
      comboToBeat = "Level 5 triple";
    }else if (array[2].level === 5 && array[2].elementIndex === 4){
      comboValue = 10;
      comboToBeat = "Level 5 triple";
    }else if (array[2].level === 6 && array[2].elementIndex === 3){
      comboValue = 11;
      comboToBeat = "Level 6 triple";
    }else if (array[2].level === 6 && array[2].elementIndex === 4){
      comboValue = 12;
      comboToBeat = "Level 6 triple";
    }else if (array[2].level === 7 && array[2].elementIndex === 3){
      comboValue = 13;
      comboToBeat = "Level 7 triple";
    }else if (array[2].level === 7 && array[2].elementIndex === 4){
      comboValue = 14;
      comboToBeat = "Level 7 triple";
    }else if (array[2].level === 8 && array[2].elementIndex === 3){
      comboValue = 15;
      comboToBeat = "Level 8 triple";
    }else if (array[2].level === 8 && array[2].elementIndex === 4){
      comboValue = 16;
      comboToBeat = "Level 8 triple";
    }else if (array[2].level === 9 && array[2].elementIndex === 3){
      comboValue = 17;
      comboToBeat = "Level 9 triple";
    }else if (array[2].level === 9 && array[2].elementIndex === 4){
      comboValue = 18;
      comboToBeat = "Level 9 triple";
    }else if (array[2].level === 10 && array[2].elementIndex === 3){
      comboValue = 19;
      comboToBeat = "Level 10 triple";
    }else if (array[2].level === 10 && array[2].elementIndex === 4){
      comboValue = 20;
      comboToBeat = "Level 10 triple";
    }else if (array[2].level === 11 && array[2].elementIndex === 3){
      comboValue = 21;
      comboToBeat = "Level 11 triple";
    }else if (array[2].level === 11 && array[2].elementIndex === 4){
      comboValue = 22;
      comboToBeat = "Level 11 triple";
    }else if (array[2].level === 12 && array[2].elementIndex === 3){
      comboValue = 23;
      comboToBeat = "Level 12 triple";
    }else if (array[2].level === 12 && array[2].elementIndex === 4){
      comboValue = 24;
      comboToBeat = "Level 12 triple";
    }else if (array[2].level === 13 && array[2].elementIndex === 3){
      comboValue = 25;
      comboToBeat = "Unbeatable! Say Zimi";
    }else if (array[2].level === 13 && array[2].elementIndex === 4){
      comboValue = 26;
      comboToBeat = "Unbeatable! Say Zimi";
    }
  }

  //assign value to straight
  function straightValueAssign(array){
    array.sort(compareByLevel);
    if (array[4].level === 5 && array[4].elementIndex === 1){
      comboValue = 1;
      comboToBeat = "Straight with Level 5 Crystal high";
    }else if(array[4].level === 5 && array[4].elementIndex === 2){
        comboValue = 2;
        comboToBeat = "Straight with Level 5 Wind high";
    }else if(array[4].level === 5 && array[4].elementIndex === 3){
        comboValue = 3;
        comboToBeat = "Straight with Level 5 Poison high";
    }else if(array[4].level === 5 && array[4].elementIndex === 4){
        comboValue = 4;
        comboToBeat = "Straight with Level 5 Magic high";
    }else if(array[4].level === 6 && array[4].elementIndex === 1){
        comboValue = 5;
        comboToBeat = "Straight with Level 6 Crystal high";
    }else if(array[4].level === 6 && array[4].elementIndex === 2){
        comboValue = 6;
        comboToBeat = "Straight with Level 6 Wind high";
    }else if(array[4].level === 6 && array[4].elementIndex === 3){
        comboValue = 7;
        comboToBeat = "Straight with Level 6 Poison high";
    }else if(array[4].level === 6 && array[4].elementIndex === 4){
        comboValue = 8;
        comboToBeat = "Straight with Level 6 Magic high";
    }else if(array[4].level === 7 && array[4].elementIndex === 1){
        comboValue = 9;
        comboToBeat = "Straight with Level 7 Crystal high";
    }else if(array[4].level === 7 && array[4].elementIndex === 2){
        comboValue = 14;
        comboToBeat = "Straight with Level 7 Wind high";
    }else if(array[4].level === 7 && array[4].elementIndex === 3){
        comboValue = 11;
        comboToBeat = "Straight with Level 7 Poison high";
    }else if(array[4].level === 7 && array[4].elementIndex === 4){
        comboValue = 12;
        comboToBeat = "Straight with Level 7 Magic high";
    }else if(array[4].level === 8 && array[4].elementIndex === 1){
        comboValue = 13;
        comboToBeat = "Straight with Level 8 Crystal high";
    }else if(array[4].level === 8 && array[4].elementIndex === 2){
        comboValue = 14;
        comboToBeat = "Straight with Level 8 Wind high";
    }else if(array[4].level === 8 && array[4].elementIndex === 3){
        comboValue = 15;
        comboToBeat = "Straight with Level 8 Poison high";
    }else if(array[4].level === 8 && array[4].elementIndex === 4){
        comboValue = 16;
        comboToBeat = "Straight with Level 8 Magic high";
    }else if(array[4].level === 9 && array[4].elementIndex === 1){
        comboValue = 17;
        comboToBeat = "Straight with Level 9 Crystal high";
    }else if(array[4].level === 9 && array[4].elementIndex === 2){
        comboValue = 18;
        comboToBeat = "Straight with Level 9 Wind high";
    }else if(array[4].level === 9 && array[4].elementIndex === 3){
        comboValue = 19;
        comboToBeat = "Straight with Level 9 Poison high";
    }else if(array[4].level === 9 && array[4].elementIndex === 4){
        comboValue = 24;
        comboToBeat = "Straight with Level 9 Magic high";
    }else if(array[4].level === 10 && array[4].elementIndex === 1){
        comboValue = 21;
        comboToBeat = "Straight with Level 10 Crystal high";
    }else if(array[4].level === 10 && array[4].elementIndex === 2){
        comboValue = 22;
        comboToBeat = "Straight with Level 10 Wind high";
    }else if(array[4].level === 10 && array[4].elementIndex === 3){
        comboValue = 23;
        comboToBeat = "Straight with Level 10 Poison high";
    }else if(array[4].level === 10 && array[4].elementIndex === 4){
        comboValue = 24;
        comboToBeat = "Straight with Level 10 Magic high";
    }else if(array[4].level === 11 && array[4].elementIndex === 1){
        comboValue = 25;
        comboToBeat = "Straight with Level 11 Crystal high";
    }else if(array[4].level === 11 && array[4].elementIndex === 2){
        comboValue = 26;
        comboToBeat = "Straight with Level 11 Wind high";
    }else if(array[4].level === 11 && array[4].elementIndex === 3){
        comboValue = 27;
        comboToBeat = "Straight with Level 11 Poison high";
    }else if(array[4].level === 11 && array[4].elementIndex === 4){
        comboValue = 28;
        comboToBeat = "Straight with Level 11 Magic high";
    }else if(array[4].level === 12 && array[4].elementIndex === 1){
        comboValue = 29;
        comboToBeat = "Straight with Level 12 Crystal high";
    }else if(array[4].level === 12 && array[4].elementIndex === 2){
        comboValue = 34;
        comboToBeat = "Straight with Level 12 Wind high";
    }else if(array[4].level === 12 && array[4].elementIndex === 3){
        comboValue = 31;
        comboToBeat = "Straight with Level 12 Poison high";
    }else if(array[4].level === 12 && array[4].elementIndex === 4){
        comboValue = 32;
        comboToBeat = "Straight with Level 12 Magic high";
    }else if(array[4].level === 13 && array[4].elementIndex === 1){
        comboValue = 33;
        comboToBeat = "Straight with Level 13 Crystal high";
    }else if(array[4].level === 13 && array[4].elementIndex === 2){
        comboValue = 34;
        comboToBeat = "Straight with Level 13 Wind high";
    }else if(array[4].level === 13 && array[4].elementIndex === 3){
        comboValue = 35;
        comboToBeat = "Straight with Level 13 Poison high";
    }else if(array[4].level === 13 && array[4].elementIndex === 4){
        comboValue = 36;
        comboToBeat = "Straight with Level 13 Magic high";
      }
  }
  //assign value to flush
  function flushValueAssign(array){
    array.sort(compareByLevel);
    if (array[4].level === 6 && array[4].elementIndex === 1){
      comboValue = 37;
      comboToBeat = "Crystal Flush to Level 6";
    }else if (array[4].level === 7 && array[4].elementIndex === 1){
      comboValue = 38;
      comboToBeat = "Crystal Flush to Level 7";
    }else if (array[4].level === 8 && array[4].elementIndex === 1){
      comboValue = 39;
      comboToBeat = "Crystal Flush to Level 8";
    }else if (array[4].level === 9 && array[4].elementIndex === 1){
      comboValue = 40;
      comboToBeat = "Crystal Flush to Level 9";
    }else if (array[4].level === 10 && array[4].elementIndex === 1){
      comboValue = 41;
      comboToBeat = "Crystal Flush to Level 10";
    }else if (array[4].level === 11 && array[4].elementIndex === 1){
      comboValue = 42;
      comboToBeat = "Crystal Flush to Level 11";
    }else if (array[4].level === 12 && array[4].elementIndex === 1){
      comboValue = 43;
      comboToBeat = "Crystal Flush to Level 12";
    }else if (array[4].level === 13 && array[4].elementIndex === 1){
      comboValue = 44;
      comboToBeat = "Crystal Flush to Level 13";
    }else if (array[4].level === 6 && array[4].elementIndex === 2){
      comboValue = 45;
      comboToBeat = "Wind Flush to Level 6";
    }else if (array[4].level === 7 && array[4].elementIndex === 2){
      comboValue = 46;
      comboToBeat = "Wind Flush to Level 7";
    }else if (array[4].level === 8 && array[4].elementIndex === 2){
      comboValue = 47;
      comboToBeat = "Wind Flush to Level 8";
    }else if (array[4].level === 9 && array[4].elementIndex === 2){
      comboValue = 48;
      comboToBeat = "Wind Flush to Level 9";
    }else if (array[4].level === 10 && array[4].elementIndex === 2){
      comboValue = 49;
      comboToBeat = "Wind Flush to Level 10";
    }else if (array[4].level === 11 && array[4].elementIndex === 2){
      comboValue = 50;
      comboToBeat = "Wind Flush to Level 11";
    }else if (array[4].level === 12 && array[4].elementIndex === 2){
      comboValue = 51;
      comboToBeat = "Wind Flush to Level 12";
    }else if (array[4].level === 13 && array[4].elementIndex === 2){
      comboValue = 52;
      comboToBeat = "Wind Flush to Level 13";
    }else if (array[4].level === 6 && array[4].elementIndex === 3){
      comboValue = 53;
      comboToBeat = "Poison Flush to Level 6";
    }else if (array[4].level === 7 && array[4].elementIndex === 3){
      comboValue = 54;
      comboToBeat = "Poison Flush to Level 7";
    }else if (array[4].level === 8 && array[4].elementIndex === 3){
      comboValue = 55;
      comboToBeat = "Poison Flush to Level 8";
    }else if (array[4].level === 9 && array[4].elementIndex === 3){
      comboValue = 56;
      comboToBeat = "Poison Flush to Level 9";
    }else if (array[4].level === 10 && array[4].elementIndex === 3){
      comboValue = 57;
      comboToBeat = "Poison Flush to Level 10";
    }else if (array[4].level === 11 && array[4].elementIndex === 3){
      comboValue = 58;
      comboToBeat = "Poison Flush to Level 11";
    }else if (array[4].level === 12 && array[4].elementIndex === 3){
      comboValue = 59;
      comboToBeat = "Poison Flush to Level 12";
    }else if (array[4].level === 13 && array[4].elementIndex === 3){
      comboValue = 60;
      comboToBeat = "Poison Flush to Level 13";
    }else if (array[4].level === 6 && array[4].elementIndex === 4){
      comboValue = 61;
      comboToBeat = "Magic Flush to Level 6";
    }else if (array[4].level === 7 && array[4].elementIndex === 4){
      comboValue = 62;
      comboToBeat = "Magic Flush to Level 7";
    }else if (array[4].level === 8 && array[4].elementIndex === 4){
      comboValue = 63;
      comboToBeat = "Magic Flush to Level 8";
    }else if (array[4].level === 9 && array[4].elementIndex === 4){
      comboValue = 64;
      comboToBeat = "Magic Flush to Level 9";
    }else if (array[4].level === 10 && array[4].elementIndex === 4){
      comboValue = 65;
      comboToBeat = "Magic Flush to Level 10";
    }else if (array[4].level === 11 && array[4].elementIndex === 4){
      comboValue = 66;
      comboToBeat = "Magic Flush to Level 11";
    }else if (array[4].level === 12 && array[4].elementIndex === 4){
      comboValue = 67;
      comboToBeat = "Magic Flush to Level 12";
    }else if (array[4].level === 13 && array[4].elementIndex === 4){
      comboValue = 68;
      comboToBeat = "Magic Flush to Level 13";
    }
  }

  //assign value to full house
  function fullHouseValueAssign(array){
    array.sort(compareByLevel);
    switch (array[2].level){
      case  1:
      comboValue = 69;
      comboToBeat = "Full House Level 1 high";
      break;
      case  2:
      comboValue = 70;
      comboToBeat = "Full House Level 2 high";
      break;
      case  3:
      comboValue = 71;
      comboToBeat = "Full House Level 3 high";
      break;
      case  4:
      comboValue = 72;
      comboToBeat = "Full House Level 4 high";
      break;
      case  5:
      comboValue = 73;
      comboToBeat = "Full House Level 5 high";
      break;
      case  6:
      comboValue = 74;
      comboToBeat = "Full House Level 6 high";
      break;
      case  7:
      comboValue = 75;
      comboToBeat = "Full House Level 7 high";
      break;
      case  8:
      comboValue = 76;
      comboToBeat = "Full House Level 8 high";
      break;
      case  9:
      comboValue = 77;
      comboToBeat = "Full House Level 9 high";
      break;
      case  10:
      comboValue = 78;
      comboToBeat = "Full House Level 10 high";
      break;
      case  11:
      comboValue = 79;
      comboToBeat = "Full House Level 11 high";
      break;
      case  12:
      comboValue = 80;
      comboToBeat = "Full House Level 12 high";
      break;
      case  13:
      comboValue = 81;
      comboToBeat = "Full House Level 13 high";
      break;
      default:
      alert("something went screwy");
    }
  }

  //assign value to four of a kind
  function fourOfAKindValueAssign(array){
    array.sort(compareByLevel);
    switch (array[2].level){
      case 1:
      comboValue = 82;
      comboToBeat = "Four Of A Kind, Level 1";
      break;
      case 2:
      comboValue = 83;
      comboToBeat = "Four Of A Kind, Level 2";
      break;
      case 3:
      comboValue = 84;
      comboToBeat = "Four Of A Kind, Level 3";
      break;
      case 4:
      comboValue = 85;
      comboToBeat = "Four Of A Kind, Level 4";
      break;
      case 5:
      comboValue = 86;
      comboToBeat = "Four Of A Kind, Level 5";
      break;
      case 6:
      comboValue = 87;
      comboToBeat = "Four Of A Kind, Level 6";
      break;
      case 7:
      comboValue = 88;
      comboToBeat = "Four Of A Kind, Level 7";
      break;
      case 8:
      comboValue = 89;
      comboToBeat = "Four Of A Kind, Level 8";
      break;
      case 9:
      comboValue = 90;
      comboToBeat = "Four Of A Kind, Level 9";
      break;
      case 10:
      comboValue = 91;
      comboToBeat = "Four Of A Kind, Level 10";
      break;
      case 11:
      comboValue = 92;
      comboToBeat = "Four Of A Kind, Level 11";
      break;
      case 12:
      comboValue = 93;
      comboToBeat = "Four Of A Kind, Level 12";
      break;
      case 13:
      comboValue = 94;
      comboToBeat = "Four Of A Kind, Level 13";
      break;
      default:
      alert("something went screwy");
    }
  }

  //assign value to straight flush
  function straightFlushValueAssign(array){
    array.sort(compareByLevel);
    if (array[4].level === 5 && array[4].elementIndex === 1){
      comboValue = 95;
      comboToBeat = "Crystal straight flush, Level 5 high";
      } else if (array[4].level === 5 && array[4].elementIndex === 2){
      comboValue = 96;
      comboToBeat = "Wind straight flush, Level 5 high";
      } else if (array[4].level === 5 && array[4].elementIndex === 3){
      comboValue = 97;
      comboToBeat = "Poison straight flush, Level 5 high";
      } else if (array[4].level === 5 && array[4].elementIndex === 4){
      comboValue = 98;
      comboToBeat = "Magic straight flush, Level 5 high";
      } else if (array[4].level === 6 && array[4].elementIndex === 1){
      comboValue = 99;
      comboToBeat = "Crystal straight flush, Level 6 high";
      } else if (array[4].level === 6 && array[4].elementIndex === 2){
      comboValue = 100;
      comboToBeat = "Wind straight flush, Level 6 high";
      } else if (array[4].level === 6 && array[4].elementIndex === 3){
      comboValue = 101;
      comboToBeat = "Poison straight flush, Level 6 high";
      } else if (array[4].level === 6 && array[4].elementIndex === 4){
      comboValue = 102;
      comboToBeat = "Magic straight flush, Level 6 high";
      } else if (array[4].level === 7 && array[4].elementIndex === 1){
      comboValue = 103;
      comboToBeat = "Crystal straight flush, Level 7 high";
      } else if (array[4].level === 7 && array[4].elementIndex === 2){
      comboValue = 104;
      comboToBeat = "Wind straight flush, Level 7 high";
      } else if (array[4].level === 7 && array[4].elementIndex === 3){
      comboValue = 105;
      comboToBeat = "Poison straight flush, Level 7 high";
      } else if (array[4].level === 7 && array[4].elementIndex === 4){
      comboValue = 106;
      comboToBeat = "Magic straight flush, Level 7 high";
      } else if (array[4].level === 8 && array[4].elementIndex === 1){
      comboValue = 107;
      comboToBeat = "Crystal straight flush, Level 8 high";
      } else if (array[4].level === 8 && array[4].elementIndex === 2){
      comboValue = 108;
      comboToBeat = "Wind straight flush, Level 8 high";
      } else if (array[4].level === 8 && array[4].elementIndex === 3){
      comboValue = 109;
      comboToBeat = "Poison straight flush, Level 8 high";
      } else if (array[4].level === 8 && array[4].elementIndex === 4){
      comboValue = 110;
      comboToBeat = "Magic straight flush, Level 8 high";
      } else if (array[4].level === 9 && array[4].elementIndex === 1){
      comboValue = 111;
      comboToBeat = "Crystal straight flush, Level 9 high";
      } else if (array[4].level === 9 && array[4].elementIndex === 2){
      comboValue = 112;
      comboToBeat = "Wind straight flush, Level 9 high";
      } else if (array[4].level === 9 && array[4].elementIndex === 3){
      comboValue = 113;
      comboToBeat = "Poison straight flush, Level 9 high";
      } else if (array[4].level === 9 && array[4].elementIndex === 4){
      comboValue = 114;
      comboToBeat = "Magic straight flush, Level 9 high";
      } else if (array[4].level === 10 && array[4].elementIndex === 1){
      comboValue = 115;
      comboToBeat = "Crystal straight flush, Level 10 high";
      } else if (array[4].level === 10 && array[4].elementIndex === 2){
      comboValue = 116;
      comboToBeat = "Wind straight flush, Level 10 high";
      } else if (array[4].level === 10 && array[4].elementIndex === 3){
      comboValue = 117;
      comboToBeat = "Poison straight flush, Level 10 high";
      } else if (array[4].level === 10 && array[4].elementIndex === 4){
      comboValue = 118;
      comboToBeat = "Magic straight flush, Level 10 high";
      } else if (array[4].level === 11 && array[4].elementIndex === 1){
      comboValue = 119;
      comboToBeat = "Crystal straight flush, Level 11 high";
      } else if (array[4].level === 11 && array[4].elementIndex === 2){
      comboValue = 120;
      comboToBeat = "Wind straight flush, Level 11 high";
      } else if (array[4].level === 11 && array[4].elementIndex === 3){
      comboValue = 121;
      comboToBeat = "Poison straight flush, Level 11 high";
      } else if (array[4].level === 11 && array[4].elementIndex === 4){
      comboValue = 122;
      comboToBeat = "Magic straight flush, Level 11 high";
      } else if (array[4].level === 12 && array[4].elementIndex === 1){
      comboValue = 123;
      comboToBeat = "Crystal straight flush, Level 12 high";
      } else if (array[4].level === 12 && array[4].elementIndex === 2){
      comboValue = 124;
      comboToBeat = "Wind straight flush, Level 12 high";
      } else if (array[4].level === 12 && array[4].elementIndex === 3){
      comboValue = 125;
      comboToBeat = "Poison straight flush, Level 12 high";
      } else if (array[4].level === 12 && array[4].elementIndex === 4){
      comboValue = 126;
      comboToBeat = "Magic straight flush, Level 12 high";
      } else if (array[4].level === 13 && array[4].elementIndex === 1){
      comboValue = 127;
      comboToBeat = "Crystal straight flush, Level 13 high";
      } else if (array[4].level === 13 && array[4].elementIndex === 2){
      comboValue = 128;
      comboToBeat = "Wind straight flush, Level 13 high";
      } else if (array[4].level === 13 && array[4].elementIndex === 3){
      comboValue = 129;
      comboToBeat = "Poison straight flush, Level 13 high";
      } else if (array[4].level === 13 && array[4].elementIndex === 4){
      comboValue = 130;
      comboToBeat = "Unbeatable! Say Zimi";
      }
  }
  //check if hand played matches ComboNumber of hand previously played
  function doesHandMatchComboNumber(){
    console.log(`Combo number = ${comboNumber}: checking for matching combo number!`)
    if (setComboNumber === undefined) {
      return true;
    } else if (setComboNumber === comboNumber) {
      return true;
    } else {
      return false;
    }
  }
  //check if hand played is higher than ComboValue of hand previously played
  function doesHandMatchComboValue(){
    console.log(`Combo Value = ${comboValue}: checking for higher value!`)
    if (setComboValue === undefined) {
      return true;
    } else if (setComboValue < comboValue) {
      return true;
    } else {
      return false;
    }
  }

  //check if hand is valid
  function isHandValidCheck(array) {
    console.log("checking if hand is valid!")
    switch (array.length) {
      case 0:
        alert("Hands must be 1, 2, 3, or 5 cards!");
      break;
      case 1:
        singleValueAssign(array);
        if (doesHandMatchComboNumber(array) && doesHandMatchComboValue(array) === true) {
           setComboNumber = comboNumber;
           setComboValue = comboValue;
           comboToBeatMessage = `Card to beat is ${comboToBeat}!`;
           console.log(comboToBeatMessage);
        } else {
          alert("You have to play a higher value combination of the same number of cards your opponent played, or say Zimi!");
          allBuildToDeck();
        }
      break;
      case 2:
        checkForPair(array);
        if (doesHandMatchComboNumber(array) && doesHandMatchComboValue(array) === true) {
           setComboNumber = comboNumber;
           setComboValue = comboValue;
           comboToBeatMessage = `Combo to beat is ${comboToBeat}!`;
           console.log(comboToBeatMessage);
          } else {
          alert("You have to play a higher value combination of the same number of cards your opponent played, or say Zimi!");
          allBuildToDeck();
        }
      break;
      case 3:
        checkForTriple(array);
        if (doesHandMatchComboNumber(array) && doesHandMatchComboValue(array) === true) {
           setComboNumber = comboNumber;
           setComboValue = comboValue;
           comboToBeatMessage = `Combo to beat is ${comboToBeat}!`;
           console.log(comboToBeatMessage);
          } else {
          alert("You have to play a higher value combination of the same number of cards your opponent played, or say Zimi!");
          allBuildToDeck();
        }
      break;
      case 4:
        alert("Hands must be 1, 2, 3, or 5 cards!");
        allBuildToDeck();
      break;
      case 5:
        checkForStraight(array);
        if (doesHandMatchComboNumber(array) && doesHandMatchComboValue(array) === true) {
           setComboNumber = comboNumber;
           setComboValue = comboValue;
           comboToBeatMessage = `Combo to beat is ${comboToBeat}!`;
           console.log(comboToBeatMessage);
          } else {
          alert("You have to play a higher value combination of the same number of cards your opponent played, or say Zimi!");
          allBuildToDeck();
        }
      break;
      default:
        alert("This is the default!");
        allBuildToDeck();
    }
  }


  //PART FIVE
  //THESE FUNCTIONS DEAL WITH THE END OF A TURN, WHEN A PLAYER EITHER PLAYS HIS HAND OR GIVES HIS OPPONENT A FREE MOVE

  //play hand
  function playHand(){
  $('button.play').click(function(){
    console.log("playing hand!")
    console.log(build1);
    isHandValidCheck(build1);
    //check for win, then end turn
    checkForWin();
    })
  }
  playHand();

  //check for win function (check your deck array for length, if length 0 you win)
  function checkForWin(){
    console.log("checking for win!")
    if (activeDeck.length === 0) {
      alert("YOU WIN!");
      winState = true;
    } else {
      if (build1.length === 0) {
        return
      }
      endTurn();
    }
  }

  //end turn function
  function endTurn(){
    console.log("ending turn!")
    turnCounter ++;
    turnCount();
    resetBuildDeck();
    // something here about visuals signifying change of player
    activeDeck = player == "P1" ? deck1 : deck2;
    handIsValid = false;
    console.log(player);
    runOfTurn();
  }

  //say Zimi
  //reset undefined combo variables after someone says Zimi
  function sayZimi(){
    $('button.zimi').click(function(){
    console.log("Zimi!")
  // great visual here about saying Zimi! This is the money shot! It's the hot new catchphrase sweeping the nation!
  setComboValue = undefined;
  setComboNumber = undefined;
  comboToBeat = undefined;
  comboToBeatMessage = undefined;
  allBuildToDeck();
  endTurn();
  })
  }
    sayZimi();





  //find highest card in array - didn't end up using this?
  function findHighest(array){
    array.sort(compareByLevel);
    return array[array.length - 1]
  }


 //PART SIX
  // HERE IS WHERE THE TURN CYCLE BEGINS
  // FIRST WE MAP THE PLAYER DECK TO THE DECK AREA


  runOfTurn();
  // put run of turn into a function
  function runOfTurn(){
    console.log(build1);

  mapCardsToDeckArea();



  //close runOfTurn function
};

//close jQuery ready function
});
