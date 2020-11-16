import React from 'react'

export default function useHover() {
  const [hovering, setHovering] = React.useState(false)

  const onMouseOver = () => setHovering(true)
  const onMouseOut = () => setHovering(false)

  const attr = {
    onMouseOut: onMouseOut,
    onMouseOver: onMouseOver
  }

  return [hovering, attr]
}

// export default class Hover extends React.Component {
//   state = { hovering: false }
//   mouseOver = () => this.setState({ hovering: true })
//   mouseOut = () => this.setState({ hovering: false })
//   render () {
//     return (
//       <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
//         {this.props.children(this.state.hovering)}
//       </div>
//     )
//   }
// }
