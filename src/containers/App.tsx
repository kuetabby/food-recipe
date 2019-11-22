import React, { useState, useEffect } from "react";

import { NavWrapper, NavBar } from "styled/nav-styles";

import Menu from "components/Menu";
import Add from "components/Add";

interface DataDefinition {
  id: number;
  title: string;
  ingredients: string;
  img: string;
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

function App() {
  const [{ title, ingredients, img }, setState] = useState<InputDefinition>(
    initialState
  );

  const [data_recipe, setDataRecipe] = useState<DataDefinition[]>([]);

  const [visible_add, setVisibleAdd] = useState<boolean>(false);
  const [visible_detail, setVisibleDetail] = useState<boolean>(false);

  const [isDisabled_add, setDisabled_add] = useState<boolean>(false);
  const [isDisabled_update, setDisabled_update] = useState<boolean>(false);

  const [id_detail, setIdDetail] = useState<number>(0);

  const [isLoadingRecipe, setLoadingRecipe] = useState<boolean>(false);
  const [isLoadingRecipeAdd, setLoadingRecipeAdd] = useState<boolean>(false);
  const [isLoadingRecipeUpdate, setLoadingRecipeUpdate] = useState<boolean>(
    false
  );
  const [isLoadingRecipeDelete, setLoadingRecipeDelete] = useState<boolean>(
    false
  );

  // const [isRerender, setRerender] = useState<number>(0);

  useEffect(() => {
    if (!title) {
      return setDisabled_add(true);
    }
    if (!ingredients) {
      return setDisabled_add(true);
    }
    if (!img) {
      return setDisabled_add(true);
    }
    return setDisabled_add(false);
  }, [title, ingredients, img]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchData();
    }, 100);
    return () => clearTimeout(timeOut);
  }, []);

  const fetchData = async () => {
    setLoadingRecipe(true);
    try {
      const fetching = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/foods/recipe`
      );
      const json = await fetching.json();
      const result = await json.data;
      setDataRecipe(result);
      setLoadingRecipe(false);
      return result;
    } catch (error) {
      setLoadingRecipe(false);
    }
  };

  const handleChangeState = (e: any) => {
    const { id, value } = e.target;
    setState(prevState => ({ ...prevState, [id]: value }));
  };

  const handleVisibleAdd = () => {
    setVisibleAdd(!visible_add);
  };

  const handleVisibleDetailOpen = (e: any) => {
    const { id } = e.target;
    setVisibleDetail(!visible_detail);
    setIdDetail(id);
  };

  const handleVisibleDetailClose = () => {
    setVisibleDetail(false);
    setIdDetail(0);
  };

  const createRecipe = async () => {
    const DataJSON: string = JSON.stringify({
      title,
      ingredients,
      img
    });

    setLoadingRecipeAdd(true);
    try {
      const posting = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/foods/recipe`,
        {
          method: "post",
          body: DataJSON,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await posting.json();
      const result = await json.data;
      setLoadingRecipeAdd(false);
      setDataRecipe(result);
      setState({ ...initialState });
      setVisibleAdd(!visible_add);
      return result;
    } catch (error) {
      setLoadingRecipeAdd(false);
    }
  };

  const deleteRecipe = async (id_recipe: number) => {
    setLoadingRecipeDelete(true);
    try {
      const posting = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/foods/recipe/${id_recipe}`,
        {
          method: "delete"
        }
      );
      const json = await posting.json();
      const result = await json.data;
      setLoadingRecipeDelete(false);
      setDataRecipe(result);
      // setRerender(Date.now());
      handleVisibleDetailClose();
      return result;
    } catch (error) {
      setLoadingRecipeDelete(false);
    }
  };

  return (
    <div style={{ height: "100%", margin: "1em" }}>
      <NavWrapper>
        <NavBar>
          <h1 style={{ color: "white" }}>Food Recipe</h1>
          <Add
            title={title}
            ingredients={ingredients}
            img={img}
            visible={visible_add}
            isDisabled={isDisabled_add}
            isLoadingRecipe={isLoadingRecipeAdd}
            onChangeVisible={handleVisibleAdd}
            onChangeState={handleChangeState}
            onCreate={createRecipe}
          />
        </NavBar>
      </NavWrapper>
      <Menu
        data_recipe={data_recipe}
        visible_detail={visible_detail}
        id_detail={id_detail}
        isLoadingRecipe={isLoadingRecipe}
        isLoadingRecipeDelete={isLoadingRecipeDelete}
        handleVisibleDetailOpen={handleVisibleDetailOpen}
        handleVisibleDetailClose={handleVisibleDetailClose}
        onDelete={deleteRecipe}
      />
    </div>
  );
}

export default App;
