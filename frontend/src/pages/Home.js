import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

function Home() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="cards">
      <h1>Malaysia 🏛️ Sydney</h1>
      <h1>Food System</h1>
      <Card className="text-center mt-4">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title>Today's Order</Card.Title>
          <Card.Text>
            Will send a text message to the current Food Directors of MHRC about who ordered what.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group">
          <ListGroupItem action onClick={handleShow1} variant="dark">
            <Badge pill bg="primary">
              Food Director 1
            </Badge> <br/>
            +61401570603
          </ListGroupItem>
          <ListGroupItem action onClick={handleShow2} variant="dark">
            <Badge pill bg="primary">
              Food Director 2
            </Badge> <br/>
            +60199855082
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Run code</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">Phone numbers: +61401570603 and +60199855082</Card.Footer> */}
      </Card>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Food Director #1 Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="phone" placeholder="Enter new phone number" />
              <Form.Text className="text-muted">
                Nak nombor boleh? 😎
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Food Director #2 Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="phone" placeholder="Enter new phone number" />
              <Form.Text className="text-muted">
                Nak nombor boleh? 😎
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
