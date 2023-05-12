import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FlexContainer as Container, FlexItem} from '../UI'
import {ExplorerBroadcast, ExplorerSubscriber} from './Broadcasts'

import LeftPanel from './LeftPanel.js'
import RightPanel from './RightPanel.js'

const Item = styled(FlexItem)`
  background: rgba(255, 255, 255, 0.4);
`

class ExplorerLayout extends React.Component {
  static propTypes = {
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func
  }

  static defaultProps = {
    renderLeft: () => {},
    renderRight: () => {}
  }

  render() {
    return (
      <Container height="100vh" width="100vw">
        <Item grow={false} shrink={false} basis="50%">
          {this.props.renderLeft()}
        </Item>
        <Item grow={false} shrink={false} basis="50%">
          {this.props.renderRight()}
        </Item>
      </Container>
    )
  }
}

export class ExplorerProvider extends React.Component {
  state = {loading: true}

  fetchJoke = () => {
    fetch('http://api.icndb.com/jokes/random')
      .then(res => res.json())
      .then(
        resp => this.setState({loading: false, joke: resp.value.joke}),
        error => this.setState({loading: false, error})
      )
  }

  componentDidMount() {
    this.fetchJoke()
  }

  render() {
    return <ExplorerBroadcast value={this.state}>{this.props.children}</ExplorerBroadcast>
  }
}

class Explorer extends React.Component {
  render() {
    return (
      <ExplorerProvider>
        <ExplorerLayout
          renderLeft={() => <ExplorerSubscriber>{props => <LeftPanel {...props} />}</ExplorerSubscriber>}
          renderRight={() => <ExplorerSubscriber>{props => <RightPanel {...props} />}</ExplorerSubscriber>}
        />
      </ExplorerProvider>
    )
  }
}

export default Explorer
