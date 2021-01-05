import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Button from './components/Button'
import Display from './components/Display'

const Calculator = styled.div`
   height: 320px;
   width: 235px;
   border-radius: 5px;
   border: 0;
   display: grid;
   grid-template-columns: repeat(4, 25%);
   grid-template-rows: 1fr repeat(5,48px);
`

const Wrapper = createGlobalStyle`
   body {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #ffffff;
      background-image: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73));
      font-family: Arial, Helvetica, sans-serif;
   }
`

const initialState = {
   clear: false,
   operation: null as null | string,
   values: [0, 0],
   current: 0
}

function App() {
   const [calc, setCalc] = useState(initialState)
   const [display, setDisplay] = useState('0')

   function setOperation(operacao: string) {
      const { current, operation, values } = calc

      if (current === 0) {
         setCalc({ ...calc, operation: operacao, current: 1, clear: true })
      } else {
         const equals = operacao === '='

         switch (operation) {
            case '*':
               values[0] = values[0] * values[1]
               break
            case '+':
               values[0] = values[0] + values[1]
               break
            case '-':
               values[0] = values[0] - values[1]
               break
            case '/':
               values[0] = values[0] / values[1]
               break
            default:
               break
         }

         values[1] = 0
         setDisplay(String(values[0]))
         setCalc({
            operation: equals ? null : operacao,
            current: equals ? 0 : 1,
            clear: !equals,
            values
         })
      }
   }

   function addNumber(digit: string | number) {
      // debugger
      if (digit === '.' && String(display).includes('.')) return

      const clear = display === '0' || calc.clear
      const current = clear ? '' : display
      const displayValue = `${current}${digit}`
      setDisplay(displayValue)
      setCalc({ ...calc, clear: false })

      if (digit !== '.') {
         const values = [...calc.values]
         values[calc.current] = Number(displayValue)
         setCalc({ ...calc, values })
      }
   }

   function clearDisplay() {
      setCalc(initialState)
      setDisplay("0")
   }

   return (
      <>
         <Wrapper />
         <Calculator>
            <Display value={display} />
            <Button label="C" click={clearDisplay} triple />
            <Button label="/" click={setOperation} operation />
            <Button label="7" click={addNumber} />
            <Button label="8" click={addNumber} />
            <Button label="9" click={addNumber} />
            <Button label="*" click={setOperation} operation />
            <Button label="4" click={addNumber} />
            <Button label="5" click={addNumber} />
            <Button label="6" click={addNumber} />
            <Button label="-" click={setOperation} operation />
            <Button label="1" click={addNumber} />
            <Button label="2" click={addNumber} />
            <Button label="3" click={addNumber} />
            <Button label="+" click={setOperation} operation />
            <Button label="0" click={addNumber} double />
            <Button label="." click={addNumber} />
            <Button label="=" click={setOperation} operation />
         </Calculator>
      </>
   );
}

export default App;
