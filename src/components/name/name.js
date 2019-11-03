import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name} </div>
        <p>Number of Name Changes {this.props.count} </p>
      </div>
    );
  }
}

export default Name;