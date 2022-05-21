import { useEffect } from 'react';
import { Row, Col } from 'react-grid-system';

import useQuery from 'hooks/useQuery';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Layout from 'components/Organisms/Layout';
import CardPet from 'components/Molecules/CardPet';

function Home() {
  const { data, loading, refresh } = useQuery('/pets');

  useEffect(() => {
    console.log({ data, loading });
  }, [loading, data]);

  return (
    <Layout>
      <Title htmlTag="h1" size={75}>
        Pets
      </Title>
      <Button onClick={refresh}>Refresh</Button>

      {loading ? (
        <p>
          <b>Loading...</b>
        </p>
      ) : (
        <Row>
          {data?.map(({ id, name, thumbnail }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <CardPet name={name} image={thumbnail} />
            </Col>
          ))}
        </Row>
      )}
      <div style={{ minHeight: '100vh' }} />
    </Layout>
  );
}

export default Home;
