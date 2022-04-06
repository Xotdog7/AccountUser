import React, { FC } from "react";
import { Actor } from "../../../types";

type Props = {
  actor: Actor;
};

const InfoActor: FC<Props> = ({ actor }) => {
  return (
    <div>
      <span>{actor.name}</span>
      <span>{actor.dateOfBirth}</span>
      <span>Фильм: {actor.film} </span>
    </div>
  );
};

export default InfoActor;
