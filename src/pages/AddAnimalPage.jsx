import React, { useState } from "react";
import { AddForm } from "../components/AddForm";

const AddAnimalPage = ({animals, setAnimals}) => {
    return (
      <div className="add-animal-page">
        <AddForm animals={animals} setAnimals={setAnimals} />
      </div>
    );
  };
  
  export default AddAnimalPage;