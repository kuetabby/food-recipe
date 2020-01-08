import React, { useState, useEffect, Fragment } from "react";
import { wrap } from "comlink";
import { Modal } from "antd";
import {
  CardButton,
  Row,
  ColHalf,
  Footer,
  AreaControl,
  InputControl,
  LabelControl,
  TitleControl,
  Title,
  ImgControl
} from "./styles";
import { ModalContent } from "styled/modal-styles";

import Spinner from "custom/Spinner";

interface ModalProps {
  id: number;
  visible: boolean;
  isLoadingRecipeDelete: boolean;
  onCancel: () => void;
  onDelete: (e: any) => void;
}

interface InputDefinition {
  title: string;
  ingredients: string;
  img: string;
}

const initialState = {
  title: "",
  ingredients: "",
  img: ""
};

const DetailComponent: React.FC<ModalProps> = ({
  visible,
  id,
  onCancel,
  isLoadingRecipeDelete,
  onDelete
}) => {
  const [{ ingredients, title, img }, setState] = useState<InputDefinition>(
    initialState
  );
  const [isLoadingRecipe, setLoadingRecipe] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchRecipe(id);
    }, 50);
    return () => clearTimeout(timeOut);
  }, [id]);

  const DataJSON: string = JSON.stringify({
    ingredients,
    img
  });

  const handleDisabled = () => {
    setDisabled(!isDisabled);
  };

  const handleStateChange = (e: React.SyntheticEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    setState(prevState => ({ ...prevState, [id]: value }));
  };

  const fetchRecipe = async (id_recipe: number) => {
    setLoadingRecipe(true);
    try {
      const worker = new Worker("worker.js");
      const service: any = wrap(worker);
      const result = await service(
        `${process.env.REACT_APP_SERVER_URL}/api/foods/recipe/${id_recipe}`
      );
      const { title, ingredients, img } = result;

      setLoadingRecipe(false);
      setState({
        title,
        ingredients,
        img
      });
    } catch (error) {
      setLoadingRecipe(false);
      console.log(error.message);
    }
  };

  const updateRecipe = async () => {
    setDisabled(true);
    setLoadingRecipe(true);
    try {
      const fetching = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/foods/recipe/${id}`,
        {
          method: "post",
          body: DataJSON,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await fetching.json();
      const result = await json.data;
      setLoadingRecipe(false);
      return result;
    } catch (error) {
      setLoadingRecipe(false);
      console.log(error.message);
    }
  };

  return (
    <Modal visible={visible} width={600} footer={null} onCancel={onCancel}>
      <ModalContent>
        {isLoadingRecipe ? (
          <Spinner />
        ) : (
          <Fragment>
            <Title>
              <TitleControl id="title">{title}</TitleControl>
            </Title>
            <Row content="space-between" top="1em">
              <ColHalf>
                <LabelControl htmlFor="ingredients">Ingredients</LabelControl>
                <AreaControl
                  id="ingredients"
                  value={ingredients}
                  onChange={handleStateChange}
                  readOnly={isDisabled}
                />
              </ColHalf>
              <ColHalf>
                {isDisabled ? (
                  <ImgControl alt="makanan" src={img} />
                ) : (
                  <Fragment>
                    <LabelControl htmlFor="img">Image</LabelControl>
                    <InputControl
                      id="img"
                      value={img}
                      onChange={handleStateChange}
                    />
                  </Fragment>
                )}
              </ColHalf>
            </Row>
            <Footer>
              {isDisabled ? (
                <CardButton onClick={handleDisabled}>Edit</CardButton>
              ) : (
                <CardButton onClick={updateRecipe}>Save</CardButton>
              )}
              <CardButton
                marginLeft="1em"
                color="#F44336"
                onClick={() => onDelete(id)}
              >
                {isLoadingRecipeDelete && "deleting..."}
                {!isLoadingRecipeDelete && "delete"}
              </CardButton>
            </Footer>
          </Fragment>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DetailComponent;
