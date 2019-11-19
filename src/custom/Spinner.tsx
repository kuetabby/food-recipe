import React from "react";

import { Spin, Icon } from "antd";

const loadIcon = <Icon type="loading" style={{ fontSize: 23 }} spin />;

const SpinnerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem"
};

const Spinner = () => {
  return <Spin indicator={loadIcon} style={SpinnerStyle} />;
};

export default Spinner;
