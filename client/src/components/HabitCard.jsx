import './HabitCard.css';

function HabitCard({ habit, onDelete, onComplete }) {
  const isCompletedToday = () => {
    const today = new Date().toDateString();
    return habit.completedDates && habit.completedDates.includes(today);
  };

  const completed = isCompletedToday();

  return (
    <div className={`habit-card ${completed ? 'completed' : ''}`}>
      <div className="habit-header">
        <h3>{habit.title}</h3>
        <button 
          className="delete-btn"
          onClick={() => onDelete(habit.id)}
          title="Delete quest"
        >
          🗑️
        </button>
      </div>
      
      <div className="habit-info">
        <div className="info-item">
          <span className="label">Frequency:</span>
          <span className="value">{habit.frequency}</span>
        </div>
        <div className="info-item">
          <span className="label">Streak:</span>
          <span className="value streak">🔥 {habit.streak} days</span>
        </div>
      </div>

      <button
        className={`complete-btn ${completed ? 'completed' : ''}`}
        onClick={() => onComplete(habit.id)}
        disabled={completed}
      >
        {completed ? '✅ Completed Today!' : '✨ Complete Quest'}
      </button>
    </div>
  );
}

export default HabitCard;
