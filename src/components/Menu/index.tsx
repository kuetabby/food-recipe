import React, { Fragment } from "react";

import { Row } from "./styles";

import Card from "./Card";

interface DataParam {
  id: number;
  title: string;
  ingredients: string;
  img: string;
}

interface MenuProps {
  data: DataParam[];
  visible: boolean;
  isRead: boolean;
  onHandleVisible: () => void;
  onHandleRead: () => void;
  onDelete: (id: number) => void;
}

function App({
  data,
  visible,
  isRead,
  onHandleVisible,
  onHandleRead,
  onDelete
}: MenuProps) {
  return (
    <Fragment>
      <Row>
        {data.map(val => (
          <Fragment key={val.id}>
            <Card
              id={val.id}
              ingredients={val.ingredients}
              isRead={isRead}
              img={val.img}
              title={val.title}
              visible={visible}
              onHandleVisible={onHandleVisible}
              onHandleRead={onHandleRead}
              onDelete={onDelete}
            />
          </Fragment>
        ))}
      </Row>
    </Fragment>
  );
}

export default App;
