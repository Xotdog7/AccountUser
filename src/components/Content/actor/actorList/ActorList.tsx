import React, { FC, useEffect, useState } from "react";
import { Actor } from "../../../../types";
import ActorItem from "../actorItem/ActorItem";
import style from "../../Content.module.scss";
import { StyleButton } from "../../moviesList/movieItem/MovieButton.style";

type Props = {
  actors: Actor[];
};
const ActorList: FC<Props> = ({ actors }) => {
  const [index, indexState] = useState<number>(0);

  useEffect(() => {
    if (index > actors.length - 1) {
      indexState(0);
    } else if (index < 0) {
      indexState(actors.length - 1);
    }
  }, [index]);

  const actor = actors
    .slice(0 + index, 3 + index)
    .map((actor) => <ActorItem key={actor.objectID} actor={actor} />);

  return (
    <div>
      <div>
        <h3>Home Work 6. Worked with useEffect and Axios</h3>
        <span>Done slide</span>
      </div>

      <div className={style.movieRow}>
        <StyleButton
          selected={true}
          background="#ebdcb2"
          border=""
          onClick={() => {
            indexState(index - 1);
          }}
        >
          Last
        </StyleButton>
        <div className={style.itemsRow}>{actor}</div>
        <StyleButton
          selected={true}
          background="#ebdcb2"
          border=""
          onClick={() => {
            indexState(index + 1);
          }}
        >
          Next
        </StyleButton>
      </div>
    </div>
  );
};

export default ActorList;
