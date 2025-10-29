import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Timer } from './components/Timer';
import { DefaultInput } from './components/DefaultInput';

export function  App () {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      
      <Container>
        <Timer />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
           <DefaultInput type='Teste'/>
          </div>

          <div className="formRow">
           <p>
            Lorem ipsum dolor sit amet.
           </p>
          </div>

          <div className="formRow">
           <p>
            Circlos
           </p>
           <p>
            0 0 0 0
           </p>
          </div>

          <div className="formRow">
            <button>
              Enviar
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}