import React from "react";
import { Card, Col, Placeholder } from "react-bootstrap";

export const LoadingPlaceholderCard: React.FC = () => {
  return (
    <Col className="d-flex align-items-stretch col-12 col-md-4">
      <Card className="mb-5 w-100">
        <Card.Img
          variant="top"
          src="https://superspec.com/wp-content/uploads/2020/11/4-Neutral-Gray.jpg"
        ></Card.Img>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </Col>
  );
};
