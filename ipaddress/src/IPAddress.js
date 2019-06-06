import React, {Component} from "react";
import "./IPAddress.css";

class IPAddress extends Component {
  render () {
    var data = this.props.data;
    console.log(data === null )
    var text = data === null ? "..." : data.city + ", " + data.country + ", " + data.zip
    return (
      <div>
        <h1>{text}</h1>
        <p>( I know where are you living...probably :P )</p>
      </div>
    )
  }
}

export default IPAddress;
