console.log ("javascript is working!")
//jQuery ready function
$(document).ready(function(){

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

  console.log (cards.length);

  //deck1 empty array here
  let deck1Unsorted = [];

  //deck2 empty array here
  let deck2Unsorted = [];

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

  //when game screen loads, cards are shuffled, deck of 17 cards is dealt to deck1 and deck2 arrays

  //shuffle cards
  shuffle(cards);

  //deal first seventeen cards of shuffled cards to deck1
  for (i=0; i < 17; i++) {
    deck1Unsorted.push(cards[i]);
  }
  //sort deck1
  let deck1 = deck1Unsorted.sort(compareByLevel);
  console.log(deck1.length);
  console.log(deck1);
  //deal next seventeen cards to deck2
  for (i=17; i < 34; i++) {
    deck2Unsorted.push(cards[i]);
  }
  let deck2 = deck2Unsorted.sort(compareByLevel);
  console.log(deck2.length);
  console.log(deck2);

  //map card divs to positions in array deck1
  for (i=0; i < deck1.length; i++){
    $(`#${i}`).html(`<img src= ${deck1[i].thumbnail}></img>`);
  }

  //establish build arrays
  let build1 = [];
  let build2 =[];

  //select card function
  function selectCard(){
    $(".card-area").mousedown(function(){
      console.log(`function for deck1[${this.id}] called!`)
    })
  };
selectCard();
  //drop card in deck area to reorder deck
  // // function dropReorder(){
  // //   $(".card-area").mouseup(function(){

  //   })
  // }


  //drag card function
  function dragCard(){

  };
  //card out of deck area function

  //card into build area function

  //find highest card in array
  function findHighest(array){
    array.sort(compareByLevel);
    return array[array.length - 1]
  }

  //assign value to single
  function singleValueAssign(array){
    switch (array[0]){
      case array[0].level === 1 && array[0].elementIndex === 1:
      let comboValue = 1;
      break;
      case array[0].level === 1 && array[0].elementIndex === 2:
      let comboValue = 2;
      break;
      case array[0].level === 1 && array[0].elementIndex === 3:
      let comboValue = 3;
      break;
      case array[0].level === 1 && array[0].elementIndex === 4:
      let comboValue = 4;
      break;
      case array[0].level === 2 && array[0].elementIndex === 1:
      let comboValue = 5;
      break;
      case array[0].level === 2 && array[0].elementIndex === 2:
      let comboValue = 6;
      break;
      case array[0].level === 2 && array[0].elementIndex === 3:
      let comboValue = 7;
      break;
      case array[0].level === 2 && array[0].elementIndex === 4:
      let comboValue = 8;
      break;
      case array[0].level === 3 && array[0].elementIndex === 1:
      let comboValue = 9;
      break;
      case array[0].level === 3 && array[0].elementIndex === 2:
      let comboValue = 10;
      break;
      case array[0].level === 3 && array[0].elementIndex === 3:
      let comboValue = 11;
      break;
      case array[0].level === 3 && array[0].elementIndex === 4:
      let comboValue = 12;
      break;
      case array[0].level === 4 && array[0].elementIndex === 1:
      let comboValue = 13;
      break;
      case array[0].level === 4 && array[0].elementIndex === 2:
      let comboValue = 14;
      break;
      case array[0].level === 4 && array[0].elementIndex === 3:
      let comboValue = 15;
      break;
      case array[0].level === 4 && array[0].elementIndex === 4:
      let comboValue = 16;
      break;
      case array[0].level === 5 && array[0].elementIndex === 1:
      let comboValue = 17;
      break;
      case array[0].level === 5 && array[0].elementIndex === 2:
      let comboValue = 18;
      break;
      case array[0].level === 5 && array[0].elementIndex === 3:
      let comboValue = 19;
      break;
      case array[0].level === 5 && array[0].elementIndex === 4:
      let comboValue = 20;
      break;
      case array[0].level === 6 && array[0].elementIndex === 1:
      let comboValue = 21;
      break;
      case array[0].level === 6 && array[0].elementIndex === 2:
      let comboValue = 22;
      break;
      case array[0].level === 6 && array[0].elementIndex === 3:
      let comboValue = 23;
      break;
      case array[0].level === 6 && array[0].elementIndex === 4:
      let comboValue = 24;
      break;
      case array[0].level === 7 && array[0].elementIndex === 1:
      let comboValue = 25;
      break;
      case array[0].level === 7 && array[0].elementIndex === 2:
      let comboValue = 26;
      break;
      case array[0].level === 7 && array[0].elementIndex === 3:
      let comboValue = 27;
      break;
      case array[0].level === 7 && array[0].elementIndex === 4:
      let comboValue = 28;
      break;
      case array[0].level === 8 && array[0].elementIndex === 1:
      let comboValue = 29;
      break;
      case array[0].level === 8 && array[0].elementIndex === 2:
      let comboValue = 30;
      break;
      case array[0].level === 8 && array[0].elementIndex === 3:
      let comboValue = 31;
      break;
      case array[0].level === 8 && array[0].elementIndex === 4:
      let comboValue = 32;
      break;
      case array[0].level === 9 && array[0].elementIndex === 1:
      let comboValue = 33;
      break;
      case array[0].level === 9 && array[0].elementIndex === 2:
      let comboValue = 34;
      break;
      case array[0].level === 9 && array[0].elementIndex === 3:
      let comboValue = 35;
      break;
      case array[0].level === 9 && array[0].elementIndex === 4:
      let comboValue = 36;
      break;
      case array[0].level === 10 && array[0].elementIndex === 1:
      let comboValue = 37;
      break;
      case array[0].level === 10 && array[0].elementIndex === 2:
      let comboValue = 38;
      break;
      case array[0].level === 10 && array[0].elementIndex === 3:
      let comboValue = 39;
      break;
      case array[0].level === 10 && array[0].elementIndex === 4:
      let comboValue = 40;
      break;
      case array[0].level === 11 && array[0].elementIndex === 1:
      let comboValue = 41;
      break;
      case array[0].level === 11 && array[0].elementIndex === 2:
      let comboValue = 42;
      break;
      case array[0].level === 11 && array[0].elementIndex === 3:
      let comboValue = 43;
      break;
      case array[0].level === 11 && array[0].elementIndex === 4:
      let comboValue = 44;
      break;
      case array[0].level === 12 && array[0].elementIndex === 1:
      let comboValue = 45;
      break;
      case array[0].level === 12 && array[0].elementIndex === 2:
      let comboValue = 46;
      break;
      case array[0].level === 12 && array[0].elementIndex === 3:
      let comboValue = 47;
      break;
      case array[0].level === 12 && array[0].elementIndex === 4:
      let comboValue = 48;
      break;
      case array[0].level === 13 && array[0].elementIndex === 1:
      let comboValue = 49;
      break;
      case array[0].level === 13 && array[0].elementIndex === 2:
      let comboValue = 50;
      break;
      case array[0].level === 13 && array[0].elementIndex === 3:
      let comboValue = 51;
      break;
      case array[0].level === 13 && array[0].elementIndex === 4:
      let comboValue = 52;
      break;
      default :
      alert("something went screwy");
    }
  }

  //assign value to pair
  function pairValueAssign(array){
    array.sort(compareByLevel);
    switch (array[1]) {
      case array[1].level === 1 && array[1].elementIndex === 2:
      let comboValue = 1;
      break;
      case array[1].level === 1 && array[1].elementIndex === 3:
      let comboValue = 2;
      break;
      case array[1].level === 1 && array[1].elementIndex === 4:
      let comboValue = 3;
      break;
      case array[1].level === 2 && array[1].elementIndex === 2:
      let comboValue = 4;
      break;
      case array[1].level === 2 && array[1].elementIndex === 3:
      let comboValue = 5;
      break;
      case array[1].level === 2 && array[1].elementIndex === 4:
      let comboValue = 6;
      break;
      case array[1].level === 3 && array[1].elementIndex === 2:
      let comboValue = 7;
      break;
      case array[1].level === 3 && array[1].elementIndex === 3:
      let comboValue = 8;
      break;
      case array[1].level === 3 && array[1].elementIndex === 4:
      let comboValue = 9;
      break;
      case array[1].level === 4 && array[1].elementIndex === 2:
      let comboValue = 10;
      break;
      case array[1].level === 4 && array[1].elementIndex === 3:
      let comboValue = 11;
      break;
      case array[1].level === 4 && array[1].elementIndex === 4:
      let comboValue = 12;
      break;
      case array[1].level === 5 && array[1].elementIndex === 2:
      let comboValue = 13;
      break;
      case array[1].level === 5 && array[1].elementIndex === 3:
      let comboValue = 14;
      break;
      case array[1].level === 5 && array[1].elementIndex === 4:
      let comboValue = 15;
      break;
      case array[1].level === 6 && array[1].elementIndex === 2:
      let comboValue = 16;
      break;
      case array[1].level === 6 && array[1].elementIndex === 3:
      let comboValue = 17;
      break;
      case array[1].level === 6 && array[1].elementIndex === 4:
      let comboValue = 18;
      break;
      case array[1].level === 7 && array[1].elementIndex === 2:
      let comboValue = 19;
      break;
      case array[1].level === 7 && array[1].elementIndex === 3:
      let comboValue = 20;
      break;
      case array[1].level === 7 && array[1].elementIndex === 4:
      let comboValue = 21;
      break;
      case array[1].level === 8 && array[1].elementIndex === 2:
      let comboValue = 22;
      break;
      case array[1].level === 8 && array[1].elementIndex === 3:
      let comboValue = 23;
      break;
      case array[1].level === 8 && array[1].elementIndex === 4:
      let comboValue = 24;
      break;
      case array[1].level === 9 && array[1].elementIndex === 2:
      let comboValue = 25;
      break;
      case array[1].level === 9 && array[1].elementIndex === 3:
      let comboValue = 26;
      break;
      case array[1].level === 9 && array[1].elementIndex === 4:
      let comboValue = 27;
      break;
      case array[1].level === 10 && array[1].elementIndex === 2:
      let comboValue = 28;
      break;
      case array[1].level === 10 && array[1].elementIndex === 3:
      let comboValue = 29;
      break;
      case array[1].level === 10 && array[1].elementIndex === 4:
      let comboValue = 30;
      break;
      case array[1].level === 11 && array[1].elementIndex === 2:
      let comboValue = 31;
      break;
      case array[1].level === 11 && array[1].elementIndex === 3:
      let comboValue = 32;
      break;
      case array[1].level === 11 && array[1].elementIndex === 4:
      let comboValue = 33;
      break;
      case array[1].level === 12 && array[1].elementIndex === 2:
      let comboValue = 34;
      break;
      case array[1].level === 12 && array[1].elementIndex === 3:
      let comboValue = 35;
      break;
      case array[1].level === 12 && array[1].elementIndex === 4:
      let comboValue = 36;
      break;
      case array[1].level === 13 && array[1].elementIndex === 2:
      let comboValue = 37;
      break;
      case array[1].level === 13 && array[1].elementIndex === 3:
      let comboValue = 38;
      break;
      case array[1].level === 13 && array[1].elementIndex === 4:
      let comboValue = 39;
      break;
      default:
      alert("something went screwy");
    }
  }
  //assign value to triple
  function tripleValueAssign(array){
    array.sort(compareByLevel);
    switch (array[2]) {
      case array[2].level === 1 && array[2].elementIndex === 3:
      let comboValue = 1;
      break;
      case array[2].level === 1 && array[2].elementIndex === 4:
      let comboValue = 2;
      break;
      case array[2].level === 2 && array[2].elementIndex === 3:
      let comboValue = 3;
      break;
      case array[2].level === 2 && array[2].elementIndex === 4:
      let comboValue = 4;
      break;
      case array[2].level === 3 && array[2].elementIndex === 3:
      let comboValue = 5;
      break;
      case array[2].level === 3 && array[2].elementIndex === 4:
      let comboValue = 6;
      break;
      case array[2].level === 4 && array[2].elementIndex === 3:
      let comboValue = 7;
      break;
      case array[2].level === 4 && array[2].elementIndex === 4:
      let comboValue = 8;
      break;
      case array[2].level === 5 && array[2].elementIndex === 3:
      let comboValue = 9;
      break;
      case array[2].level === 5 && array[2].elementIndex === 4:
      let comboValue = 10;
      break;
      case array[2].level === 6 && array[2].elementIndex === 3:
      let comboValue = 11;
      break;
      case array[2].level === 6 && array[2].elementIndex === 4:
      let comboValue = 12;
      break;
      case array[2].level === 7 && array[2].elementIndex === 3:
      let comboValue = 13;
      break;
      case array[2].level === 7 && array[2].elementIndex === 4:
      let comboValue = 14;
      break;
      case array[2].level === 8 && array[2].elementIndex === 3:
      let comboValue = 15;
      break;
      case array[2].level === 8 && array[2].elementIndex === 4:
      let comboValue = 16;
      break;
      case array[2].level === 9 && array[2].elementIndex === 3:
      let comboValue = 17;
      break;
      case array[2].level === 9 && array[2].elementIndex === 4:
      let comboValue = 18;
      break;
      case array[2].level === 10 && array[2].elementIndex === 3:
      let comboValue = 19;
      break;
      case array[2].level === 10 && array[2].elementIndex === 4:
      let comboValue = 20;
      break;
      case array[2].level === 11 && array[2].elementIndex === 3:
      let comboValue = 21;
      break;
      case array[2].level === 11 && array[2].elementIndex === 4:
      let comboValue = 22;
      break;
      case array[2].level === 12 && array[2].elementIndex === 3:
      let comboValue = 23;
      break;
      case array[2].level === 12 && array[2].elementIndex === 4:
      let comboValue = 24;
      break;
      case array[2].level === 13 && array[2].elementIndex === 3:
      let comboValue = 25;
      break;
      case array[2].level === 13 && array[2].elementIndex === 4:
      let comboValue = 26;
      break;
      default:
      alert("something went screwy");
    }
  }

  //assign value to straight
  function straightValueAssign(array){
    array.sort(compareByLevel);
    switch (array[4]){
      case array[4].level === 5 && array[4].elementIndex === 1:
      let comboValue = 1;
      break;
      case array[4].level === 5 && array[4].elementIndex === 2:
      let comboValue = 2;
      break;
      case array[4].level === 5 && array[4].elementIndex === 3:
      let comboValue = 3;
      break;
      case array[4].level === 5 && array[4].elementIndex === 4:
      let comboValue = 4;
      break;
      case array[4].level === 6 && array[4].elementIndex === 1:
      let comboValue = 5;
      break;
      case array[4].level === 6 && array[4].elementIndex === 2:
      let comboValue = 6;
      break;
      case array[4].level === 6 && array[4].elementIndex === 3:
      let comboValue = 7;
      break;
      case array[4].level === 6 && array[4].elementIndex === 4:
      let comboValue = 8;
      break;
      case array[4].level === 7 && array[4].elementIndex === 1:
      let comboValue = 9;
      break;
      case array[4].level === 7 && array[4].elementIndex === 2:
      let comboValue = 14;
      break;
      case array[4].level === 7 && array[4].elementIndex === 3:
      let comboValue = 11;
      break;
      case array[4].level === 7 && array[4].elementIndex === 4:
      let comboValue = 12;
      break;
      case array[4].level === 8 && array[4].elementIndex === 1:
      let comboValue = 13;
      break;
      case array[4].level === 8 && array[4].elementIndex === 2:
      let comboValue = 14;
      break;
      case array[4].level === 8 && array[4].elementIndex === 3:
      let comboValue = 15;
      break;
      case array[4].level === 8 && array[4].elementIndex === 4:
      let comboValue = 16;
      break;
      case array[4].level === 9 && array[4].elementIndex === 1:
      let comboValue = 17;
      break;
      case array[4].level === 9 && array[4].elementIndex === 2:
      let comboValue = 18;
      break;
      case array[4].level === 9 && array[4].elementIndex === 3:
      let comboValue = 19;
      break;
      case array[4].level === 9 && array[4].elementIndex === 4:
      let comboValue = 24;
      break;
      case array[4].level === 10 && array[4].elementIndex === 1:
      let comboValue = 21;
      break;
      case array[4].level === 10 && array[4].elementIndex === 2:
      let comboValue = 22;
      break;
      case array[4].level === 10 && array[4].elementIndex === 3:
      let comboValue = 23;
      break;
      case array[4].level === 10 && array[4].elementIndex === 4:
      let comboValue = 24;
      break;
      case array[4].level === 11 && array[4].elementIndex === 1:
      let comboValue = 25;
      break;
      case array[4].level === 11 && array[4].elementIndex === 2:
      let comboValue = 26;
      break;
      case array[4].level === 11 && array[4].elementIndex === 3:
      let comboValue = 27;
      break;
      case array[4].level === 11 && array[4].elementIndex === 4:
      let comboValue = 28;
      break;
      case array[4].level === 12 && array[4].elementIndex === 1:
      let comboValue = 29;
      break;
      case array[4].level === 12 && array[4].elementIndex === 2:
      let comboValue = 34;
      break;
      case array[4].level === 12 && array[4].elementIndex === 3:
      let comboValue = 31;
      break;
      case array[4].level === 12 && array[4].elementIndex === 4:
      let comboValue = 32;
      break;
      case array[4].level === 13 && array[4].elementIndex === 1:
      let comboValue = 33;
      break;
      case array[4].level === 13 && array[4].elementIndex === 2:
      let comboValue = 34;
      break;
      case array[4].level === 13 && array[4].elementIndex === 3:
      let comboValue = 35;
      break;
      case array[4].level === 13 && array[4].elementIndex === 4:
      let comboValue = 36;
      break;
      default:
      alert("something went screwy");
    }
  }
  //assign value to flush
  function flushValueAssign(array){
    array.sort(compareByLevel);
    switch (array[4]){
      case array[4].level === 6 && array[4].elementIndex === 1:
      let comboValue = 37;
      break;
      case array[4].level === 7 && array[4].elementIndex === 1:
      let comboValue = 38;
      break;
      case array[4].level === 8 && array[4].elementIndex === 1:
      let comboValue = 39;
      break;
      case array[4].level === 9 && array[4].elementIndex === 1:
      let comboValue = 40;
      break;
      case array[4].level === 10 && array[4].elementIndex === 1:
      let comboValue = 41;
      break;
      case array[4].level === 11 && array[4].elementIndex === 1:
      let comboValue = 42;
      break;
      case array[4].level === 12 && array[4].elementIndex === 1:
      let comboValue = 43;
      break;
      case array[4].level === 13 && array[4].elementIndex === 1:
      let comboValue = 44;
      break;
      case array[4].level === 6 && array[4].elementIndex === 2:
      let comboValue = 45;
      break;
      case array[4].level === 7 && array[4].elementIndex === 2:
      let comboValue = 46;
      break;
      case array[4].level === 8 && array[4].elementIndex === 2:
      let comboValue = 47;
      break;
      case array[4].level === 9 && array[4].elementIndex === 2:
      let comboValue = 48;
      break;
      case array[4].level === 10 && array[4].elementIndex === 2:
      let comboValue = 49;
      break;
      case array[4].level === 11 && array[4].elementIndex === 2:
      let comboValue = 50;
      break;
      case array[4].level === 12 && array[4].elementIndex === 2:
      let comboValue = 51;
      break;
      case array[4].level === 13 && array[4].elementIndex === 2:
      let comboValue = 52;
      break;
      case array[4].level === 6 && array[4].elementIndex === 3:
      let comboValue = 53;
      break;
      case array[4].level === 7 && array[4].elementIndex === 3:
      let comboValue = 54;
      break;
      case array[4].level === 8 && array[4].elementIndex === 3:
      let comboValue = 55;
      break;
      case array[4].level === 9 && array[4].elementIndex === 3:
      let comboValue = 56;
      break;
      case array[4].level === 10 && array[4].elementIndex === 3:
      let comboValue = 57;
      break;
      case array[4].level === 11 && array[4].elementIndex === 3:
      let comboValue = 58;
      break;
      case array[4].level === 12 && array[4].elementIndex === 3:
      let comboValue = 59;
      break;
      case array[4].level === 13 && array[4].elementIndex === 3:
      let comboValue = 60;
      break;
      case array[4].level === 6 && array[4].elementIndex === 4:
      let comboValue = 61;
      break;
      case array[4].level === 7 && array[4].elementIndex === 4:
      let comboValue = 62;
      break;
      case array[4].level === 8 && array[4].elementIndex === 4:
      let comboValue = 63;
      break;
      case array[4].level === 9 && array[4].elementIndex === 4:
      let comboValue = 64;
      break;
      case array[4].level === 10 && array[4].elementIndex === 4:
      let comboValue = 65;
      break;
      case array[4].level === 11 && array[4].elementIndex === 4:
      let comboValue = 66;
      break;
      case array[4].level === 12 && array[4].elementIndex === 4:
      let comboValue = 67;
      break;
      case array[4].level === 13 && array[4].elementIndex === 4:
      let comboValue = 68;
      break;
      default:
      alert("something went screwy");
    }
  }

  //assign value to full house
  function fullHouseValueAssign(array){
    array.sort(compareByLevel);
    switch (array[2]){
      case array[2].level === 1:
      let comboValue = 69;
      break;
      case array[2].level === 2:
      let comboValue = 70;
      break;
      case array[2].level === 3:
      let comboValue = 71;
      break;
      case array[2].level === 4:
      let comboValue = 72;
      break;
      case array[2].level === 5:
      let comboValue = 73;
      break;
      case array[2].level === 6:
      let comboValue = 74;
      break;
      case array[2].level === 7:
      let comboValue = 75;
      break;
      case array[2].level === 8:
      let comboValue = 76;
      break;
      case array[2].level === 9:
      let comboValue = 77;
      break;
      case array[2].level === 10:
      let comboValue = 78;
      break;
      case array[2].level === 11:
      let comboValue = 79;
      break;
      case array[2].level === 12:
      let comboValue = 80;
      break;
      case array[2].level === 13:
      let comboValue = 81;
      break;
      default:
      alert("something went screwy");
    }
  }

  //assign value to four of a kind
  function fourOfAKindValueAssign(array){
    array.sort(compareByLevel);
    switch (array[2]){
      case array[2].level === 1:
      let comboValue = 82;
      break;
      case array[2].level === 2:
      let comboValue = 83;
      break;
      case array[2].level === 3:
      let comboValue = 84;
      break;
      case array[2].level === 4:
      let comboValue = 85;
      break;
      case array[2].level === 5:
      let comboValue = 86;
      break;
      case array[2].level === 6:
      let comboValue = 87;
      break;
      case array[2].level === 7:
      let comboValue = 88;
      break;
      case array[2].level === 8:
      let comboValue = 89;
      break;
      case array[2].level === 9:
      let comboValue = 90;
      break;
      case array[2].level === 10:
      let comboValue = 91;
      break;
      case array[2].level === 11:
      let comboValue = 92;
      break;
      case array[2].level === 12:
      let comboValue = 93;
      break;
      case array[2].level === 13:
      let comboValue = 94;
      break;
      default:
      alert("something went screwy");
    }
  }

  //assign value to straight flush
  function straightFlushValueAssign(array){
    array.sort(compareByLevel);
    switch (array[4]){
      case array[4].level === 5 && array[4].elementIndex === 1:
      let comboValue = 95;
      break;
      case array[4].level === 5 && array[4].elementIndex === 2:
      let comboValue = 96;
      break;
      case array[4].level === 5 && array[4].elementIndex === 3:
      let comboValue = 97;
      break;
      case array[4].level === 5 && array[4].elementIndex === 4:
      let comboValue = 98;
      break;
      case array[4].level === 6 && array[4].elementIndex === 1:
      let comboValue = 99;
      break;
      case array[4].level === 6 && array[4].elementIndex === 2:
      let comboValue = 100;
      break;
      case array[4].level === 6 && array[4].elementIndex === 3:
      let comboValue = 101;
      break;
      case array[4].level === 6 && array[4].elementIndex === 4:
      let comboValue = 102;
      break;
      case array[4].level === 7 && array[4].elementIndex === 1:
      let comboValue = 103;
      break;
      case array[4].level === 7 && array[4].elementIndex === 2:
      let comboValue = 104;
      break;
      case array[4].level === 7 && array[4].elementIndex === 3:
      let comboValue = 105;
      break;
      case array[4].level === 7 && array[4].elementIndex === 4:
      let comboValue = 106;
      break;
      case array[4].level === 8 && array[4].elementIndex === 1:
      let comboValue = 107;
      break;
      case array[4].level === 8 && array[4].elementIndex === 2:
      let comboValue = 108;
      break;
      case array[4].level === 8 && array[4].elementIndex === 3:
      let comboValue = 109;
      break;
      case array[4].level === 8 && array[4].elementIndex === 4:
      let comboValue = 110;
      break;
      case array[4].level === 9 && array[4].elementIndex === 1:
      let comboValue = 111;
      break;
      case array[4].level === 9 && array[4].elementIndex === 2:
      let comboValue = 112;
      break;
      case array[4].level === 9 && array[4].elementIndex === 3:
      let comboValue = 113;
      break;
      case array[4].level === 9 && array[4].elementIndex === 4:
      let comboValue = 114;
      break;
      case array[4].level === 10 && array[4].elementIndex === 1:
      let comboValue = 115;
      break;
      case array[4].level === 10 && array[4].elementIndex === 2:
      let comboValue = 116;
      break;
      case array[4].level === 10 && array[4].elementIndex === 3:
      let comboValue = 117;
      break;
      case array[4].level === 10 && array[4].elementIndex === 4:
      let comboValue = 118;
      break;
      case array[4].level === 11 && array[4].elementIndex === 1:
      let comboValue = 119;
      break;
      case array[4].level === 11 && array[4].elementIndex === 2:
      let comboValue = 120;
      break;
      case array[4].level === 11 && array[4].elementIndex === 3:
      let comboValue = 121;
      break;
      case array[4].level === 11 && array[4].elementIndex === 4:
      let comboValue = 122;
      break;
      case array[4].level === 12 && array[4].elementIndex === 1:
      let comboValue = 123;
      break;
      case array[4].level === 12 && array[4].elementIndex === 2:
      let comboValue = 124;
      break;
      case array[4].level === 12 && array[4].elementIndex === 3:
      let comboValue = 125;
      break;
      case array[4].level === 12 && array[4].elementIndex === 4:
      let comboValue = 126;
      break;
      case array[4].level === 13 && array[4].elementIndex === 1:
      let comboValue = 127;
      break;
      case array[4].level === 13 && array[4].elementIndex === 2:
      let comboValue = 128;
      break;
      case array[4].level === 13 && array[4].elementIndex === 3:
      let comboValue = 129;
      break;
      case array[4].level === 13 && array[4].elementIndex === 4:
      let comboValue = 130;
      break;
      default:
      alert("something went screwy");
    }
  }
  //check for pair
  // function checkForPair() {
  //   build1.sort(compareByLevel);
  //   build1[0].level === build1[1].level ? let comboType = "pair", let comboNumber = "2 Card", pairValueAssign(build1) : alert("Not a valid pair!")
  // }

  //check for triple

  //check for straight

  //check for straight flush

  //check for flush

  //check for full house

  //check for four of a kind

  //check if hand is valid

  //say Zimi

  //play hand


  //remove card from build

  //return entire build to deck

  //close startgame function


//close jQuery ready function
});
