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

  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
  const [visibleUpdate, setVisibleUpdate] = useState<boolean>(false);

  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isRead, setRead] = useState<boolean>(true);

  const [isLoadingRecipe, setLoadingRecipe] = useState<boolean>(false);
  const [isLoadingRecipeAdd, setLoadingRecipeAdd] = useState<boolean>(false);

  const DataJSON = JSON.stringify({
    title,
    ingredients,
    img
  });

  useEffect(() => {
    if (!title) {
      return setDisabled(true);
    }
    if (!ingredients) {
      return setDisabled(true);
    }
    if (!img) {
      return setDisabled(true);
    }
    return setDisabled(false);
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
    setVisibleAdd(!visibleAdd);
  };

  const handleVisibleUpdate = () => {
    setVisibleUpdate(!visibleUpdate);
  };

  const handleReadOnly = () => {
    setRead(!isRead);
  };

  const createRecipe = async () => {
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
      setVisibleAdd(!visibleAdd);
      return result;
    } catch (error) {
      setLoadingRecipeAdd(false);
    }
  };

  // const deleteRecipe = (id: number) => {
  //   setVisibleUpdate(!visibleUpdate);
  //   setDataRecipe(data.filter(value => value.id !== id));
  // };

  return (
    <div style={{ height: "100vh", margin: "1em" }}>
      <NavWrapper>
        <NavBar>
          <h1>Food Recipe</h1>
          <Add
            title={title}
            ingredients={ingredients}
            img={img}
            visible={visibleAdd}
            isDisabled={isDisabled}
            isLoadingRecipe={isLoadingRecipeAdd}
            onChangeVisible={handleVisibleAdd}
            onChangeState={handleChangeState}
            onCreate={createRecipe}
          />
        </NavBar>
      </NavWrapper>
      <Menu
        data_recipe={data_recipe}
        isLoadingRecipe={isLoadingRecipe}
        onHandleVisible={handleVisibleUpdate}
      />
    </div>
  );
}

export default App;
