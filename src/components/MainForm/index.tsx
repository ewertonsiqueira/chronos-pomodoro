import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { Circles } from '../Circles'
import { PlayCircleIcon } from 'lucide-react'

export const MainForm = () => {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput labelText='Qualquer coisa' id='meuInput' placeholder='Digite algo' />
      </div>

      <div className="formRow">
        <p>
          Batata
        </p>
      </div>

      <div className="formRow">
        <Circles></Circles>
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />}></DefaultButton>
      </div>
    </form>
  )
}
