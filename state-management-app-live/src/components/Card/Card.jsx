import React from 'react';
import './Card.css';
import EmployeeContext from '../../EmployeeContext';

function Card(props) {
  return (
    <EmployeeContext.Consumer>
      {(context) =>
        <div className="card-container">
          <strong>{props.info.name}</strong>
          <label>{props.info.occupation}</label>
          <label>{props.info.work}</label>
          <button type="button" onClick={() => context.fireEmployee(props.info.id)}>Fire</button>
        </div>
      }
    </EmployeeContext.Consumer>
  );
}

export default Card;
