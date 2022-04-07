import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import _ from 'lodash';

const Posts = ({ posts }) => {
  return (
    <Row className='row-cols-1 g-4'>
      {posts.map((post) => (
        <Col key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title className="text-justify">{_.capitalize(post.title)}</Card.Title>
              <Card.Text className="text-sm-justify">{_.capitalize(post.body)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
