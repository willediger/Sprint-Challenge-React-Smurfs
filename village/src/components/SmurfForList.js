import React from "react";

const SmurfForList = props => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

SmurfForList.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default SmurfForList;
