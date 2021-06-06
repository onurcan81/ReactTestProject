import React from "react";
import loginImg from "../../login.svg";
import ReCAPTCHA from "react-google-recaptcha";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange=this.handleOnChange.bind(this)
  }

  handleOnChange(value) {
    console.log("Captcha value:", value);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">

        <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={this.handleOnChange}
          />,



          <button type="button" className="btn">
            Register
          </button>

          
        </div>
      </div>
    );
  }
}
