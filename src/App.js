import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleScrollLinkClick = this.handleScrollLinkClick.bind(this);

    this.state = {
      scrollLinkClicked: 'home'
    };
  }

  handleScrollLinkClick(target) {
    this.setState({
      scrollLinkClicked: target
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header handleScrollLinkClick={this.handleScrollLinkClick} />
        <Main scrollLinkClicked={this.state.scrollLinkClicked} />
      </React.Fragment>
    );
  }
}

export default App;
