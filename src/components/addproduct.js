import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export class Addproduct extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: { id: '', name: '', price: '', quantity: '' },
      errors: { id: '', name: '', price: '', quantity: '' },
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
      this.props.onHide();
      this.props.updateproduct(this.state.fields);
      let defaultData = {
        fields: { id: '', name: '', price: '', quantity: '' },
        errors: { id: '', name: '', price: '', quantity: '' },
      };
      this.setState({
        fields: Object.assign(this.state, defaultData),
      });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (fields.id === '') {
      formIsValid = false;
      errors['id'] = '*Please enter ID.';
    }

    if (fields.name === '') {
      formIsValid = false;
      errors['name'] = '*Please enter name.';
    }

    if (fields.price === '') {
      formIsValid = false;
      errors['price'] = '*Please enter price.';
    }
    if (fields.quantity === '') {
      formIsValid = false;
      errors['quantity'] = '*Please enter quantity.';
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Please fill all the Fields to add product</h6>
          <div className="container">
            <div className="form-group">
              <label>ID:</label>
              <input
                type="number"
                name="id"
                value={this.state.fields.id}
                className="form-control"
                placeholder="ID"
                onChange={(e) => this.handleChange({ id: e.target.value })}
              />
              <div className="errorMsg">{this.state.errors.id}</div>
            </div>
            <div className="form-group">
              <label>name:</label>
              <input
                type="text"
                name="name"
                value={this.state.fields.name}
                className="form-control"
                placeholder="name"
                onChange={(e) => this.handleChange({ name: e.target.value })}
              />
              <div className="errorMsg">{this.state.errors.name}</div>
            </div>
            <div className="form-group">
              <label>price:</label>
              <input
                type="number"
                name="price"
                value={this.state.fields.price}
                className="form-control"
                placeholder="price"
                onChange={(e) => this.handleChange({ price: e.target.value })}
              />
              <div className="errorMsg">{this.state.errors.price}</div>
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={this.state.fields.quantity}
                className="form-control"
                placeholder="quantity"
                onChange={(e) =>
                  this.handleChange({ quantity: e.target.value })
                }
              />
              <div className="errorMsg">{this.state.errors.quantity}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button
            type="text"
            className="btn btn-primary"
            onClick={this.submitForm}
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
