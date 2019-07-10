import React from 'react';
import './ValidationError.css';

function ValidationError(props) {
    return (
      <div className="error">
        {props.message}
      </div>
    )
}

export default ValidationError;
