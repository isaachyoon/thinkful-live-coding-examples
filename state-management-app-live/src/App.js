import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Hire from './components/Hire/Hire';
import EmployeeContext from './EmployeeContext';


class App extends React.Component {
  state = {
    cardInfo: [{
      name: 'isaac',
      occupation: 'software engineer',
      work: 'facebook',
      id: 1
    }, {
      name: 'jun',
      occupation: 'software engineer',
      work: 'google',
      id: 2,
    }, {
      name: 'david',
      occupation: 'software engineer',
      work: 'amazon',
      id: 3
    }, {
      name: 'lance',
      occupation: 'software engineer',
      work: 'apple',
      id: 4
    }]
  }
  counter = 5;
  addEmployee = () => {
    let newEmployee = {
      name: 'new employee',
      occupation: 'software engineer',
      work: 'thinkful',
      id: this.counter
    };
    this.counter++;
    this.setState({cardInfo: [...this.state.cardInfo, newEmployee]});
  }

  fireEmployee = (id) => {
    let newEmployeeObj = this.state.cardInfo.filter((employeeData) =>
      employeeData.id !== id);
    this.setState({cardInfo: newEmployeeObj});
  }

  render() {
    return (
      <EmployeeContext.Provider value={{
        cardInfo: this.state.cardInfo,
        fireEmployee: this.fireEmployee,
        hireEmployee: this.addEmployee
        }}>
        <div className="App">
          <div className="container">
              <Hire></Hire>
              <CardContainer></CardContainer>
          </div>
        </div>
      </EmployeeContext.Provider>
      );
    }
}

export default App;
