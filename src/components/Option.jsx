import "../css/main.css";
const state = [];
let score = 0;
function scoreResult() {
  const right = state.filter((value) => {
    return value.isCorrect == true;
  });
  return (score = right.length);
}
function Option(props) {
  function check(event) {

    if (event.target.className == "letter") {
      if (event.target.id == event.target.innerHTML) {
        let found = state.filter((obj) => {
          return obj.id == props.index;
        });
        if (!found) {
          const questionChecker = {
            id: props.index,
            isCorrect: true,
          };
          state.push(questionChecker);
        } else {
          const questionChecker = {
            id: props.index,
            isCorrect: true,
          };
          const newArray = state.filter((item) => {
            return item.id != props.index;
          });
          state.length = 0;
          newArray.map((value) => {
            state.push(value);
          });
          state.push(questionChecker);
        }
      } else {
        let found = state.filter((obj) => {
          return obj.id == props.index;
        });
        if (!found) {
          const questionChecker = {
            id: props.index,
            isCorrect: false,
          };
          state.push(questionChecker);
        } else {
          const questionChecker = {
            id: props.index,
            isCorrect: false,
          };
          const newArray = state.filter((item) => {
            return item.id != props.index;
          });
          state.length = 0;
          newArray.map((value) => {
            state.push(value);
          });
          state.push(questionChecker);
        }
      }
    } else {
      if (
        event.target.parentElement.children[0].id ==
        event.target.parentElement.children[0].innerHTML
      ) {
        let found = state.filter((obj) => {
          return obj.id == props.index;
        });
        if (!found) {
          const questionChecker = {
            id: props.index,
            isCorrect: true,
          };
          state.push(questionChecker);
        } else {
          const questionChecker = {
            id: props.index,
            isCorrect: true,
          };
          const newArray = state.filter((item) => {
            return item.id != props.index;
          });
          state.length = 0;
          newArray.map((value) => {
            state.push(value);
          });
          state.push(questionChecker);
        }
      } else {
        let found = state.filter((obj) => {
          return obj.id == props.index;
        });
        if (!found) {
          const questionChecker = {
            id: props.index,
            isCorrect: false,
          };
          state.push(questionChecker);
        } else {
          const questionChecker = {
            id: props.index,
            isCorrect: false,
          };
          const newArray = state.filter((item) => {
            return item.id != props.index;
          });
          state.length = 0;
          newArray.map((value) => {
            state.push(value);
          });
          state.push(questionChecker);
        }
      }
    }
  }
  let output = 0;

  if (props.option == "score") {
    output = scoreResult();
  }

  return (
    <>
      {props.option != "score" ? (
        <div
          className="Option"
          onClick={(event) => {
            check(event);
          }}
        >
          <span className="letter" value={props.option} id={props.id}>
            {props.option}
          </span>{" "}
          <span className="answer">{props.answer}</span>
        </div>
      ) : (
        <div className="Options">
          <span>SCORE:</span>{" "}
          <span>
            {output}/{props.total}
          </span>
        </div>
      )}
    </>
  );
}
export default Option;
