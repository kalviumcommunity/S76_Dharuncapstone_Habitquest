import { useState } from 'react';
import './AddHabitForm.css';

function AddHabitForm({ onAddHabit }) {
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddHabit({ title, frequency });
      setTitle('');
      setFrequency('daily');
      setShowForm(false);
    }
  };

  return (
    <div className="add-habit-container">
      {!showForm ? (
        <button 
          className="show-form-btn"
          onClick={() => setShowForm(true)}
        >
          ➕ Add New Quest
        </button>
      ) : (
        <form className="add-habit-form" onSubmit={handleSubmit}>
          <h3>Create New Quest</h3>
          <div className="form-group">
            <label htmlFor="habit-title">Quest Name:</label>
            <input
              id="habit-title"
              type="text"
              placeholder="e.g., Morning Exercise, Read 30 mins"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="habit-frequency">Frequency:</label>
            <select
              id="habit-frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Create Quest</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddHabitForm;
