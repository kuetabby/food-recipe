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

  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
  const [visibleUpdate, setVisibleUpdate] = useState<boolean>(false);

  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isRead, setRead] = useState<boolean>(true);

  const [data, setData] = useState<DataDefinition[]>([
    {
      id: 0,
      title: "Salsa verde",
      ingredients:
        "small pack tarragon\n\n2 small packs flat-leaf parsley\n\n30g wild garlic (or 2 garlic cloves)\n\n 3 tsp Dijon mustard\n\n 40g small capers, drained, rinsed and roughly chopped\n\n 200ml extra virgin olive oil\n\n 2 tbsp sherry vinegar",
      img:
        "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/04/salsa-verde-2.jpg?itok=R9-68UMh"
    },
    {
      id: 1,
      title: "Maple-mustard pulled pork",
      ingredients:
        "200g sea salt\n\n300g light muscovado sugar\n\n2kg/4lb 8oz piece pork shoulder\n\n100ml maple syrup\n\n100g wholegrain mustard\n\n2 tbsp English mustard powder\n\n",
      img:
        "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1119469_10.jpg?itok=2GIQyKfz"
    },
    {
      id: 2,
      title: "Salmon & spinach with tartare cream",
      ingredients:
        "1 tsp sunflower or vegetable oil\n\n 2 skinless salmon fillet\n\n 250g bag spinach\n\n 2 tbsp reduced-fat crème fraîche\n\njuice ½ lemon\n\n 1 tsp caper, \n\n 2 tbsp flat-leaf parsley, chopped\n\nlemon wedges, to serve",
      img:
        "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--52867_12.jpg?itok=pnLXWqFK"
    },
    {
      id: 3,
      title: "Spicy black bean tacos",
      ingredients:
        "1 tbsp vegetable oil\n\n3 garlic cloves, chopped\n\n3 x 400g cans black beans, drained and rinsed\n\n3 tbsp cider vinegar\n\n1 ½ tbsp honey\n\n1 ½ tbsp smoked paprika\n\n1 ½ tbsp ground cumin\n\n1 small garlic clove\n\n2 tbsp roughly chopped coriander\n\n1 green chilli, sliced\n\n2 avocados, halved and stoned\n\njuice 1 lime\n\n110g pack pomegranate seeds\n\n1 green chilli, finely diced\n\n1 small white onion, finely diced\n\nsmall handful fresh coriander, chopped",
      img:
        "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/spicy-black-bean-tacos.jpg?itok=RTBXRL7L"
    }
  ]);

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
