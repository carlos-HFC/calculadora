import styled from "styled-components";

const Container = styled.button`
   font-size: 20px;
   background: #f0f0f0;
   border: 0;
   border-right: 1px solid #888;
   border-bottom: 1px solid #888;
   outline: none;
   transition: .3s;

   &:active {
      background: #ccc;
      transition: .3s;
   }

   &.double {
      grid-column: span 2
   }

   &.triple {
      grid-column: span 3
   }

   &.operation {
      background: #fa8231;
      color: #fff;

      &:active {
         background: #fa8231cc;
      }
   }
`

interface Props {
   label: string
   double?: boolean
   triple?: boolean
   operation?: boolean
   click(param?: string | number): void
}

export default function Button(props: Props) {
   let classes = ''
   classes += props.operation ? 'operation' : ''
   classes += props.double ? 'double' : ''
   classes += props.triple ? 'triple' : ''

   return (
      <Container className={classes} onClick={e => props.click && props.click(props.label)}>
         {props.label}
      </Container>
   )
}