/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Row, Col, Button, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
// import _ from 'lodash';

const Filter = (props) => {
  console.log(props);
  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    const value = e;
    console.log('handleChange', value);
    setUserId(value);
    props.setFilter(value);
  };

  const handleClick = (e) => {
    const sort = e.target.value;
    console.log('handleClick', sort);
    props.setSort(sort);
  };

  return (
    <Row id="filterId">
      <Col>
        <InputGroup className="mb-3" >
          <DropdownButton
            variant="outline-secondary"
            title="Filter by User ID"
            id="input-group-dropdown-3"
            onSelect={handleChange}
          >
          <Dropdown.Item key={''} eventKey={''}>Reset</Dropdown.Item>
          {props.selectOptions.map(o => (
            <Dropdown.Item key={o} eventKey={o}>{o}</Dropdown.Item>
          ))}
          </DropdownButton>
          <FormControl className="filter-text mr-auto" value={userId} readOnly/>
          <Button onClick={handleClick} value="az" className="col-1 btn-sort"><i className="fas fa-arrow-down-a-z" /></Button>
          <Button onClick={handleClick} value="za" className="col-1 btn-sort"><i className="fas fa-arrow-up-a-z" /></Button>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default Filter;
