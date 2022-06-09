import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'config';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { useAuth } from 'context/AuthContext';

function Home() {
  const navigate = useNavigate();
  const { loading, login } = useAuth();

  const onLogin = async () => {
    await login('kevin.rivaslive@gmail.com', 'password');
    navigate(ROUTES.PETS.absolutePath);
  };

  return (
    <>
      <Title>You are welcome!</Title>
      <Button loading={loading} onClick={onLogin}>
        Go to the dashboard
      </Button>
    </>
  );
}

export default Home;
