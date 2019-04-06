import React from "react";

import styled from "styled-components";
import axios from "axios";

import pencil from "./pencil.png";

const SmurfContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SmurfDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  margin: 0;
  align-items: flex-start;
  margin-top: 20px;
  padding: 8px;
  padding-bottom: 5px;
  padding-top: 7px;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
`;

const DeleteSpan = styled.span`
  cursor: pointer;
  border: 1px solid black;
  padding: 5px 10px;
`;

const SmurfButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 20px;
`;

const EditButton = styled.img`
  width: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid black;
  padding: 5px 10px;
`;

const SingleSmurf = props => {
  const deleteSmurf = event => {
    console.log("Smurf is being deleted");
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(response => {
        props.updateSmurfs(response.data);
        props.history.push("/smurfs");
      })
      .catch(err => console.log(err));
  };

  const updateSmurf = event => {
    console.log("Smurf is being updated");
    props.history.push(`/smurfs/${smurf.id}/update`);
  };

  let smurf = null;
  if (props.smurfs) {
    smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.id);
  }

  if (!smurf) {
    return <h2>Loading smurf data...</h2>;
  }
  return (
    <SmurfContainerDiv>
      <SmurfButtons>
        <DeleteSpan onClick={deleteSmurf}>X</DeleteSpan>
        <EditButton onClick={updateSmurf} src={pencil} alt="edit" />
      </SmurfButtons>

      <SmurfDiv>
        <P>Name: {smurf.name}</P>
        <P>Age: {smurf.age}</P>
        <P>Height: {smurf.height}</P>
      </SmurfDiv>
    </SmurfContainerDiv>
  );
};

export default SingleSmurf;
