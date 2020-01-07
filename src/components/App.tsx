import { Component, h } from 'preact'
import { Clock } from '@src/components/Clock'
interface Props {}
interface State {
  date: number
}
export class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.setState({ date: Date.now() })
    setInterval(() => {
      this.setState({ date: Date.now() })
    }, 1000)
  }

  render (props: Props, state: State) {
    return (
      <Clock date={state.date} />
    )
  }
}
