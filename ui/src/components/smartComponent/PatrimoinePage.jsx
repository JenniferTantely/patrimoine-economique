import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ChartComponent from "../dumbComponent/patrimoinePage/ChartComponent";
import DateRangeSelector from "../dumbComponent/patrimoinePage/DateRangeSelector";
import ValueGetter from "../dumbComponent/patrimoinePage/ValueGetter";

function PatrimoinePage() {
  const [dateDebut, setDateDebut] = useState(null);
  const [dateFin, setDateFin] = useState(null);
  const [jour, setJour] = useState(1);
  const [chartData, setChartData] = useState([]);
  const [valuePatrimoine, setValuePatrimoine] = useState(0);
  const [dateSelected, setDateSelected ] = useState(null)

  

  const handleValidateRange = async () => {
    // Appel à l'API pour obtenir la valeur du patrimoine sur la plage de dates
    const response = await fetch("http://localhost:3000/patrimoine/range", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "month", dateDebut, dateFin, jour}),
    });
    const data = await response.json();
    setChartData(data.valeur);
  };

  const handleGetValeur = async (date) => {
    const response = await fetch(`http://localhost:3000/patrimoine/${date.toISOString()}`);
    const data = await response.json();
    setValuePatrimoine(data.valeur);
  };

  return (
    <div className="container">
      <h2>Page Patrimoine</h2>
      
      <div className="mb-4 ml-3">
        <h4>Chart</h4>
        <DateRangeSelector 
          dateDebut={dateDebut} 
          setDateDebut={setDateDebut} 
          dateFin={dateFin} 
          setDateFin={setDateFin} 
          jour={jour} 
          setJour={setJour} 
          handleValidateRange={handleValidateRange} 
        />
        {chartData && <ChartComponent data={chartData} x={parseInt(jour)}/>}
      </div>

      <div>
        <h4>Get Valeur Patrimoine</h4>
        <ValueGetter 
          dateSelected = {dateSelected}
          setDateSelected = {setDateSelected}
          handleGetValeur={handleGetValeur} 
          valuePatrimoine = {valuePatrimoine}
        />
      </div>
    </div>
  );
}

export default PatrimoinePage;
