import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="cards">
      <Card className="text-center">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title>Today's Order</Card.Title>
          <Card.Text>
            Will send a text message to the current Food Directors of MHRC about who ordered what.
          </Card.Text>
          <Button variant="primary">Run code</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </div>
  );
}

export default Home;
