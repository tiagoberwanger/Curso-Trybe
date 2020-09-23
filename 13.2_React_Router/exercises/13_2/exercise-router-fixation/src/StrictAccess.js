import React from 'react';

class StrictAccess extends React.Component {
  
  render() {
    const { user: { username, password } } = this.props;
    if (username !== 'joao' || password !== '1234') {
      return <alert>Access denied</alert>
    }
      return (
        <p>Welcome, {username}!</p>   
      );
  }
}


export default StrictAccess;