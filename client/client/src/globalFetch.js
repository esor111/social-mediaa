import axios from 'axios';
import React, {useEffect, useState} from 'react';

const globalFetch = ({data}) => {
  const [store, setStore] = useState ([]);
  useEffect (
    () => {
      const getPost = async () => {
        try {
          const res = await axios.get (data);
          setStore (res.data);
        } catch (err) {
          console.log (err);
        }
      };
      getPost ();
    },
    [data]
  );

  return store;
};

export default globalFetch;
