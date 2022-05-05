import { useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Atoms/Button';
import { useAppTheme } from '../hooks/useAppTheme';
import Title from '../components/Atoms/Title';
import Navbar from '../components/Organisms/Navbar';

function Home() {
  const { themeToggle } = useAppTheme();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/v1/pets')
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Title htmlTag="h1" size={75}>
        This is a Title
      </Title>

      <Button color="accent" labelColor="white" onClick={themeToggle}>
        Button default
      </Button>

      <div style={{ minHeight: '100vh' }}/>
    </div>
  );
}

export default Home;
