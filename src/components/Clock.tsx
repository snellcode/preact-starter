import { h } from 'preact'
import { store } from '@src/store'

// this file is an example of a stateless functional component
// it does not do store.paths({...}).link(), but it can do store.set
interface Props {
  date: number,
  format: string
}
const getDate = (props: Props) => {
  return new Date(props.date)[props.format]()
}
const onClick = (props: Props) => (e: Event) => {
  e.preventDefault()
  store.set('clock.format', props.format === 'toUTCString' ? 'toString' : 'toUTCString')
}
export const Clock = (props: Props) => {
  return (
    <div>
      <div>Clock</div>
      <div>{getDate(props)}</div>
      <button onClick={onClick(props)}>format: {props.format}</button>
    </div>
  )
}
