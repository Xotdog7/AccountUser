import React, { FC } from "react";
import { Actor } from "../../../types";
import ActorItem from "../actorItem/ActorItem";
import style from "../Content.module.scss";

type Props = {
  actors: Actor[];
};
const ActorList: FC<Props> = ({ actors }) => {
  return (
    <div>
      <div className={style.itemsRow}>
        {actors.map((actor) => (
          <ActorItem key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default ActorList;
