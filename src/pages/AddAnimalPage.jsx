import React, { useState } from "react";
import { AddForm } from "../components/AddForm";

const AddAnimalPage = ({ onAdd }) => {
    return (
      <div className="add-animal-page">
        <AddForm onAdd={onAdd} />
      </div>
    );
  };
  
  export default AddAnimalPage;