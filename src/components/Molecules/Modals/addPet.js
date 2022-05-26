import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';

const AddPetModal = ({ isOpen, onCancel }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data);
  }

  return (
    <Modal width={400} isOpen={isOpen} onCancel={onCancel} title="Add Pets">
      <form method="POST" onSubmit={onSubmit}>
        <Input name="name" placeholder="Full Name" type="text" required />
        <Input name="birthdate" placeholder="Birthdate" type="date" required />
        <Input name="race" placeholder="Race" type="text" required />
        <Input name="trainer" placeholder="Trainer" type="text" required />
        <Input name="thumbnail" placeholder="Thumbnail" type="text" required />

        <Button type="submit">Save</Button>
      </form>
    </Modal>
  );
};

export default AddPetModal;
