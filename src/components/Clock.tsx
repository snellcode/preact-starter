import { Component, h } from 'preact'
import { store } from '@src/store'

interface Props {
  date: number,
  format: string
}
export class Clock extends Component<Props> {
  getDate (timestamp: number) {
    return new Date(timestamp)[this.props.format]()
  }

  onClick (e: Event) {
    e.preventDefault()
    store.set('clock.format', this.props.format === 'toUTCString' ? 'toString' : 'toUTCString')
  }

  render (props: Props) {
    return (
      <div>
        <div>Clock</div>
        <div>{this.getDate(props.date)}</div>
        <button onClick={this.onClick.bind(this)}>format: {props.format}</button>
      </div>
    )
  }
}
