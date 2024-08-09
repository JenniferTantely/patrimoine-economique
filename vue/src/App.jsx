import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [possessions, setPossessions] = useState([]);

  useEffect(() => {
    // Charger le fichier JSON depuis un serveur ou un chemin local
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // Extraction des possessions après avoir récupéré les données
        const patrimoine = data.find(item => item.model === 'Patrimoine');
        if (patrimoine) {
          setPossessions(patrimoine.data.possessions);
        }
      })
      .catch(error => console.error('Erreur lors du chargement des données:', error));
  }, []);

  return (
    <div>
    <h1 className="my-3">Valeur du Patrimoine d'un étudiant</h1>
      <div>
        <form className="input-group">
          <input type="date" className="form-control"/>
          <button className="btn btn-primary">calculate</button>
        </form>
      </div>

    
      <table className="table table-hover table-light">
        <thead>
        <tr>
            <th scope="col">Libellé</th>
            <th scope="col">Valeur</th>
            <th scope="col">Date de début</th>
            <th scope="col">Date de fin</th>
            <th scope="col">Taux d'Amortissement</th>
            <th scope="col">Jour</th>
            <th scope="col">Valeur Constante</th>
          </tr>
        </thead>
        <tbody>
        {possessions.length > 0 ? (
            possessions.map((possession, index) => (
              <tr key={index}>
                <td>{possession.libelle}</td>
                <td>{possession.valeur}</td>
                <td>{new Date(possession.dateDebut).toLocaleDateString()}</td>
                <td>{possession.dateFin ? new Date(possession.dateFin).toLocaleDateString() : 'N/A'}</td>
                <td>{possession.tauxAmortissement || 'N/A'}</td>
                <td>{possession.jour || 'N/A'}</td>
                <td>{possession.valeurConstante || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Aucune possession à afficher</td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Valeur du patrimoine : </h2>
    </div>
  );
}

export default App;
