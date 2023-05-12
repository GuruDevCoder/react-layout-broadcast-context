import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  height: ${props => (props.height ? props.height : '100vh')};
  width: ${props => (props.width ? props.width : '100vw')};

  &:before {
    content: '';
    background-image: url('http://c8.alamy.com/comp/DY553G/portrait-of-young-businesswoman-looking-out-of-office-window-DY553G.jpg');
    background-size: cover;
    filter: blur(15px);
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -1;
    opacity: 0.4;
  }
`

FlexContainer.displayName = 'FlexContainer'

const FlexItem = styled.div`
  flex: ${props => `${props.grow ? 1 : 0} ${props.shrink ? 1 : 0} ${props.basis ? props.basis : 'auto'}`};
  max-width: ${props => `${!props.grow && !props.shrink && props.basis ? props.basis : 'auto'}`};
`
FlexItem.displayName = 'Item'

export {FlexContainer, FlexItem}
