console.log ("javascript is working!")
//jQuery ready function
$(document).ready(function(){

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

  //establish undefined set combo value and number
  let setComboValue;
  let setComboNumber;
  let comboValue;
  let comboNumber;

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
  // FUNCTIONS THAT GO ON BEFORE THE CYCLICAL TURNS BEGIN
  // THESE WON'T BE REPEATED AND ONLY HAPPEN ONCE AT THE START OF THE GAME

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
  // HERE IS WHERE THE TURN CYCLE BEGINS
  // FIRST WE MAP THE PLAYER DECK TO THE DECK AREA


  runOfTurn();
  // put run of turn into a function
  function runOfTurn(){

  //map card divs to positions in array deck1
  function mapCardsToDeckArea(){
  for (i=0; i < activeDeck.length; i++){
    $(`#${i}`).html(activeDeck[i].thumbnail ?  `<img src= ${activeDeck[i].thumbnail}>` : "");
    }
    $(".deck-title").html(`<h1> ${player} DECK <h1>`)
  }
mapCardsToDeckArea();

  // THIS IS WHERE WE PUT THE FUNCTIONS THAT DEAL WITH THE BUILD AREA
  // THIS IS CURRENTLY ALL FUCKED THE FUCK UP

  //map clicked cards to build array
  function mapCardsToBuildArea(){
    let buildAreaContent = build1.map(function(card) {
      return `<img src= ${card.thumbnail}>`
    } );
    let buildAreaText = buildAreaContent.join(" ");
    $('.build-area').html(buildAreaText);

  }

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
    for (i=0; i < build1.length; i++){
      activeDeck.push(build1[i]);
    };
      mapCardsToBuildArea();
      mapCardsToDeckArea();
  }
  //reset build deck
  function resetBuildDeck(){
    console.log("clearing build deck!")
    build1 = [];
    $(".build-area").html('<div class = "build-area-label"><h2> CLICK CARDS TO BUILD YOUR </br> 1, 2, 3, OR 5 </br>CARD HAND HERE</h2></div><div class = "build-area-cards" id = "first" data-build-index = "1"> </div><div class = "build-area-cards" id = "second" data-build-index = "2"></div><div class = "build-area-cards" id = "third" data-build-index = "3"></div><div class = "build-area-cards" id = "fourth" data-build-index = "4"></div><div class = "build-area-cards" id = "fifth" data-build-index = "5">  </div>')
  }

  //find highest card in array - didn't end up using this?
  function findHighest(array){
    array.sort(compareByLevel);
    return array[array.length - 1]
  }

  //PART FOUR
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
    }else if (array[0].level === 1 && array[0].elementIndex === 2){
      comboValue = 2;
    }else if (array[0].level === 1 && array[0].elementIndex === 3){
      comboValue = 3;
    }else if (array[0].level === 1 && array[0].elementIndex === 4){
      comboValue = 4;
    }else if (array[0].level === 2 && array[0].elementIndex === 1){
      comboValue = 5;
    }else if (array[0].level === 2 && array[0].elementIndex === 2){
      comboValue = 6;
    }else if (array[0].level === 2 && array[0].elementIndex === 3){
      comboValue = 7;
    }else if (array[0].level === 2 && array[0].elementIndex === 4){
      comboValue = 8;
    }else if (array[0].level === 3 && array[0].elementIndex === 1){
      comboValue = 9;
    }else if (array[0].level === 3 && array[0].elementIndex === 2){
      comboValue = 10;
    }else if (array[0].level === 3 && array[0].elementIndex === 3){
      comboValue = 11;
    }else if (array[0].level === 3 && array[0].elementIndex === 4){
      comboValue = 12;
    }else if (array[0].level === 4 && array[0].elementIndex === 1){
      comboValue = 13;
    }else if (array[0].level === 4 && array[0].elementIndex === 2){
      comboValue = 14;
    }else if (array[0].level === 4 && array[0].elementIndex === 3){
      comboValue = 15;
    }else if (array[0].level === 4 && array[0].elementIndex === 4){
      comboValue = 16;
    }else if (array[0].level === 5 && array[0].elementIndex === 1){
      comboValue = 17;
    }else if (array[0].level === 5 && array[0].elementIndex === 2){
      comboValue = 18;
    }else if (array[0].level === 5 && array[0].elementIndex === 3){
      comboValue = 19;
    }else if (array[0].level === 5 && array[0].elementIndex === 4){
      comboValue = 20;
    }else if (array[0].level === 6 && array[0].elementIndex === 1){
      comboValue = 21;
    }else if (array[0].level === 6 && array[0].elementIndex === 2){
      comboValue = 22;
    }else if (array[0].level === 6 && array[0].elementIndex === 3){
      comboValue = 23;
    }else if (array[0].level === 6 && array[0].elementIndex === 4){
      comboValue = 24;
    }else if (array[0].level === 7 && array[0].elementIndex === 1){
      comboValue = 25;
    }else if (array[0].level === 7 && array[0].elementIndex === 2){
      comboValue = 26;
    }else if (array[0].level === 7 && array[0].elementIndex === 3){
      comboValue = 27;
    }else if (array[0].level === 7 && array[0].elementIndex === 4){
      comboValue = 28;
    }else if (array[0].level === 8 && array[0].elementIndex === 1){
      comboValue = 29;
    }else if (array[0].level === 8 && array[0].elementIndex === 2){
      comboValue = 30;
    }else if (array[0].level === 8 && array[0].elementIndex === 3){
      comboValue = 31;
    }else if (array[0].level === 8 && array[0].elementIndex === 4){
      comboValue = 32;
    }else if (array[0].level === 9 && array[0].elementIndex === 1){
      comboValue = 33;
    }else if (array[0].level === 9 && array[0].elementIndex === 2){
      comboValue = 34;
    }else if (array[0].level === 9 && array[0].elementIndex === 3){
      comboValue = 35;
    }else if (array[0].level === 9 && array[0].elementIndex === 4){
      comboValue = 36;
    }else if (array[0].level === 10 && array[0].elementIndex === 1){
      comboValue = 37;
    }else if (array[0].level === 10 && array[0].elementIndex === 2){
      comboValue = 38;
    }else if (array[0].level === 10 && array[0].elementIndex === 3){
      comboValue = 39;
    }else if (array[0].level === 10 && array[0].elementIndex === 4){
      comboValue = 40;
    }else if (array[0].level === 11 && array[0].elementIndex === 1){
      comboValue = 41;
    }else if (array[0].level === 11 && array[0].elementIndex === 2){
      comboValue = 42;
    }else if (array[0].level === 11 && array[0].elementIndex === 3){
      comboValue = 43;
    }else if (array[0].level === 11 && array[0].elementIndex === 4){
      comboValue = 44;
    }else if (array[0].level === 12 && array[0].elementIndex === 1){
      comboValue = 45;
    }else if (array[0].level === 12 && array[0].elementIndex === 2){
      comboValue = 46;
    }else if (array[0].level === 12 && array[0].elementIndex === 3){
      comboValue = 47;
    }else if (array[0].level === 12 && array[0].elementIndex === 4){
      comboValue = 48;
    }else if (array[0].level === 13 && array[0].elementIndex === 1){
      comboValue = 49;
    }else if (array[0].level === 13 && array[0].elementIndex === 2){
      comboValue = 50;
    }else if (array[0].level === 13 && array[0].elementIndex === 3){
      comboValue = 51;
    }else if (array[0].level === 13 && array[0].elementIndex === 4){
      comboValue = 52;
    }
  }

  //assign value to pair
  function pairValueAssign(array){
    array.sort(compareByLevel);
    if (array[1].level === 1 && array[1].elementIndex === 2){
      comboValue = 1;
    } else if (array[1].level === 1 && array[1].elementIndex === 3){
      comboValue = 2;
    } else if (array[1].level === 1 && array[1].elementIndex === 4){
      comboValue = 3;
    } else if (array[1].level === 2 && array[1].elementIndex === 2){
      comboValue = 4;
    } else if (array[1].level === 2 && array[1].elementIndex === 3){
      comboValue = 5;
    } else if (array[1].level === 2 && array[1].elementIndex === 4){
      comboValue = 6;
    } else if (array[1].level === 3 && array[1].elementIndex === 2){
      comboValue = 7;
    } else if (array[1].level === 3 && array[1].elementIndex === 3){
      comboValue = 8;
    } else if (array[1].level === 3 && array[1].elementIndex === 4){
      comboValue = 9;
    } else if (array[1].level === 4 && array[1].elementIndex === 2){
      comboValue = 10;
    } else if (array[1].level === 4 && array[1].elementIndex === 3){
      comboValue = 11;
    } else if (array[1].level === 4 && array[1].elementIndex === 4){
      comboValue = 12;
    } else if (array[1].level === 5 && array[1].elementIndex === 2){
      comboValue = 13;
    } else if (array[1].level === 5 && array[1].elementIndex === 3){
      comboValue = 14;
    } else if (array[1].level === 5 && array[1].elementIndex === 4){
      comboValue = 15;
    } else if (array[1].level === 6 && array[1].elementIndex === 2){
      comboValue = 16;
    } else if (array[1].level === 6 && array[1].elementIndex === 3){
      comboValue = 17;
    } else if (array[1].level === 6 && array[1].elementIndex === 4){
      comboValue = 18;
    } else if (array[1].level === 7 && array[1].elementIndex === 2){
      comboValue = 19;
    } else if (array[1].level === 7 && array[1].elementIndex === 3){
      comboValue = 20;
    } else if (array[1].level === 7 && array[1].elementIndex === 4){
      comboValue = 21;
    } else if (array[1].level === 8 && array[1].elementIndex === 2){
      comboValue = 22;
    } else if (array[1].level === 8 && array[1].elementIndex === 3){
      comboValue = 23;
    } else if (array[1].level === 8 && array[1].elementIndex === 4){
      comboValue = 24;
    } else if (array[1].level === 9 && array[1].elementIndex === 2){
      comboValue = 25;
    } else if (array[1].level === 9 && array[1].elementIndex === 3){
      comboValue = 26;
    } else if (array[1].level === 9 && array[1].elementIndex === 4){
      comboValue = 27;
    } else if (array[1].level === 10 && array[1].elementIndex === 2){
      comboValue = 28;
    } else if (array[1].level === 10 && array[1].elementIndex === 3){
      comboValue = 29;
    } else if (array[1].level === 10 && array[1].elementIndex === 4){
      comboValue = 30;
    } else if (array[1].level === 11 && array[1].elementIndex === 2){
      comboValue = 31;
    } else if (array[1].level === 11 && array[1].elementIndex === 3){
      comboValue = 32;
    } else if (array[1].level === 11 && array[1].elementIndex === 4){
      comboValue = 33;
    } else if (array[1].level === 12 && array[1].elementIndex === 2){
      comboValue = 34;
    } else if (array[1].level === 12 && array[1].elementIndex === 3){
      comboValue = 35;
    } else if (array[1].level === 12 && array[1].elementIndex === 4){
      comboValue = 36;
    } else if (array[1].level === 13 && array[1].elementIndex === 2){
      comboValue = 37;
    } else if (array[1].level === 13 && array[1].elementIndex === 3){
      comboValue = 38;
    } else if (array[1].level === 13 && array[1].elementIndex === 4){
      comboValue = 39;
    }
  }
  //assign value to triple
  function tripleValueAssign(array){
    array.sort(compareByLevel);
    if (array[2].level === 1 && array[2].elementIndex === 3){
      comboValue = 1;
    }else if (array[2].level === 1 && array[2].elementIndex === 4){
      comboValue = 2;
    }else if (array[2].level === 2 && array[2].elementIndex === 3){
      comboValue = 3;
    }else if (array[2].level === 2 && array[2].elementIndex === 4){
      comboValue = 4;
    }else if (array[2].level === 3 && array[2].elementIndex === 3){
      comboValue = 5;
    }else if (array[2].level === 3 && array[2].elementIndex === 4){
      comboValue = 6;
    }else if (array[2].level === 4 && array[2].elementIndex === 3){
      comboValue = 7;
    }else if (array[2].level === 4 && array[2].elementIndex === 4){
      comboValue = 8;
    }else if (array[2].level === 5 && array[2].elementIndex === 3){
      comboValue = 9;
    }else if (array[2].level === 5 && array[2].elementIndex === 4){
      comboValue = 10;
    }else if (array[2].level === 6 && array[2].elementIndex === 3){
      comboValue = 11;
    }else if (array[2].level === 6 && array[2].elementIndex === 4){
      comboValue = 12;
    }else if (array[2].level === 7 && array[2].elementIndex === 3){
      comboValue = 13;
    }else if (array[2].level === 7 && array[2].elementIndex === 4){
      comboValue = 14;
    }else if (array[2].level === 8 && array[2].elementIndex === 3){
      comboValue = 15;
    }else if (array[2].level === 8 && array[2].elementIndex === 4){
      comboValue = 16;
    }else if (array[2].level === 9 && array[2].elementIndex === 3){
      comboValue = 17;
    }else if (array[2].level === 9 && array[2].elementIndex === 4){
      comboValue = 18;
    }else if (array[2].level === 10 && array[2].elementIndex === 3){
      comboValue = 19;
    }else if (array[2].level === 10 && array[2].elementIndex === 4){
      comboValue = 20;
    }else if (array[2].level === 11 && array[2].elementIndex === 3){
      comboValue = 21;
    }else if (array[2].level === 11 && array[2].elementIndex === 4){
      comboValue = 22;
    }else if (array[2].level === 12 && array[2].elementIndex === 3){
      comboValue = 23;
    }else if (array[2].level === 12 && array[2].elementIndex === 4){
      comboValue = 24;
    }else if (array[2].level === 13 && array[2].elementIndex === 3){
      comboValue = 25;
    }else if (array[2].level === 13 && array[2].elementIndex === 4){
      comboValue = 26;
    }
  }

  //assign value to straight
  function straightValueAssign(array){
    array.sort(compareByLevel);
    if (array[4].level === 5 && array[4].elementIndex === 1){
      comboValue = 1;
    }else if(array[4].level === 5 && array[4].elementIndex === 2){
        comboValue = 2;
    }else if(array[4].level === 5 && array[4].elementIndex === 3){
        comboValue = 3;
    }else if(array[4].level === 5 && array[4].elementIndex === 4){
        comboValue = 4;
    }else if(array[4].level === 6 && array[4].elementIndex === 1){
        comboValue = 5;
    }else if(array[4].level === 6 && array[4].elementIndex === 2){
        comboValue = 6;
    }else if(array[4].level === 6 && array[4].elementIndex === 3){
        comboValue = 7;
    }else if(array[4].level === 6 && array[4].elementIndex === 4){
        comboValue = 8;
    }else if(array[4].level === 7 && array[4].elementIndex === 1){
        comboValue = 9;
    }else if(array[4].level === 7 && array[4].elementIndex === 2){
        comboValue = 14;
    }else if(array[4].level === 7 && array[4].elementIndex === 3){
        comboValue = 11;
    }else if(array[4].level === 7 && array[4].elementIndex === 4){
        comboValue = 12;
    }else if(array[4].level === 8 && array[4].elementIndex === 1){
        comboValue = 13;
    }else if(array[4].level === 8 && array[4].elementIndex === 2){
        comboValue = 14;
    }else if(array[4].level === 8 && array[4].elementIndex === 3){
        comboValue = 15;
    }else if(array[4].level === 8 && array[4].elementIndex === 4){
        comboValue = 16;
    }else if(array[4].level === 9 && array[4].elementIndex === 1){
        comboValue = 17;
    }else if(array[4].level === 9 && array[4].elementIndex === 2){
        comboValue = 18;
    }else if(array[4].level === 9 && array[4].elementIndex === 3){
        comboValue = 19;
    }else if(array[4].level === 9 && array[4].elementIndex === 4){
        comboValue = 24;
    }else if(array[4].level === 10 && array[4].elementIndex === 1){
        comboValue = 21;
    }else if(array[4].level === 10 && array[4].elementIndex === 2){
        comboValue = 22;
    }else if(array[4].level === 10 && array[4].elementIndex === 3){
        comboValue = 23;
    }else if(array[4].level === 10 && array[4].elementIndex === 4){
        comboValue = 24;
    }else if(array[4].level === 11 && array[4].elementIndex === 1){
        comboValue = 25;
    }else if(array[4].level === 11 && array[4].elementIndex === 2){
        comboValue = 26;
    }else if(array[4].level === 11 && array[4].elementIndex === 3){
        comboValue = 27;
    }else if(array[4].level === 11 && array[4].elementIndex === 4){
        comboValue = 28;
    }else if(array[4].level === 12 && array[4].elementIndex === 1){
        comboValue = 29;
    }else if(array[4].level === 12 && array[4].elementIndex === 2){
        comboValue = 34;
    }else if(array[4].level === 12 && array[4].elementIndex === 3){
        comboValue = 31;
    }else if(array[4].level === 12 && array[4].elementIndex === 4){
        comboValue = 32;
    }else if(array[4].level === 13 && array[4].elementIndex === 1){
        comboValue = 33;
    }else if(array[4].level === 13 && array[4].elementIndex === 2){
        comboValue = 34;
    }else if(array[4].level === 13 && array[4].elementIndex === 3){
        comboValue = 35;
    }else if(array[4].level === 13 && array[4].elementIndex === 4){
        comboValue = 36;
      }
  }
  //assign value to flush
  function flushValueAssign(array){
    array.sort(compareByLevel);
    if (array[4].level === 6 && array[4].elementIndex === 1){
      comboValue = 37;
    }else if (array[4].level === 7 && array[4].elementIndex === 1){
      comboValue = 38;
    }else if (array[4].level === 8 && array[4].elementIndex === 1){
      comboValue = 39;
    }else if (array[4].level === 9 && array[4].elementIndex === 1){
      comboValue = 40;
    }else if (array[4].level === 10 && array[4].elementIndex === 1){
      comboValue = 41;
    }else if (array[4].level === 11 && array[4].elementIndex === 1){
      comboValue = 42;
    }else if (array[4].level === 12 && array[4].elementIndex === 1){
      comboValue = 43;
    }else if (array[4].level === 13 && array[4].elementIndex === 1){
      comboValue = 44;
      console.log ("flush flag one");
    }else if (array[4].level === 6 && array[4].elementIndex === 2){
      comboValue = 45;
    }else if (array[4].level === 7 && array[4].elementIndex === 2){
      comboValue = 46;
    }else if (array[4].level === 8 && array[4].elementIndex === 2){
      comboValue = 47;
    }else if (array[4].level === 9 && array[4].elementIndex === 2){
      comboValue = 48;
    }else if (array[4].level === 10 && array[4].elementIndex === 2){
      comboValue = 49;
    }else if (array[4].level === 11 && array[4].elementIndex === 2){
      comboValue = 50;
    }else if (array[4].level === 12 && array[4].elementIndex === 2){
      comboValue = 51;
    }else if (array[4].level === 13 && array[4].elementIndex === 2){
      comboValue = 52;
      console.log ("flush flag two");
    }else if (array[4].level === 6 && array[4].elementIndex === 3){
      comboValue = 53;
    }else if (array[4].level === 7 && array[4].elementIndex === 3){
      comboValue = 54;
    }else if (array[4].level === 8 && array[4].elementIndex === 3){
      comboValue = 55;
    }else if (array[4].level === 9 && array[4].elementIndex === 3){
      comboValue = 56;
    }else if (array[4].level === 10 && array[4].elementIndex === 3){
      comboValue = 57;
    }else if (array[4].level === 11 && array[4].elementIndex === 3){
      comboValue = 58;
    }else if (array[4].level === 12 && array[4].elementIndex === 3){
      comboValue = 59;
    }else if (array[4].level === 13 && array[4].elementIndex === 3){
      comboValue = 60;
      console.log ("flush flag three");
    }else if (array[4].level === 6 && array[4].elementIndex === 4){
      comboValue = 61;
    }else if (array[4].level === 7 && array[4].elementIndex === 4){
      comboValue = 62;
    }else if (array[4].level === 8 && array[4].elementIndex === 4){
      comboValue = 63;
    }else if (array[4].level === 9 && array[4].elementIndex === 4){
      comboValue = 64;
    }else if (array[4].level === 10 && array[4].elementIndex === 4){
      comboValue = 65;
    }else if (array[4].level === 11 && array[4].elementIndex === 4){
      comboValue = 66;
    }else if (array[4].level === 12 && array[4].elementIndex === 4){
      comboValue = 67;
    }else if (array[4].level === 13 && array[4].elementIndex === 4){
      comboValue = 68;
      console.log ("flush flag four");
    }
  }

  //assign value to full house
  function fullHouseValueAssign(array){
    array.sort(compareByLevel);
    switch (array[2].level){
      case  1:
      comboValue = 69;
      break;
      case  2:
      comboValue = 70;
      break;
      case  3:
      comboValue = 71;
      break;
      case  4:
      comboValue = 72;
      break;
      case  5:
      comboValue = 73;
      break;
      case  6:
      comboValue = 74;
      break;
      case  7:
      comboValue = 75;
      break;
      case  8:
      comboValue = 76;
      break;
      case  9:
      comboValue = 77;
      break;
      case  10:
      comboValue = 78;
      break;
      case  11:
      comboValue = 79;
      break;
      case  12:
      comboValue = 80;
      break;
      case  13:
      comboValue = 81;
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
      break;
      case 2:
      comboValue = 83;
      break;
      case 3:
      comboValue = 84;
      break;
      case 4:
      comboValue = 85;
      break;
      case 5:
      comboValue = 86;
      break;
      case 6:
      comboValue = 87;
      break;
      case 7:
      comboValue = 88;
      break;
      case 8:
      comboValue = 89;
      break;
      case 9:
      comboValue = 90;
      break;
      case 10:
      comboValue = 91;
      break;
      case 11:
      comboValue = 92;
      break;
      case 12:
      comboValue = 93;
      break;
      case 13:
      comboValue = 94;
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
      } else if (array[4].level === 5 && array[4].elementIndex === 2){
      comboValue = 96;
      } else if (array[4].level === 5 && array[4].elementIndex === 3){
      comboValue = 97;
      } else if (array[4].level === 5 && array[4].elementIndex === 4){
      comboValue = 98;
      } else if (array[4].level === 6 && array[4].elementIndex === 1){
      comboValue = 99;
      } else if (array[4].level === 6 && array[4].elementIndex === 2){
      comboValue = 100;
      } else if (array[4].level === 6 && array[4].elementIndex === 3){
      comboValue = 101;
      } else if (array[4].level === 6 && array[4].elementIndex === 4){
      comboValue = 102;
      } else if (array[4].level === 7 && array[4].elementIndex === 1){
      comboValue = 103;
      } else if (array[4].level === 7 && array[4].elementIndex === 2){
      comboValue = 104;
      } else if (array[4].level === 7 && array[4].elementIndex === 3){
      comboValue = 105;
      } else if (array[4].level === 7 && array[4].elementIndex === 4){
      comboValue = 106;
      } else if (array[4].level === 8 && array[4].elementIndex === 1){
      comboValue = 107;
      } else if (array[4].level === 8 && array[4].elementIndex === 2){
      comboValue = 108;
      } else if (array[4].level === 8 && array[4].elementIndex === 3){
      comboValue = 109;
      } else if (array[4].level === 8 && array[4].elementIndex === 4){
      comboValue = 110;
      } else if (array[4].level === 9 && array[4].elementIndex === 1){
      comboValue = 111;
      } else if (array[4].level === 9 && array[4].elementIndex === 2){
      comboValue = 112;
      } else if (array[4].level === 9 && array[4].elementIndex === 3){
      comboValue = 113;
      } else if (array[4].level === 9 && array[4].elementIndex === 4){
      comboValue = 114;
      } else if (array[4].level === 10 && array[4].elementIndex === 1){
      comboValue = 115;
      } else if (array[4].level === 10 && array[4].elementIndex === 2){
      comboValue = 116;
      } else if (array[4].level === 10 && array[4].elementIndex === 3){
      comboValue = 117;
      } else if (array[4].level === 10 && array[4].elementIndex === 4){
      comboValue = 118;
      } else if (array[4].level === 11 && array[4].elementIndex === 1){
      comboValue = 119;
      } else if (array[4].level === 11 && array[4].elementIndex === 2){
      comboValue = 120;
      } else if (array[4].level === 11 && array[4].elementIndex === 3){
      comboValue = 121;
      } else if (array[4].level === 11 && array[4].elementIndex === 4){
      comboValue = 122;
      } else if (array[4].level === 12 && array[4].elementIndex === 1){
      comboValue = 123;
      } else if (array[4].level === 12 && array[4].elementIndex === 2){
      comboValue = 124;
      } else if (array[4].level === 12 && array[4].elementIndex === 3){
      comboValue = 125;
      } else if (array[4].level === 12 && array[4].elementIndex === 4){
      comboValue = 126;
      } else if (array[4].level === 13 && array[4].elementIndex === 1){
      comboValue = 127;
      } else if (array[4].level === 13 && array[4].elementIndex === 2){
      comboValue = 128;
      } else if (array[4].level === 13 && array[4].elementIndex === 3){
      comboValue = 129;
      } else if (array[4].level === 13 && array[4].elementIndex === 4){
      comboValue = 130;
      }
  }

  //PART FIVE
  //THESE FUNCTIONS ARE WHERE WE DEFINE IF THE CURRENT MOVE IS VALID (I.E., HIGHER THAN THE LAST ONE PLAYED)

  //check if hand played matches ComboNumber of hand previously played
  function doesHandMatchComboNumber(){
    console.log(`Combo number = ${comboNumber}: checking for matching combo number!`)
    if (setComboNumber === undefined) {
      return true;
    } else if (setComboNumber === ComboNumber) {
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
    } else if (setComboValue < ComboValue) {
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

  //PART SIX
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
  allBuildToDeck();
  endTurn();
  })
  }
    sayZimi();


  //close runOfTurn function
};

//close jQuery ready function
});
