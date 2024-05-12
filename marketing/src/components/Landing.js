import * as React from "react"
import { Link } from "react-router-dom"

function Landing() {
  return (
    <main>
      Landing
      <br />
      <Link to="/pricing">Go to the Pricing</Link>
    </main>
  )
}

export { Landing }