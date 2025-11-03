import { useEffect } from 'react'
import { Container } from '../../components/Container'
import { Timer } from '../../components/Timer'
import { MainForm } from '../../components/MainForm'
import { MainTemplate } from '../../templates/MainTemplates'

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro'
  }, [])

  return (
    <MainTemplate>
      {/* <Container>
        <Timer />
      </Container> */}

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}
