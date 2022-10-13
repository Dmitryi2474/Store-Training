import React from "react";
import "./Quiz.css";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ...",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

const Result = ({ correct }) => {
  return (
    <div className="result">
      <div className="result__wrapper">
        <h2 className="result__title">вы отгадали {correct} из {questions.length}</h2>
        <a href="/">
        <button className="result__btn">попробовать снова</button>
        </a>
      </div>
    </div>
  );
};

const Game = ({ step, question, onClickVariant }) => {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <div className="quiz">
      <div className="quiz__wrapper">
        <div className="quiz__progress">
          <div
            style={{ width: `${percentage}%` }}
            className="quiz__progress-wrapper"
          ></div>
        </div>
        <h1 className="">{question.title}</h1>
        <ul className="quiz__list">
          {question.variants.map((text, index) => (
            <li
              className="quiz__item"
              onClick={() => onClickVariant(index)}
              key={text}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Quiz = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default Quiz;
