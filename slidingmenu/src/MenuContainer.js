import React, { Component } from "react";
import MenuButton from "./MenuButton.js";
import Menu from "./Menu.js";

class MenuContainer extends Component {
  constructor(props, context) {
      super(props, context)

      this.state = {
        visible: false,
      }
  }

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  handleMouseDown = (e) => {
    this.toggleMenu()

    console.log("clicked")
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
              menuVisibility={this.state.visible}/>
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MenuContainer
