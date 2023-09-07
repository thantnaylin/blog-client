import React from "react";
import { IParagraphProps } from "./interfaces";

export const Paragraph: React.FC<IParagraphProps> = props => {
  return (
    <>
      {props.title && <h1>{props.title}</h1>}
      {props.paragraphs.map(x => (
        <p>{x}</p>
      ))}
    </>
  );
};
