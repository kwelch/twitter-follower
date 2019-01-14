import React from 'react';

export default class App extends React.PureComponent {
  state = { screenName: 'kylewelch' };

  _handleLoadClick = () => {
    const { screenName } = this.state;

    if (screenName.trim().length) {
      fetch(
        `https://api.twitter.com/1.1/friends/list.json?screen_name=${screenName}`,
        {
          mode: 'no-cors',
          headers: {
            authorization: `Bearer ${
              process.env.REACT_APP_TWITTER_CONSUMER_KEY
            }`,
          },
        }
      ).then((resp) => {
        console.log(resp);
        if (resp.ok) {
          resp.json().then(console.log);
        }
      });
    }
  };

  _handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  render() {
    return (
      <div>
        <h1>Twitter Follower Management</h1>
        <div>
          <span>View Followers for user:</span>
          <input
            name="screenName"
            value={this.state.screenName}
            onChange={this._handleChange}
          />
          <button type="button" onClick={this._handleLoadClick}>
            Load
          </button>
        </div>
      </div>
    );
  }
}
