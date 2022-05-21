import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const useQuery = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${baseUrl}${url}`);
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrors(err);
      setLoading(false);
      throw new Error(err);
    }
  }, [url]);

  useEffect(() => {
    getData().then();
  }, [getData]);

  return { loading, data, errors, refresh: getData };
};

export default useQuery;
