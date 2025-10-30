import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Timer } from './components/Timer'
import { DefaultInput } from './components/DefaultInput'
import { Circles } from './components/Circles'

export function App () {
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
            <DefaultInput labelText='Qualquer coisa' id='meuInput' placeholder='Digite algo' />
          </div>

          <div className="formRow">
            <p>
            Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="formRow">
            <Circles></Circles>
          </div>

          <div className="formRow">
            <button>
              Enviar
            </button>
          </div>
        </form>
      </Container>
    </>
  )
}
