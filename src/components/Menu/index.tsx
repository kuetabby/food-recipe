import React, { Fragment } from "react";

import { Row } from "./styles";

import Card from "./Card";
import Spinner from "custom/Spinner";

interface DataParam {
  id: number;
  title: string;
  ingredients: string;
  img: string;
}

interface MenuProps {
  data_recipe: DataParam[];
  isLoadingRecipe: boolean;
  onHandleVisible: () => void;
}

function App({ data_recipe, isLoadingRecipe, onHandleVisible }: MenuProps) {
  return (
    <Fragment>
      <Row align="center">
        {isLoadingRecipe ? (
          <Spinner />
        ) : (
          data_recipe &&
          data_recipe.map(val => (
            <Fragment key={val.id}>
              <Card
                img={val.img}
                title={val.title}
                onHandleVisible={onHandleVisible}
              />
            </Fragment>
          ))
        )}
      </Row>
    </Fragment>
  );
}

export default App;
