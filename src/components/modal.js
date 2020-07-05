import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Addproduct } from './addproduct';

export const ModalButton = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add New Product
      </Button>

      <Addproduct
        show={modalShow}
        onHide={() => setModalShow(false)}
        updateproduct={props.updateproduct}
      />
    </div>
  );
};
