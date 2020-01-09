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

// notice that e.target is setup to pass props
// avoiding the need to create an arrow function in render (perf issue)
const onClick = (e: Event) => {
  const format = (e.target as HTMLElement).getAttribute('format')
  store.set('clock.format', format === 'toUTCString' ? 'toString' : 'toUTCString')
}
export const Clock = (props: Props) => {
  return (
    <div>
      <div>Clock</div>
      <div>{getDate(props)}</div>
      <button {...props} onClick={onClick}>format: {props.format}</button>
    </div>
  )
}
