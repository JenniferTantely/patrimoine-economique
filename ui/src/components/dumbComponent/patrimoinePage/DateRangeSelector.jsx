import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/patrimoine.css'

const array = Array.from({length: 31}, (_, index)=> (index + 1));

function DateRangeSelector({
  dateDebut,
  setDateDebut,
  dateFin,
  setDateFin,
  jour,
  setJour,
  handleValidateRange,
}) {
  return (
    <div className="range d-flex flex-row justify-content-around ">
      <div>
        <p>Date de début :</p>
        <DatePicker selected={dateDebut} onChange={setDateDebut} />
      </div>
      <div>
        <p>Date fin :</p>
        <DatePicker selected={dateFin} onChange={setDateFin} />
      </div>
      <div>
        <p>Jour :</p>
        <select value={jour} onChange={(e) => setJour(parseInt(e.target.value))}>
          {array.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          className="btn btn-secondary mt-4"
          onClick={handleValidateRange}
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default DateRangeSelector;
