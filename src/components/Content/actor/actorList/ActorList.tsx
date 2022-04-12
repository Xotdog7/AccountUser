import React, { FC } from "react";
import { Actor } from "../../../../types";
import ActorItem from "../actorItem/ActorItem";
import style from "../../Content.module.scss";

type Props = {
  actors: Actor[];
};
const ActorList: FC<Props> = ({ actors }) => {

  const actor = actors.map((actor) => (
    <ActorItem key={actor.objectID} actor={actor} />
  ))

  return (
    <div>
      <div className={style.itemsRow}>
        {actor}
      </div>
    </div>
  );
};

export default ActorList;
