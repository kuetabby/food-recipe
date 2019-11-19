import React from "react";

import { Modal } from "antd";
import {
  CardButton,
  Row,
  ColHalf,
  Footer,
  AreaControl,
  InputControl,
  TitleControl,
  ImgControl
} from "./styles";
import { ModalContent, ModalClose } from "styled/modal-styles";

interface ModalProps {
  visible?: boolean;
  title?: string;
  isRead?: boolean;
  ingredients?: string;
  id?: number;
  img?: string;
  onDelete?: (id?: number) => void;
  onHandleRead?: () => void;
  onHandleVisible?: () => void;
}

const Detail: React.FC<ModalProps> = ({
  visible,
  title,
  id,
  isRead,
  img,
  ingredients,
  onDelete,
  onHandleRead,
  onHandleVisible
}) => {
  return (
    <Modal style={{ display: visible ? `block` : `none` }}>
      <ModalContent>
        <ModalClose color="white" onClick={onHandleVisible}>
          &times;
        </ModalClose>
        {/* <Title> */}
        <TitleControl id="title" value={title} readOnly={isRead} />
        {/* </Title> */}
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
          {/* <CardButton color="#F44336" onClick={() => onDelete(id)}>
            Delete
          </CardButton> */}
          <CardButton marginLeft="1em" onClick={onHandleRead}>
            Edit
          </CardButton>
        </Footer>
      </ModalContent>
    </Modal>
  );
};

export default Detail;
