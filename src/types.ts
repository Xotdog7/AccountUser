import { ReactChild, ReactNode } from "react";

export interface Movie {
  id: number;
  title: string | undefined;
  description: string | undefined;
  duration: number | undefined;
  image: string | undefined;
  favorite?: boolean;
}

export interface Actor {
  id: number;
  name: string;
  dateOfBirth: string;
  film: string;
  question: string;
  answer: string;
}

export interface User {
  login?: string;
  firstname?: string;
  lastname?: string;
  avatar?: string;
}

export interface PropsChildren {
  children: ReactNode;
}
