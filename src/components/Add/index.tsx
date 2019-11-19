import React, { Fragment } from "react";

import { Modal } from "antd";

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

import { ModalContent } from "styled/modal-styles";

interface AddProps {
  title: string;
  ingredients: string;
  img: string;
  visible: boolean;
  isDisabled: boolean;
  isLoadingRecipe: boolean;
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
  isLoadingRecipe,
  onChangeVisible,
  onChangeState,
  onCreate
}: AddProps) {
  return (
    <Fragment>
      <AddButton onClick={onChangeVisible} />
      <Modal visible={visible} onCancel={onChangeVisible} footer={null}>
        <ModalContent>
          <Row>
            <BoxControl>
              <GroupControl>
                <LabelControl label="title">Name:</LabelControl>
                <InputControl
                  id="title"
                  type="text"
                  placeholder="Submit Name Recipe"
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
                  placeholder="Submit Ingredients"
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
                  placeholder="Submit Image Url"
                  value={img}
                  onChange={onChangeState}
                />
              </GroupControl>
            </BoxControl>
            <SubmitButton
              onClick={onCreate}
              label="Submit"
              loading={isLoadingRecipe}
              disabled={isDisabled}
            />
          </Row>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default App;
