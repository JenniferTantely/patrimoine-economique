import { useState } from "react";
import "./App.css";
function App() {
  return (
    <div>
    <h1 className="my-3">Valeur du Patrimoine d'un étudiant</h1>
      <div>
        <form className="input-group">
          <input type="date" className="form-control" />
          <button className="btn btn-primary">click me</button>
        </form>
      </div>

      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Libelle</th>
            <th scope="col">Valeur Initiale</th>
            <th scope="col">Date de Début</th>
            <th scope="col">Date de Fin</th>
            <th scope="col">Amortissement</th>
            <th scope="col">Valeur Actuelle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <h2>Valeur du patrimoine : </h2>
    </div>
  );
}

export default App;
