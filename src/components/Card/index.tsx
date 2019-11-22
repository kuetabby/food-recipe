import React, { Fragment } from "react";

import { CardWrapper, CardButton, CardImg, ParagraphControl } from "./styles";

interface CardProps {
  title: string;
  img: string;
  id: number;
  handleVisibleDetailOpen: (e: any) => void;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  img,
  id,
  handleVisibleDetailOpen
}) => {
  return (
    <Fragment>
      <CardWrapper>
        <CardImg alt="makanan" loading="lazy" src={img} />
        <ParagraphControl>{title}</ParagraphControl>
        <CardButton
          id={id}
          onClick={handleVisibleDetailOpen}
          label="open recipe"
        >
          Open Recipe
        </CardButton>
      </CardWrapper>
    </Fragment>
  );
};

export default CardComponent;
