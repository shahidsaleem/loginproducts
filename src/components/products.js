import React from 'react';
import { ModalButton } from './modal';

export class ProductsList extends React.Component {
  constructor() {
    super();
    this.updateproduct = this.updateproduct.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      products: [
        {
          id: 111,
          name: 'Sony xperia',
          price: 10000,
          quantity: 10,
        },
        {
          id: 222,
          name: 'Samsung galaxy 7',
          price: 20000,
          quantity: 5,
        },
        {
          id: 333,
          name: 'Micromax',
          price: 5000,
          quantity: 3,
        },
      ],
      showModal: false,
    };
  }

  deleteTask(index) {
    let products = this.state.products;
    products.splice(index, 1);

    this.setState({
      products,
    });
  }
  updateproduct(product) {
    let products = this.state.products;
    products.push(product);
    this.setState({
      products,
    });
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const renderedNewsList = this.state.products.map((product, index) => {
      return (
        <li key={product.id} className="list-group-item p-0">
          <div className="container">
            <div className="row">
              <div className="col-2 col-sm-2 col-lg-2  p-2  border text-center">
                {product.id}
              </div>
              <div className="col-4 col-sm-3 col-lg-4  p-2  border text-center">
                {product.name}
              </div>
              <div className="col-2 col-sm-2 col-lg-2  p-2  border text-center">
                {product.quantity}
              </div>
              <div className="col-2 col-sm-2 col-lg-2 p-2   border text-center">
                Rs. {product.price}
              </div>
              <div className="col-2 col-sm-3 col-lg-2 p-2   border">
                {' '}
                <button
                  type="text"
                  className="btn btn-danger deleteBtn"
                  onClick={(evt) => {
                    evt.stopPropagation();
                    this.deleteTask(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div className="container">
        <h2>Welcome {this.props.user}</h2>
        <div className="text-right mb-2">
          {' '}
          <ModalButton updateproduct={this.updateproduct}></ModalButton>
        </div>
        <ul className="list-group striped-list productList">
          <li className="list-group-item activeBg p-0">
            <div className="container">
              <div className="row">
                <div className="col-2 col-sm-2 col-lg-2 p-2  border text-center">
                  Id
                </div>
                <div className="col-4 col-sm-3 col-lg-4 p-2 border  text-center">
                  Name
                </div>
                <div className="col-2 col-sm-2 col-lg-2 p-2  border text-center">
                  Qty
                </div>
                <div className="col-2 col-sm-2 col-lg-2 p-2  border text-center">
                  Price
                </div>
                <div className="col-2 col-sm-3 col-lg-2 p-2  border ">
                  Action
                </div>
              </div>
            </div>
          </li>
          {renderedNewsList}
        </ul>
      </div>
    );
  }
}
