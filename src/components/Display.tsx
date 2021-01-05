import styled from "styled-components";

const Container = styled.div`
   grid-column: span 4;
   background: #0008;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 20px;
   font-size: 35px;
   overflow: hidden;
`

interface Props {
   value: string
}

export default function Display(props: Props) {
   return (
      <Container>
         {props.value}
      </Container>
   )
}