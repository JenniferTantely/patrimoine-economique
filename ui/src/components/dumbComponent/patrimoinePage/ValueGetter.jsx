import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ValueGetter({ dateSelected, setDateSelected, handleGetValeur, valuePatrimoine }) {
  return (
    <div className="range d-flex flex-row w-75 pe-3 justify-content-between">
      <div className="d-flex flex-row">
      <DatePicker selected={dateSelected} onChange={setDateSelected} />
      <button className="btn btn-secondary ms-2" onClick={() => handleGetValeur(dateSelected)}>
        Validate
      </button>
      </div>
      <div className="d-flex flex-row">
        <p>La valeur du patrimoine est de :</p>
        <p className="ms-2"> {valuePatrimoine} Ar</p>
      </div>
    </div>
  );
}

export default ValueGetter;
