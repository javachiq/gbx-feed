import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Posts from '../components/Posts';
import Filter from '../components/Filter';
import Search from '../components/Search';
import _ from 'lodash';

function FeedPage () {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('za');
  const [keyword, setKeyword] = useState('');
  const baseurl = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(baseurl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
    console.log('Get Init Data');
  }, []);

  useEffect(async () => {
    await callAPI();
  }, [filter]);

  useEffect(() => {
    console.log('Keyword', keyword);
    console.log('filterData', filterData);
    if (keyword !== '') {
      const tempData = filterData.filter(item => `${item.title.toLowerCase()} ${item.body.toLowerCase()}`.includes(keyword.toLowerCase()));
      setFilterData(tempData);
      console.log('Use Effect 3', tempData);
    } else {
      callAPI();
    }
  }, [keyword]);

  useEffect(async () => {
    await handleSort();
    console.log('Use Effect 4', filterData);
  }, [sort]);

  const options = _.chain(data).map('userId').uniq().value();

  function callAPI () {
    const endpoint = !_.isEmpty(filter) ? baseurl + '?userId=' + filter : baseurl;
    console.log('endpoint', endpoint);
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setFilterData(json))
      .catch((error) => console.log(error));
    console.log('Use Effect 2', filterData);
  }

  function handleSort () {
    if (sort === 'az') {
      const tempData = filterData.sort((a, b) => {
        const fa = a.title.toLowerCase();
        const fb = b.title.toLowerCase();

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
      setFilterData(tempData);
    } else {
      const tempData = filterData.sort((a, b) => {
        const fa = a.title.toLowerCase();
        const fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      setFilterData(tempData);
    }
  }
  console.log(`filter ${filter} sort ${sort}`);
  return (
    <Card>
      <Card.Header className='page-title' as="h4">My Feed</Card.Header>
      <Card.Body>
        <Row className='row-cols-1'>
          <Col>
            <Filter posts={data} selectOptions={options} setFilter={setFilter} setSort={setSort} />
            <Search setKeyword={setKeyword}/>
            <Posts posts={filterData} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default FeedPage;
