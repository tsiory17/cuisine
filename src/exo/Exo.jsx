import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Main from "./Main.jsx"
import List from "./Main.jsx"
import State from './State.jsx'
import Ternary from './Ternary.jsx'
import Complex from './Complex.jsx'
import FormApp from './FormApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <State /> */}
    {/* <Main inside= "I love you" /> */}
   
    {/* <Ternary /> */}
    {/* <Complex /> */}
    <FormApp />
  </StrictMode>
)
