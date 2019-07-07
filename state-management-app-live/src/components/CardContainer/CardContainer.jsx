import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import EmployeeContext from '../../EmployeeContext';

function CardContainer(props) {
  return (
    <EmployeeContext.Consumer>
      {(context) => {
        console.log('context', context);
        return (
        <div className="container">
          {context.cardInfo.map((card) => <Card info={card}></Card>)}
        </div>
        )
      }}
    </EmployeeContext.Consumer>
  );
}

export default CardContainer;
