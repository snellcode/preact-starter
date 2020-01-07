import { Component, h } from 'preact'
interface Props {
  date: number
}
export class Clock extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = {
      method: 'toUTCString'
    }
  }

  getDate (timestamp: number) {
    return new Date(timestamp)[this.state.method]()
  }

  onClick (e: Event) {
    e.preventDefault()
    const method = this.state.method === 'toUTCString' ? 'toString' : 'toUTCString'
    this.setState({ method })
  }

  render (props: Props) {
    return (
      <div>
        <div>Clock</div>
        <div>{this.getDate(props.date)}</div>
        <button onClick={this.onClick.bind(this)}>formater: {this.state.method}</button>
      </div>
    )
  }
}
