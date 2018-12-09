import React from 'react';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>Yo, {process.env.REACT_APP_ENV_VAR || 'unknown'}</h2>
      </div>
    );
  }
}
