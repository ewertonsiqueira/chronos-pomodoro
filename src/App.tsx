import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

export function  App () {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Title 2</Heading>
      </Container>
      <Container>
        <Heading>Title 3</Heading>
      </Container>
    </>
  );
}