import { useMemo } from 'react';

import useQuery from 'hooks/useQuery';
import { formatDate } from 'utils/format';
import useMutation from 'hooks/useMutation';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Select from 'components/Atoms/Select';

const AddPetModal = ({ isOpen, onCancel, onRefresh, isUpdate = false, pet = null }) => {
  const { data, loading } = useQuery('/trainers?status=active');
  const [createOrUpdatePet, { loading: loadingAddOrUpdatePet }] = useMutation(isUpdate ? `/pets/${pet?.id}` : '/pets', {
    method: isUpdate ? 'put' : 'post', // post = create, put = update
    headers: {
      'Authorization': 'Bearer my-token'
    },
    refresh: async () => {
      onCancel();
      await onRefresh();
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await createOrUpdatePet({
      variables: {
        ...data,
        trainer: data?.trainer ? data?.trainer : pet?.trainer?.id ?? ''
      }
    });
  };

  const dataSelect = useMemo(() => {
    if (!data) return [];
    return data.map((item) => {
      const { id, firstName = '', lastName = '' } = item;

      return {
        value: id,
        label: `${firstName} ${lastName}`
      };
    });
  }, [data]);

  const birthday = formatDate(pet?.birthdate);

  return (
    <Modal
      width={400}
      isOpen={isOpen}
      onCancel={onCancel}
      title={isUpdate ? 'Edit Pet' : 'Add Pet'}
      okText={isUpdate ? 'Edit' : 'Save'}
      okProps={{
        type: 'submit',
        form: 'form-pet',
        loading: loadingAddOrUpdatePet
      }}
    >
      <form id="form-pet" method="POST" onSubmit={onSubmit}>
        <Input defaultValue={pet?.name} name="name" placeholder="Name" type="text" required />
        <Input defaultValue={birthday} name="birthdate" placeholder="Birthdate" type="date" required />
        <Input defaultValue={pet?.race} name="race" placeholder="Race" type="text" required />
        <Select
          required
          type="text"
          name="trainer"
          options={dataSelect}
          isLoading={loading}
          placeholder="Trainer"
          defaultInputValue={isUpdate ? `${pet?.trainer?.firstName} ${pet?.trainer?.lastName}` : undefined}
        />
        <Input defaultValue={pet?.thumbnail} name="thumbnail" placeholder="Thumbnail" type="text" required />
      </form>
    </Modal>
  );
};

export default AddPetModal;
