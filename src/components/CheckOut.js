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
    return <Spinner segments="15" />
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
      const gapLength = 20
      const segments = []
      for (let i = 0; i < numberOfSegments; i++) {
        segments.push(
          <path
            d={dValue}
            style={{
              stroke: `hsla(${(i * 720) / numberOfSegments}, 40%, 50%, 1)`,
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
      'm487.491 270.372h-20.483v-147.476c-.029-27.138-22.021-49.13-49.159-49.159h-9.012c-4.531-22.172-26.177-36.474-48.35-31.943-16.085 3.287-28.656 15.858-31.943 31.943h-9.975c-3.062-13.16-13.478-26.239-31.103-38.999-9.477-6.797-19.563-12.701-30.13-17.636-2.131-.952-4.567-.952-6.698 0-10.567 4.935-20.653 10.839-30.13 17.636-17.625 12.761-28.041 25.839-31.103 38.999h-9.975c-4.531-22.172-26.177-36.474-48.35-31.943-16.085 3.287-28.656 15.858-31.943 31.943h-9.012c-27.138.029-49.13 22.021-49.159 49.159v147.476h-20.483c-11.313 0-20.483 9.17-20.483 20.483 0 11.312 9.17 20.483 20.483 20.483h146.647l15.106 28.42c1.415 2.681 4.199 4.356 7.23 4.353h39.941v65.545h-16.386c-4.525 0-8.193 3.668-8.193 8.193v24.579h-48.135c-3.031-.004-5.815 1.672-7.23 4.353l-15.106 28.42h-44.233c-4.525 0-8.193 3.668-8.193 8.193s3.668 8.193 8.193 8.193h327.726c4.525 0 8.193-3.668 8.193-8.193s-3.668-8.193-8.193-8.193h-44.1l-14.113-28.246c-1.391-2.774-4.229-4.526-7.333-4.527h-49.159v-24.579c0-4.525-3.668-8.193-8.193-8.193h-16.386v-65.546h40.966c3.031.004 5.815-1.672 7.23-4.353l15.106-28.42h145.623c11.312 0 20.483-9.171 20.483-20.483s-9.171-20.482-20.483-20.482zm-118.8-213.021c10.411.013 19.687 6.574 23.166 16.386h-46.332c3.479-9.812 12.755-16.374 23.166-16.386zm-138.782-9.187c7.637-5.472 15.698-10.325 24.108-14.512 13.58 6.698 40.3 22.941 47.367 40.085h-94.825c4.025-9.863 14.358-19.039 23.35-25.573zm-90.626 9.187c10.411.013 19.687 6.574 23.166 16.386h-46.332c3.479-9.812 12.756-16.374 23.166-16.386zm-49.159 32.772h327.726c18.093.017 32.756 14.68 32.772 32.773h-49.159c-4.525 0-8.193 3.668-8.193 8.193v61.448c0 2.262-1.834 4.097-4.097 4.097-2.262 0-4.097-1.834-4.097-4.097v-61.448c0-4.525-3.668-8.193-8.193-8.193h-24.579c-4.525 0-8.193 3.668-8.193 8.193v77.835c0 2.262-1.834 4.097-4.097 4.097-2.262 0-4.097-1.834-4.097-4.097v-77.835c0-4.525-3.668-8.193-8.193-8.193h-270.372c.017-18.093 14.68-32.756 32.772-32.773zm-32.772 49.159h262.18v69.642c0 11.312 9.171 20.483 20.483 20.483s20.483-9.17 20.483-20.483v-69.642h8.193v53.255c0 11.312 9.17 20.483 20.483 20.483s20.483-9.17 20.483-20.483v-53.255h40.966v131.09h-393.271zm289.893 319.532 8.193 16.386h-202.523l8.705-16.386zm-60.485-32.773v16.386h-65.545v-16.386zm-40.966-16.386v-65.545h16.386v65.545zm68.812-81.931h-120.214l-8.705-16.386h137.624zm172.885-32.773h-467.008c-2.262 0-4.097-1.834-4.097-4.097 0-2.262 1.834-4.097 4.097-4.097h467.008c2.262 0 4.097 1.834 4.097 4.097s-1.834 4.097-4.097 4.097z'
    const segments = this.splitPath(numberOfSegments, dValue)
    return (
      <svg
        viewBox="0 0 1000 1000"
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
