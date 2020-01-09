import { h } from 'preact'
import { store } from '@src/store'

interface Props {
  date: number,
  format: string
}
const getDate = (props: Props) => {
  return new Date(props.date)[props.format]()
}

const onClick = () => {
  store.set('clock.format', store.get('clock.format') === 'toUTCString' ? 'toString' : 'toUTCString')
}

export const Clock = (props: Props) => {
  return (
    <div>
      <div>Clock</div>
      <div>{getDate(props)}</div>
      <button onClick={onClick}>format: {props.format}</button>
    </div>
  )
}
