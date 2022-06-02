import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';

import { StyleButton, StyleImage, StyleWrapper } from './style';

const CardPet = ({ image, name, trainer, race, onEdit }) => {
  return (
    <StyleWrapper>
      <StyleButton labelColor="white" onClick={onEdit}>
        <PencilFilled />
      </StyleButton>
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
