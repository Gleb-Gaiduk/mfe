import { createRoot } from 'react-dom/client'
import * as React from 'react'
import { App } from './App'

const mount = (container) => {
  const root = createRoot(container)
  root.render(<App />)
}

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('_marketing-dev-root')
  if (container) mount(container)
}

export { mount }