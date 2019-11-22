import React, { Fragment } from "react";

import { Row } from "./styles";
import Spinner from "custom/Spinner";

import Card from "../Card";
import Detail from "../Detail";

interface DataParam {
  id: number;
  title: string;
  ingredients: string;
  img: string;
}

interface MenuProps {
  data_recipe: DataParam[];
  id_detail: number;
  visible_detail: boolean;
  isLoadingRecipe: boolean;
  isLoadingRecipeDelete: boolean;
  handleVisibleDetailOpen: (e: any) => void;
  handleVisibleDetailClose: () => void;
  onDelete: (e: any) => void;
}

function MenuComponent({
  data_recipe,
  visible_detail,
  id_detail,
  isLoadingRecipe,
  isLoadingRecipeDelete,
  handleVisibleDetailOpen,
  handleVisibleDetailClose,
  onDelete
}: MenuProps) {
  return (
    <Fragment>
      <Row align="center">
        {isLoadingRecipe ? (
          <Spinner />
        ) : (
          data_recipe &&
          data_recipe.map(({ id, img, title }) => (
            <Fragment key={id}>
              <Card
                img={img}
                id={id}
                title={title}
                handleVisibleDetailOpen={handleVisibleDetailOpen}
              />
            </Fragment>
          ))
        )}
      </Row>
      {visible_detail ? (
        <Detail
          id={id_detail}
          isLoadingRecipeDelete={isLoadingRecipeDelete}
          visible={visible_detail}
          onCancel={handleVisibleDetailClose}
          onDelete={onDelete}
        />
      ) : null}
    </Fragment>
  );
}

export default MenuComponent;
