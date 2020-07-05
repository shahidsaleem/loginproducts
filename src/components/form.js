import React from 'react';

export class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: { emailid: '', password: '' },
      errors: { emailid: '', password: '' },
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(data) {
    this.setState({
      fields: Object.assign(this.state.fields, data),
    });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let user = this.state.fields.emailid
        ? this.state.fields.emailid.split('@')
        : '';
      this.props.loginHandle(user[0]);
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (fields.emailid === '') {
      formIsValid = false;
      errors['emailid'] = '*Please enter your email-ID.';
    }
    if (fields.emailid !== '' && !pattern.test(fields['emailid'])) {
      formIsValid = false;
      errors['emailid'] = '*Please enter valid email-ID.';
    }
    if (
      pattern.test(fields['emailid']) &&
      fields['emailid'] != 'Clarion@clarion.com'
    ) {
      formIsValid = false;
      errors['emailid'] = '*Please enter Registered email-ID.';
    }

    if (fields.password === '') {
      formIsValid = false;
      errors['password'] = '*Please enter your password.';
    }

    if (fields.password !== '' && fields.password != 'Clarion123') {
      formIsValid = false;
      errors['password'] = '*Please enter correct password.';
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center mt-5">
          <div className="col col-lg-4">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <form method="post" name="LoginForm" onSubmit={this.submitForm}>
                <div className="form-group">
                  <label>Email address:</label>
                  <input
                    type="text"
                    name="emailid"
                    value={this.state.fields.emailid}
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) =>
                      this.handleChange({ emailid: e.target.value })
                    }
                  />
                  <div className="errorMsg">{this.state.errors.emailid}</div>
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.fields.password}
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) =>
                      this.handleChange({ password: e.target.value })
                    }
                  />
                  <div className="errorMsg">{this.state.errors.password}</div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
