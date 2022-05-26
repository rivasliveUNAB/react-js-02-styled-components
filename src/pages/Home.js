import { Row, Col } from 'react-grid-system';

import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import Layout from 'components/Organisms/Layout';
import CardPet from 'components/Molecules/CardPet';
import { AddPetModal } from 'components/Molecules/Modals';
import HeaderPage from 'components/Molecules/HeaderPage';

function Home() {
  const { visible, onToggle } = useModal();
  const { data, loading, refresh } = useQuery('/pets');

  return (
    <Layout>
      <HeaderPage title="Pets" onRefresh={refresh} onAdd={onToggle} />

      {loading ? (
        <p>
          <b>Loading...</b>
        </p>
      ) : (
        <Row>
          {data?.map(({ id, name, thumbnail, trainer, race }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <CardPet name={name} image={thumbnail} race={race} trainer={`${trainer.firstName} ${trainer.lastName}`} />
            </Col>
          ))}
        </Row>
      )}

      <AddPetModal isOpen={visible} onCancel={onToggle} />
    </Layout>
  );
}

export default Home;
