import { Container } from './styles';
import Ribbons from '../ribbons';

const LogisticsRibbons = () => {
  return (
    <Container>
      <Ribbons group={['promotionShipping']} />
      <Ribbons group={['logistic']} />
    </Container>
  );
};

export default LogisticsRibbons;
