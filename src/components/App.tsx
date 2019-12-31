import { Component, h } from 'preact'
import { Clock } from './Clock'
interface Props {}
interface State {
  date: number,
  format: string
}
export class App extends Component<Props, State> {
  componentDidMount () {
    this.setState({ date: Date.now(), format: 'default' })
    setInterval(() => {
      this.setState({ date: Date.now() })
    }, 1000)
  }

  onChange (name, value) {
    this.setState((current) => ({ ...current, [name]: value }))
  }

  render (props: Props, state: State) {
    return (
      <Clock onChange={this.onChange.bind(this, 'format')} date={state.date} format={state.format} />
    )
  }
}
