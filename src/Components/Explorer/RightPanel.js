import React from 'react'

class RightPanel extends React.Component {
  render() {
    return this.props.joke || 'Loading'
  }
}

export default RightPanel
