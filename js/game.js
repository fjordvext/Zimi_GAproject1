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
  thumbnail: "./image/c1thumb.png",
  },
  {
  name: "Pho",
  level: 1,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w1thumb.png",
  },
  {
  name: "Pho",
  level: 1,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p1thumb.png",
  },
  {
  name: "Pho",
  level: 1,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m1thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c2thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w2thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p2thumb.png",
  },
  {
  name: "Smenno",
  level: 2,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m2thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c3thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w3thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p3thumb.png",
  },
  {
  name: "Bello",
  level: 3,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m3thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c4thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w4thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p4thumb.png",
  },
  {
  name: "Sitava",
  level: 4,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m4thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail: "./image/c5thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w5thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p5thumb.png",
  },
  {
  name: "Xyve",
  level: 5,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m5thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail: "./image/c6thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w6thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p6thumb.png",
  },
  {
  name: "Chomd",
  level: 6,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m6thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c7thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w7thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p7thumb.png",
  },
  {
  name: "Yilanil",
  level: 7,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m7thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c8thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w8thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p8thumb.png",
  },
  {
  name: "Ragamorf",
  level: 8,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m8thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c9thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w9thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p9thumb.png",
  },
  {
  name: "Feyrlon",
  level: 9,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m9thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c10thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w10thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p10thumb.png",
  },
  {
  name: "Klapmyff",
  level: 10,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m10thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c11thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w11thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p11thumb.png",
  },
  {
  name: "Deftrix",
  level: 11,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m11thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c12thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w12thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p12thumb.png",
  },
  {
  name: "Limenister",
  level: 12,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m12thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Crystal",
  elementIndex: 1,
  image: "",
  thumbnail:  "./image/c13thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Wind",
  elementIndex: 2,
  image: "",
  thumbnail: "./image/w13thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Poison",
  elementIndex: 3,
  image: "",
  thumbnail: "./image/p13thumb.png",
  },
  {
  name: "Ultrachrin",
  level: 13,
  element: "Magic",
  elementIndex: 4,
  image: "",
  thumbnail: "./image/m13thumb.png",
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
  // for (i=0; i < deck1.length; i++){
  //   $(`#${i}`).html(`<img = ${deck1[i].thumbnail}></img>`);
  // }

  //establish build arrays
  let build1 = [];
  let build2 =[];

  //select card function
  function selectCard(){

  };
  //drag card function
  function dragCard(){

  };
  //card out of deck area function

  //card into build area function

  //check for pair

  //check for triple

  //check for straight

  //check for straight flush

  //check for flush

  //check for full house

  //check for four of a kind

  //check if hand is valid

  //say Zimi

  //play hand

  //find highest card in hand

  //remove card from build

  //return entire build to deck

  //close startgame function


//close jQuery ready function
});
