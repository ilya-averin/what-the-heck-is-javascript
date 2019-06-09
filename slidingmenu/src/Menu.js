import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown}
           className={visibility}>
        <h2><a href="/">Home</a></h2>
        <h2><a href="/about">About You</a></h2>
        <h2><a href="/problems">Do you have a problem?</a></h2>
        <h2><a href="/search">Search</a></h2>
      </div>
    );
  }
}

export default Menu;
