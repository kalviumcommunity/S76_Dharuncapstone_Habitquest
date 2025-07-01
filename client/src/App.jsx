import { useState } from 'react'
import './App.css'

function App() {
  const [habits, setHabits] = useState([])
  const [newHabit, setNewHabit] = useState('')

  const addHabit = (e) => {
    e.preventDefault()
    if (newHabit.trim() === '') return
    setHabits([...habits, { name: newHabit, streak: 0, completed: false }])
    setNewHabit('')
  }

  const toggleComplete = (idx) => {
    setHabits(habits.map((h, i) =>
      i === idx
        ? { ...h, completed: !h.completed, streak: h.completed ? h.streak : h.streak + 1 }
        : h
    ))
  }

  const deleteHabit = (idx) => {
    setHabits(habits.filter((_, i) => i !== idx))
  }

  return (
    <div className="container">
      <h1>🏆 Habit Quest</h1>
      <p>Gamify your habits! Add habits, track streaks, and level up your life.</p>
      <form onSubmit={addHabit} className="habit-form">
        <input
          type="text"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={e => setNewHabit(e.target.value)}
        />
        <button type="submit">Add Habit</button>
      </form>
      <ul className="habit-list">
        {habits.length === 0 && <li>No habits yet. Start your quest!</li>}
        {habits.map((habit, idx) => (
          <li key={idx} className={habit.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(idx)}>
              {habit.completed ? '✅' : '⬜'} {habit.name} (Streak: {habit.streak})
            </span>
            <button onClick={() => deleteHabit(idx)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

