import Question from "./Question.jsx";
import Option from "./Option.jsx";
import { useState } from "react";

const questions = [
  {
    q: " What is JavaScript?",
    correct: "a",
    options: {
      a: "JavaScript is a scripting language used to make the website interactive",
      b: "JavaScript is an assembly language used to make the website interactive",
      c: "JavaScript is a compiled language used to make the website interactive",
      d: "None of the mentioned",
    },
  },
  {
    q: "  Among the given statements, which statement defines closures in JavaScript?",
    correct: "b",
    options: {
      a: "JavaScript is a function that is enclosed with references to its inner function scope",
      b: "JavaScript is a function that is enclosed with references to its lexical environment",
      c: "JavaScript is a function that is enclosed with the object to its inner function scope",
      d: " None of the mentioned",
    },
  },
  {
    q: "Which of the following is correct about JavaScript?",
    correct: "a",
    options: {
      a: " JavaScript is an Object-Based language",
      b: " JavaScript is Assembly-language",
      c: "JavaScript is an Object-Oriented language",
      d: "JavaScript is a High-level language",
    },
  },
];

function Quiz() {
  //   const len = questions.length;
  const [number, setNumber] = useState("home");
  function startGame() {
    setNumber(0);
  }
  function prev() {
    if (number != 0) {
      setNumber(number - 1);
    }
  }

  function next() {
    let qLength = questions.length - 1;
    if (number != qLength) {
      setNumber(number + 1);
    } else if (number == qLength) {
      setNumber("score");
    }
  }
  return (
    <div className="Container">
      <div>
        {number == "home" ? (
          <div className="inner-Question-Wrapper3">
            <h1>WELCOME TO MEGA QUIZ-APP</h1>
            <button onClick={startGame}>CLICK TO START GAME</button>
          </div>
        ) :  number != "score" ? (
          <div className="inner-Question-Wrapper">
            <Question question={questions[number].q} />
            <Option
              option="a"
              answer={questions[number].options.a}
              id={questions[number].correct}
              index={number}
            />
            <Option
              option="b"
              answer={questions[number].options.b}
              id={questions[number].correct}
              index={number}
            />
            <Option
              option="c"
              answer={questions[number].options.c}
              id={questions[number].correct}
              index={number}
            />
            <Option
              option="d"
              answer={questions[number].options.d}
              id={questions[number].correct}
              index={number}
            />
          </div>
        ) : (
          <div className="inner-Question-Wrapper2">
            <Option option="score" total={questions.length} />
          </div>
        )}
        {number != "score" && number !="home" ? (
          <div className="Buttons">
            <button onClick={prev} label="Prev">
              Prev
            </button>
            <button onClick={next} label="Prev">
              Next
            </button>
          </div>
        ) : (
          ""
        )}
       
      </div>
    </div>
  );
}

export default Quiz;
