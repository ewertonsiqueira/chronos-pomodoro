import styles from './styles.module.css'

type DefaultInputProps = {
  //  | isso se chama union type, serve pra passar mais de um tipo que o meu input vai aceitar
  // type?: 'text' | 'email' | 'password' | 'number'; // mais nesse caso eu quero que o type seja obrigatoriamente um desses 4 tipos
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>; // passando isso eu busco todas as propriedas do input

export function DefaultInput({ type, id, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      {labelText ? <label htmlFor={id}>{labelText}</label> : ''}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  )
}
