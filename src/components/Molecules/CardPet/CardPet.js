import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';

import { StyleImage, StyleWrapper } from './style';

const CardPet = ({ image, name, trainer, race }) => {
  return (
    <StyleWrapper>
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
