import { Container } from '../../components/Container'
import { Logo } from '../../components/Logo'
import { Menu } from '../../components/Menu'
import { Timer } from '../../components/Timer'
import { Footer } from '../../components/Footer'

type MainTemplateProps = {
  children: React.ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
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

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  )
}
