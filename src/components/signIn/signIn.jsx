import React from "react";
import "./signIn.css";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container-login-form">
        <div className="outer-circle flex-c flex-m" />

        <div className="middle-circle flex-c flex-m" />

        <div className="inner-circle flex-c flex-m" />

        <div className="limiter">
          <div className="container-login">
            <div className="wrap-login flex-m">
              <form className="login-form validate-form flex-sb flex-w">
                <h1 className="login-form-title fs-44 text-up">Welcome</h1>
                <span className="login-form-header p-b-24 text-center">
                  to your Ring Ukraine Annotation carreer map
                </span>

                <span className="text-dark fs-12 p-b-8">Username</span>
                <div
                  className="wrap-input validate-input m-b-20"
                  data-validate="Username is required"
                >
                  <input className="input" type="text" name="username" />
                  <span className="focus-input" />
                </div>

                <span className="text-dark fs-12 p-b-8">Password</span>
                <div
                  className="wrap-input validate-input m-b-12"
                  data-validate="Password is required"
                >
                  <span className="btn-show-pass">
                    <i className="fa fa-eye" />
                  </span>
                  <input className="input" type="password" name="pass" />
                  <span className="focus-input" />
                </div>

                <div className="flex-bl-m w-full p-b-20">
                  <div className="contact-form-checkbox">
                    <input
                      className="input-checkbox"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label
                      className="label-checkbox text-light fs-12 text-thin"
                      for="ckb1"
                    >
                      Remember Me
                    </label>
                  </div>

                  <div>
                    <a href="#" className="text-light text-thin fs-12">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="container-login-form-btn">
                  <a href="map.html" className="login-form-btn">
                    <button className="text-up lt-2">Submit</button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
