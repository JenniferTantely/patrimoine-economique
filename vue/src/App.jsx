import { useState, useEffect } from "react";
import "./App.css";
import Possession from "../../models/possessions/Possession.js";
import Patrimoine from "../../models/Patrimoine.js";
import Personne from "../../models/Personne.js"

function App() {
  const [possessions, setPossessions] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [patrimoineValue, setPatrimoineValue] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const personneData = data.find(item => item.model === 'Personne').data;
        const personne = new Personne(personneData.nom);
        
        const patrimoine = data.find((item) => item.model === "Patrimoine");
        if (patrimoine) {
          const possessionsInstances = patrimoine.data.possessions.map(
            (possessionData) => {
              return new Possession(
                personne,
                possessionData.libelle,
                possessionData.valeur,
                new Date(possessionData.dateDebut),
                new Date(possessionData.dateFin),
                possessionData.tauxAmortissement
              );
            }
          );
          setPossessions(possessionsInstances);
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données:", error)
      );
  }, []);

  const handleCalculate = () => {
    if (selectedDate) {
      const patrimoine = new Patrimoine("John Doe", possessions);
      console.log(patrimoine)
      const valeur = patrimoine.getValeur(new Date(selectedDate));
      console.log(selectedDate)
      setPatrimoineValue(valeur);
    }
    else{
      console.log("error")
    }
  };

  return (
    <div>
      <h1 className="my-3">Valeur du Patrimoine d'un étudiant</h1>
      <table className="table table-hover table-light">
        <thead>
          <tr>
            <th scope="col">Libelle</th>
            <th scope="col">Valeur Initiale</th>
            <th scope="col">Date de début</th>
            <th scope="col">Date de fin</th>
            <th scope="col">Amortissement</th>
            <th scope="col">Date Actuelle</th>
          </tr>
        </thead>
        <tbody>
          {possessions.length > 0 ? (
            possessions.map((possession, index) => (
              <tr key={index}>
                <td>{possession.libelle}</td>
                <td>{possession.valeur}</td>
                <td>
                  {possession.dateDebut
                    ? new Date(possession.dateDebut).toLocaleDateString()
                    : "Null"}
                </td>
                <td>
                  {possession.dateFin
                    ? new Date(possession.dateFin).toLocaleDateString()
                    : "Null"}
                </td>
                <td>
                  {possession.tauxAmortissement !== null
                    ? possession.tauxAmortissement
                    : "Null"}
                </td>
                <td>{possession.getValeur(new Date())}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Aucune possession à afficher</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <form
          className="input-group"
          onSubmit={(e) => {
            e.preventDefault();
            handleCalculate();
          }}
        >
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button className="btn btn-secondary">calculate</button>
        </form>
      </div>
      <h2>Valeur du patrimoine : {patrimoineValue !== null ? patrimoineValue : ""}</h2>
    </div>
  );
}

export default App;
