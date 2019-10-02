import React, { useState, useEffect } from "react";

import { NavWrapper, NavBar } from "styled/nav-styles";

import Recipe from "./Recipe";

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

  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
  const [visibleUpdate, setVisibleUpdate] = useState<boolean>(false);

  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isRead, setRead] = useState<boolean>(true);

  const [data, setData] = useState<DataDefinition[]>(Recipe);

  useEffect(() => {
    if (title === "") {
      return setDisabled(true);
    }
    if (ingredients === "") {
      return setDisabled(true);
    }
    return setDisabled(false);
  }, [title, ingredients]);

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

  const createRecipe = () => {
    let newData = {
      id: Date.now(),
      title,
      ingredients,
      img
    };

    setData([...data, newData]);
    setState({ ...initialState });
    setVisibleAdd(!visibleAdd);
  };

  const deleteRecipe = (id: number) => {
    setVisibleUpdate(!visibleUpdate);
    setData(data.filter(value => value.id !== id));
  };

  return (
    <div style={{ height: "100vh", margin: "1em" }}>
      <NavWrapper>
        <NavBar>
          <h1>Recipe Box</h1>
          <h2>Box Recipe</h2>
          <h1>Recipe Box</h1>
          <h2>Box Recipe</h2>
          <Add
            title={title}
            ingredients={ingredients}
            img={img}
            visible={visibleAdd}
            isDisabled={isDisabled}
            onChangeVisible={handleVisibleAdd}
            onChangeState={handleChangeState}
            onCreate={createRecipe}
          />
        </NavBar>
      </NavWrapper>
      <Menu
        data={data}
        isRead={isRead}
        visible={visibleUpdate}
        onDelete={deleteRecipe}
        onHandleVisible={handleVisibleUpdate}
        onHandleRead={handleReadOnly}
      />
    </div>
  );
}

export default App;
