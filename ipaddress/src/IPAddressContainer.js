import React, {Component} from "react";
import IPAddress from "./IPAddress.js";

var xhr;

class IPAddressContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user_data: null,
    };
  }

  componentDidMount() {
    xhr = new XMLHttpRequest()
    xhr.open("GET", "http://ip-api.com/json/", true);
    xhr.send();

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest = () => {
    if (xhr.readyState === 4 && xhr.status === 200){
      var response = JSON.parse(xhr.responseText);

      this.setState({
        user_data: response,
      });
    }
  }

  render() {
    return (
      <IPAddress data={this.state.user_data}/>
    )
  }
}

export default IPAddressContainer;
