import { Component, h } from 'preact'
interface Props {
  date: number,
  format: string,
  onChange: any
}
interface State {}
export class Clock extends Component<Props, State> {
  getValue (props: Props) {
    const date = new Date()
    date.setTime(props.date)
    return props.format === 'utc' ? date.toUTCString() : date.toString()
  }

  setFormat (e: any) {
    this.props.onChange(e.target.value)
  }

  render (props: Props) {
    return (
      <div className="clock">
        <div>Current Format: {props.format}</div>
        <div className="clock-value">{this.getValue(props)}</div>
        <div className="clock-format" onChange={this.setFormat.bind(this)}>
          <div>Change format: </div>
          <label>UTC<input type="radio" value="utc" checked={props.format === 'utc'} name="format"/></label>
          <label>Default<input type="radio" value="default" checked={props.format === 'default'} name="format"/></label>
        </div>
      </div>
    )
  }
}
