import React from "react";
import { Link } from "react-router-dom";


function PossessionList({ possessions, refetchPossessions }) {

  const closePossession = async (libelle) => {
    try {
      const response = await fetch(`http://localhost:3000/possession/${libelle}/close`, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      refetchPossessions();
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  return (
    <div className="container">
      <h2>Liste des Possessions</h2>
      <Link to="/possession/create" className="btn btn-secondary">
        Créer une Possession
      </Link>
      <div className="table-responsive">
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Libellé</th>
            <th>Valeur Initiale</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Taux</th>
            <th>Valeur Actuelle</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {possessions.map((possession, index) => (
            <tr key={index}>
              <td>{possession.libelle}</td>
              <td>
                {possession.valeur
                    ? possession.valeur
                    : possession.valeurConstante}
                </td>
              <td>
                {possession.dateDebut
                  ? new Date(possession.dateDebut).toLocaleDateString()
                  : "_"}
              </td>
              <td>
                {possession.dateFin
                  ? new Date(possession.dateFin).toLocaleDateString()
                  : "_"}
              </td>
              <td>
                {possession.tauxAmortissement !== null
                  ? possession.tauxAmortissement+" %"
                  : "_"}
              </td>
              <td>{possession.valeurActuelle}</td>
              <td>
                <Link
                  to={`/possession/${possession.libelle}/update`}
                  className="btn btn-secondary"
                >
                  Editer
                </Link>
                <button className="btn btn-danger ms-2"
                  onClick={() => closePossession(possession.libelle)}
                >
                  Clôturer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default PossessionList;
