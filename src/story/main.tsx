import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../App.css'

// Placeholder until the story is written. It will explain the physics and
// mathematics behind the simulation for any reader, as ORBITAL's story does.
function Story() {
  return (
    <main className="placeholder">
      <p className="label">The story · In development</p>
      <h1>From sunlight to a school that stays switched on</h1>
      <p className="lede">
        A visual walk through the physics and mathematics behind the simulation: how sunlight becomes electricity, how a
        battery stores it, and how a school's demand is met when the grid fails.
      </p>
      <p className="note">
        <a href="/">Back to the project</a>
      </p>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Story />
  </StrictMode>,
)
