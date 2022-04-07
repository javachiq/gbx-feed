import React, { useState } from 'react';
import { Row, Col, Button, FormControl, InputGroup } from 'react-bootstrap';

const Filter = (props) => {
  const [value, setValue] = useState('');
  const handleKeyUp = e => {
    setValue(e.target.value);
    handleClick();
  };

  const handleClick = () => {
    console.log('handleClick', value);
    props.setKeyword(value);
  };

  return (
    <Row>
      <Col className="mb-3">
        <InputGroup>
          <FormControl
            placeholder="Search Keyword"
            onChange={e => { setValue(e.target.value); }}
            onKeyUp={handleKeyUp}/>
          <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
            <i className="fas fa-search" />
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default Filter;
