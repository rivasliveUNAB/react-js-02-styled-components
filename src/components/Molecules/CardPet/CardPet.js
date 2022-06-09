import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';

import { StyleButton, StyleDelButton, StyleImage, StyleWrapper } from './style';

const CardPet = ({ image, name, trainer, race, onEdit, onRemove }) => {
  return (
    <StyleWrapper>
      <StyleButton labelColor="white" onClick={onEdit}>
        <PencilFilled />
      </StyleButton>
      <StyleDelButton labelColor="white" color="error" onClick={onRemove}>
        -
      </StyleDelButton>
      <StyleImage loading="lazy" src={image} />
      <Title size={30}>{name}</Title>
      <Text>
        <strong>Race:</strong> {race}
      </Text>
      <Text>
        <strong>Trainer:</strong> {trainer}
      </Text>
    </StyleWrapper>
  );
};

export default CardPet;
