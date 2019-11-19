import React, { Fragment } from "react";

import { CardWrapper, CardButton, CardImg, ParagraphControl } from "./styles";

interface CardProps {
  title: string;
  img: string;
  onHandleVisible: () => void;
}

const Card: React.FC<CardProps> = ({ title, img, onHandleVisible }) => {
  return (
    <Fragment>
      <CardWrapper>
        <CardImg alt="makanan" src={img} />
        <ParagraphControl>{title}</ParagraphControl>
        <CardButton onClick={onHandleVisible}>Open Recipe</CardButton>
      </CardWrapper>
    </Fragment>
  );
};

export default Card;
