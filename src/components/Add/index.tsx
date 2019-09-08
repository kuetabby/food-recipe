import React from "react";

import {
  AddButton,
  SubmitButton,
  Row,
  BoxControl,
  GroupControl,
  LabelControl,
  InputControl,
  AreaControl
} from "./styles";

import { Modal, ModalContent, ModalClose } from "styled/modal-styles";

interface AddProps {
  title: string;
  ingredients: string;
  img: string;
  visible: boolean;
  isDisabled: boolean;
  onChangeVisible: () => void;
  onChangeState: (e: React.SyntheticEvent) => void;
  onCreate: () => void;
}

function App({
  title,
  ingredients,
  img,
  visible,
  isDisabled,
  onChangeVisible,
  onChangeState,
  onCreate
}: AddProps) {
  return (
    <>
      <AddButton onClick={onChangeVisible} />
      <Modal style={{ display: visible ? `block` : `none` }}>
        <ModalContent>
          <ModalClose onClick={onChangeVisible}>&times;</ModalClose>
          <Row>
            <BoxControl>
              <GroupControl>
                <LabelControl label="title">Name:</LabelControl>
                <InputControl
                  id="title"
                  type="text"
                  placeholder="Isi Nama Recipe"
                  value={title}
                  onChange={onChangeState}
                />
              </GroupControl>
            </BoxControl>
            <BoxControl>
              <GroupControl>
                <LabelControl label="ingredients">Ingredients:</LabelControl>
                <AreaControl
                  id="ingredients"
                  type="text"
                  placeholder="Isi Ingredients"
                  value={ingredients}
                  onChange={onChangeState}
                />
              </GroupControl>
            </BoxControl>
            <BoxControl>
              <GroupControl>
                <LabelControl label="img">Image Url:</LabelControl>
                <InputControl
                  id="img"
                  type="text"
                  placeholder="Isi Image URL (Optional)"
                  value={img}
                  onChange={onChangeState}
                />
              </GroupControl>
            </BoxControl>
            <SubmitButton
              onClick={onCreate}
              label="submit recipe"
              disabled={isDisabled}
            />
          </Row>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
