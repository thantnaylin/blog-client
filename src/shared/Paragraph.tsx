import React from "react";
import { ParagraphProps } from "./interfaces";

export const Paragraph: React.FC<ParagraphProps> = props => {
  return (
    <>
      {props.title && <h1>{props.title}</h1>}
      {props.paragraphs.map(x => (
        <p>{x}</p>
      ))}
    </>
  );
};
