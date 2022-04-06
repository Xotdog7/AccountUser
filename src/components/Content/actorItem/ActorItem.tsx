import React, { FC } from "react";
import { Actor } from "../../../types";
import style from "../Content.module.scss";
import InfoActor from "./InfoActor";
import QuestionActor from "./Question/QuestionActor";

type Props = {
  actor: Actor;
};

const ActorItem: FC<Props> = ({ actor }) => {
  return (
    <div className={style.item}>
      <InfoActor actor={actor} />
      <QuestionActor actor={actor} />
    </div>
  );
};

export default ActorItem;
