import React, { useEffect, useState } from "react";
import Test from '../Components/Test';
import axios from 'axios';

const HomeView = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const getData = async () => {
    console.warn('in getData');
    await axios.get(`http://localhost:8080/api/`)
      .then(res => {
        const data = res.data;
        return data;
      })
      .then(res => {
        let arr = [];
        res.forEach((element) => {
          arr.push(element);
        })
        setFetchedData(arr);
      })
      .then(res => {
        console.warn(fetchedData);
      })
  };

  useEffect(() => {
    getData().then(response => {
      console.log(response);
    }).catch(e => {
      console.log(e);
    });
  }, []);

  return (
    <>
      <Test />
      <a>{fetchedData}</a>
    </>
  );
};

export default HomeView;
