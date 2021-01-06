import styled from 'styled-components'

const Divider = styled.span`
  display: flex;
  flex-grow: 1;
  height: 0px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderLightest};
  border-top: 1px solid ${({theme}) => theme.colors.borderDark};
`

export default Divider