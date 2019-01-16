import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleScrollLinkClick = this.handleScrollLinkClick.bind(this);
    this.handleScrollLinkClickHome = this.handleScrollLinkClickHome.bind(this);

    this.state = {
      scrollLinkClicked: false
    };
  }

  handleScrollLinkClick() {
    this.setState({
      scrollLinkClicked: true
    });
  }

  handleScrollLinkClickHome() {
    this.setState({
      scrollLinkClicked: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header handleScrollLinkClick={this.handleScrollLinkClick} handleScrollLinkClickHome={this.handleScrollLinkClickHome} />
        <Main scrollLinkClicked={this.state.scrollLinkClicked} />
      </React.Fragment>
    );
  }
}

export default App;
