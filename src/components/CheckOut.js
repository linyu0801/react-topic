import React from 'react'
import '../styles/CheckOut.scss'

export default class CheckOut extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.handleFetch = this.handleFetch.bind(this)
  //     this.handleReceived = this.handleReceived.bind(this)
  //     this.state = { fetching: false }
  //   }
  //   handleFetch() {
  //     this.setState({ fetching: true })
  //   }
  //   handleReceived() {
  //     this.setState({ fetching: false })
  //   }
  render() {
    // const { fetching } = this.state
    return <Spinner segments="20" />
  }
}

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.splitPath = this.splitPath.bind(this)
  }
  componentDidMount() {
    this._pathLength = this._path.getTotalLength()
    this.forceUpdate()
  }
  splitPath(numberOfSegments, dValue) {
    if (this._pathLength) {
      const segmentLength = this._pathLength / numberOfSegments // 55.81
      const gapLength = 15
      const segments = []
      const colorInterval = () => {}
      for (let i = 0; i < numberOfSegments; i++) {
        segments.push(
          <path
            d={dValue}
            style={{
              stroke: `hsla(${360 / numberOfSegments}, 50%, 75%, 1)`,
              strokeDasharray: `
                0
                ${i * segmentLength + gapLength}
                ${segmentLength - gapLength}
                ${this._pathLength - (i + 1) * segmentLength}
              `,
              strokeDashoffset: `-${this._pathLength}`,
            }}
          />
        )
      }
      return segments
    }
  }
  render() {
    const numberOfSegments = this.props.segments || 2
    const dValue =
      'M43.5,31.86a42,42,0,0,1-2.37,5S37,45.09,42.24,47.91c2.1,1.13,8.81,1.33,12.5,2.93,4.42,1.91,8.12,6,5.62,6.63s-8.46-7-8.46-7M39.65,44.89S27.94,55.38,41.89,63a17.24,17.24,0,0,0,9.43,2.44s6.3-.34,10,1.87,10.17-.7,10.17-.7M52.25,50.57s-5.32,8.89,4.58,11.48,9.8,1.47,15.07,4.66c4.87,1.2,17.38-1.41,17.38-1.41M108.81,61a2.15,2.15,0,0,1,.82,1.47c.1.22-.35.78-2.28,1C103.23,64,97,70.54,91,65.78S78,62,74.64,60.31s-2.58-5.25-3.29-6.7M56.19,38.81c.25.76,3.72,11.73,15,14.79,12,3.27,16.7.3,24.95,7.9,1.4,1.42,4.09-.12,2.55-2m-5.26-4.86s4.91-.43,7,3,7.41,2.6,9.88,3.48c1.19.43,3-.67,3.37-2.22.26-1-1-2.58-2-2.79M99.35,51.45s11.13,5.63,13.58,4.55c.78-.34,2.69-.39,2.58-1.38s-3-3.64-3-3.64M69.22,24.09a10.73,10.73,0,0,0,10.06,4.77c6.77-.73-4.93-7.8-8.75-6.52M20.62,6.09S37.93,33,71.13,44.92c14.34,5.17,31.92,8.95,52.57,3.66C141,40.88,52.2-9.88,21.85,2.41M68,27,57.62,33.26M45.77,25l19.85-1.47M31.15,6.65,64.78,20.26m-6.15-9.55L67.5,19m1.9-5.31L72,19.11m12.48,7.35,18.86,4.12m-18.93.05,28.86,12.89m-34-11.43,3.41,11.78m-10-13.7L68.06,39.1M76.66,20l1.22-3.21M80.06,22l7.23-.78m-76.88,93s-47.08,33.49,64,40.56c14.43,1.33,99.68-11.64,64.15-40.87M27.12,75.47A103,103,0,0,0,66.36,87.38c11.74,1.08,26.59.74,40-5.43M35.05,53.46S16.72,58.14,9.44,75.88c-5.1,12.41-2.54,33.73,7.64,55.3M115.52,55s45.49,10.36,15.6,75.29M113.77,76.94a8.59,8.59,0,0,1-2.25,2'
    const segments = this.splitPath(numberOfSegments, dValue)
    return (
      <svg
        viewBox="0 0 147.66 155.36"
        preserveAspectRatio="xMidYMid"
        className="CheckOutSVG"
      >
        {segments ? (
          segments
        ) : (
          <path
            ref={(node) => (this._path = node)}
            style={{ display: 'none' }}
            d={dValue}
          />
        )}
      </svg>
    )
  }
}

// https://codepen.io/3j/pen/QrOvyO?editors=0010
// https://www.flaticon.com/free-icon/cake_3234260
