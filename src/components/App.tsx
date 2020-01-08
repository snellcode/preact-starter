import { Component, h } from 'preact'
import { Clock } from '@src/components/Clock'
import { store } from '@src/store'

// to show that this could be placed anywhere...
setInterval(() => {
  store.set('clock.date', Date.now())
}, 1000)

// this component holds state, allowing store.paths to be defined
export class App extends Component {
  constructor (props) {
    super(props)
    store.paths({ clock: 'clock' }).link(this)
  }

  render (props, state) {
    const { clock } = state.store
    return (
      <Clock date={clock.date} format={clock.format} />
    )
  }
}
