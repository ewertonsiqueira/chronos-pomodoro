import  {Heading}  from  './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function  App () {
  return (
    <>
      <Heading>
        Testando
        <button>
          <TimerIcon />
        </button>
      </Heading>
     <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsum nostrum, quis nobis fugiat modi aut
      harum obcaecati quibusdam, eaque explicabo unde soluta quidem blanditiis adipisci ullam doloremque. Sequi, corrupti?
      </p>
    </>
  );
}