// 객체 선언
const quotes = [
  {
    quote:"Sport is imposing order on what was chaos.",
    author:"Anthony Starr",
  },
  {
    quote:"Nothing succeeds like the appearance of success.",
    author:"Christopher Lasch",
  },
  {
    quote:"Wanting to be someone else is a waste of the person you are.",
    author:"Kurt Cobain",
  },
  {
    quote:"The farther behind I leave the past, the closer I am to forging my own character.",
    author:"Isabelle Eberhardt",
  },
  {
    quote:"If women are expected to do the same work as men, we must teach them the same things.",
    author:"Plato",
  },
  {
    quote:"Glory is fleeting, but obscurity is forever.",
    author:"Napoleon Bonaparte",
  },
  {
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author:"Benjamin Franklin",
  },
  {
    quote:"The greatest griefs are those we cause ourselves.",
    author:"Sophocles",
  },
  {
    quote:"Curious things, habits. People themselves never knew they had them.",
    author:"Agatha Christie",
  },
  {
    quote:"Fortune can, for her pleasure, fools advance, And toss them on the wheels of Chance.",
    author:"Juvenal",
  }
];

const quote = document.querySelector("#quoute span:first-child");
const author = document.querySelector("#quoute span:last-child");

// 랜덤 숫자를 quotes 배열의 갯수만큼 곱함
const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

// 화면에 명언이랑 작가 랜덤 호출
quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;