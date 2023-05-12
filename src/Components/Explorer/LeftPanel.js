import React from 'react'

class LeftPanel extends React.Component {
  render() {
    return this.props.joke || 'Loading'
  }
}

export default LeftPanel
