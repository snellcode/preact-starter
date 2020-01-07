import { Component, h } from 'preact'
import { Clock } from '@src/components/Clock'
import { store } from '@src/store'

export class App extends Component {
  constructor (props) {
    super(props)
    store.paths({
      date: 'clock.date',
      format: 'clock.format'
    }).link(this)
    setInterval(() => {
      store.set('clock.date', Date.now())
    }, 1000)
  }

  render () {
    const { date, format } = this.state.store
    return (
      <Clock format={date} date={format} />
    )
  }
}
