'use client';
import { fetchTestData } from '@/app/action';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewTestData = () => {
  const [dateTest, setDateTest] = useState('');
  console.log('dateTest', dateTest);

  const fetchData = async () => {
    await axios
      .get('http://localhost:3000/api/tasks')
      .then((response) => {
        setDateTest(response.data); // Set data once after API call
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>ViewTestData</div>;
};

export default ViewTestData;
