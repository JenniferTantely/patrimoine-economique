import { useState } from "react";

function ListGroup(props) {
  const [selectedIndex, setSelectIndex ] = useState(-1);


  return (
    <>
      <h1>{props.heading}</h1>
      {(props.items).length === 0 && <p>No item found</p>}
      {/* true && 1 return 1 / false && 1 return false and if it is false dans ce code il n'y a pas de retour du coup js continue à lire les codes suivantes */}
      <ul className="list-group">
        {(props.items).map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
