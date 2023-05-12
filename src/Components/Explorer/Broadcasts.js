import React from 'react'
import {Broadcast, Subscriber} from 'react-broadcast'

const ExplorerChannel = 'explorer'

export const ExplorerBroadcast = props => <Broadcast {...props} channel={ExplorerChannel} />

export const ExplorerSubscriber = props => <Subscriber {...props} channel={ExplorerChannel} />
