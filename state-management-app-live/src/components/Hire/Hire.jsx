import React from 'react';
import './Hire.css';
import EmployeeContext from '../../EmployeeContext';

function Hire(props) {
  return (
    <EmployeeContext.Consumer>
      {(context) => {
        return (
        <div className="Hire">
          <button onClick={() => context.hireEmployee()}>Hire</button>
        </div>
        )
      }}
    </EmployeeContext.Consumer>
  );
}

export default Hire;
