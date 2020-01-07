import * as ClearX from 'clearx'

export const store = new ClearX({
  clock: {
    format: 'toUTCString',
    date: Date.now()
  }
})
