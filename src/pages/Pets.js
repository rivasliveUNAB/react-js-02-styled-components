import { useState } from 'react';
import { Row, Col } from 'react-grid-system';

import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import CardPet from 'components/Molecules/CardPet';
import HeaderPage from 'components/Molecules/HeaderPage';
import { CreateOrEditPet } from 'components/Molecules/Modals';
import useMutation from 'hooks/useMutation';

function Pets() {
  const { visible, onToggle } = useModal();
  const [petEdit, setPetEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible } = useModal();

  const { data, loading, refresh } = useQuery('/pets');

  const [deletePet] = useMutation(`/pets`, {
    refresh,
    method: 'delete',
    headers: {
      'Authorization': 'Bearer my-token'
    },
  });

  const onEdit = (pet) => {
    onVisible();
    setPetEdit(pet);
    onToggle();
  };

  const onDelete = (id) => {
    deletePet({}, id).then();
  };

  const onClose = () => {
    onHidden();
    setPetEdit(null);
    onToggle();
  };

  return (
    <Layout>
      <HeaderPage title="Pets" onRefresh={refresh} onAdd={onToggle} />

      {loading ? (
        <Loader />
      ) : (
        <Row>
          {data?.map((pet) => {
            const { id, name, thumbnail, trainer, race } = pet;

            return (
              <Col key={id} xs={12} md={6} lg={4} xl={3}>
                <CardPet
                  race={race}
                  name={name}
                  image={thumbnail}
                  onRemove={() => onDelete(pet.id)}
                  onEdit={() => onEdit(pet)}
                  trainer={`${trainer.firstName} ${trainer.lastName}`}
                />
              </Col>
            );
          })}
        </Row>
      )}

      <CreateOrEditPet pet={petEdit} isOpen={visible} isUpdate={isUpdate} onRefresh={refresh} onCancel={onClose} />
    </Layout>
  );
}

export default Pets;
