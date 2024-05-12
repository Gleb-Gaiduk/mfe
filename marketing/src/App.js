import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Landing } from './components/Landing'
import { Pricing } from './components/Pricing'

function App() {
  return (
    <BrowserRouter>
       <ChakraProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
       </ChakraProvider>
    </BrowserRouter>
  )
}

export { App }