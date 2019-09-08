import React, { Fragment } from "react";

import {
  CardWrapper,
  CardButton,
  Title,
  Row,
  ColHalf,
  Footer,
  ParagraphControl,
  AreaControl,
  InputControl,
  TitleControl,
  ImgControl
} from "./styles";
import { Modal, ModalContent, ModalClose } from "styled/modal-styles";

interface CardProps {
  img: string;
  title: string;
  ingredients: string;
  id: number;
  isRead: boolean;
  visible: boolean;
  onHandleVisible: () => void;
  onHandleRead: () => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  img,
  ingredients,
  id,
  isRead,
  visible,
  onHandleVisible,
  onHandleRead,
  onDelete
}) => {
  return (
    <Fragment>
      <CardWrapper>
        <img alt="makanan" width="100%" height="auto" src={img} />
        <ParagraphControl>{title}</ParagraphControl>
        <CardButton onClick={onHandleVisible}>Open Recipe</CardButton>
      </CardWrapper>
      <Modal style={{ display: visible ? `block` : `none` }}>
        <ModalContent>
          <ModalClose color="white" onClick={onHandleVisible}>
            &times;
          </ModalClose>
          <Title>
            <TitleControl id="title" value={title} readOnly={isRead} />
          </Title>
          <Row content="center" align="center" top="1em">
            <ColHalf>
              <h3>Ingredients:</h3>
              <AreaControl
                readOnly={isRead}
                id="ingredients"
                value={ingredients}
              />
            </ColHalf>
            <ColHalf>
              <ImgControl>
                <img alt="makanan" width="70%" src={img} />
              </ImgControl>
              {isRead ? null : <InputControl id="img" value={img} />}
            </ColHalf>
          </Row>
          <Footer>
            <CardButton color="#F44336" onClick={() => onDelete(id)}>
              Delete
            </CardButton>
            <CardButton marginLeft="1em" onClick={onHandleRead}>
              Edit
            </CardButton>
          </Footer>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Card;
