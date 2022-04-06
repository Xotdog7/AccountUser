import React, { ChangeEvent, FC, useState } from "react";
import { Actor } from "../../../../types";
import { StyleAnswer, StyleBorder, StyleInput } from "./Question.style";

type Props = {
  actor: Actor;
};
const QuestionActor: FC<Props> = ({ actor }) => {
  const [review, setReview] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReview(event.currentTarget.value);
  };
  return (
    <div>
      <StyleBorder>
        <h3>Вопрос</h3>
        <span>{actor.question}</span>
        <StyleAnswer
          answer={
            review.toLowerCase() === actor.answer.toLowerCase() ? true : false
          }
          padBottom="10px"
        >
          {review.toLowerCase() === actor.answer.toLowerCase()
            ? "Правильно"
            : "Неправильно"}
        </StyleAnswer>
        <StyleInput
          color="#AF4425"
          background=""
          value={review}
          onChange={onChange}
        />
      </StyleBorder>
    </div>
  );
};

export default QuestionActor;
