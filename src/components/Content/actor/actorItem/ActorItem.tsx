import React, { FC } from "react";
import { Actor } from "../../../../types";
import style from "../../Content.module.scss";

type Props = {
  actor: Actor;
};

const ActorItem: FC<Props> = ({ actor }) => {
  const existName = !!actor.alternative_name ? actor.alternative_name : " - ";

  return (
    <div className={style.item}>
  <img src={actor.image_path} alt="" />
      <span>{actor.name}</span>
      <span>Рейтинг {actor.rating}</span>
      <span>Second name: {existName} </span>
    </div>
  );
};

export default ActorItem;
