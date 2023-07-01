import styled from "styled-components"

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    
`

const Justified = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const JustifiedSm = styled(Justified)`
  gap: 5px;
`

const ButtonLike = styled(Centered)`
  cursor: pointer;
`


export {
    ButtonLike,
    JustifiedSm,
    Justified,
    Centered
}