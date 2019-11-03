import React from 'react';
import Form from './components/form/form';
import Name from './components/name/name';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chance',
      count: 0,
    };
  }

  handleNameChange = (newName) => {
    this.setState((previousState) => {
      return {
        name: newName,
        count: previousState.count + 1,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Name name={this.state.name} count={this.state.count} />
        <Form handleNameChange={this.handleNameChange} name={this.state.name} count={this.state.count} />
      </React.Fragment>
    );
  }
}

export default App;