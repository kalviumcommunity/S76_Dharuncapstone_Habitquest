import HabitCard from './HabitCard';
import './HabitList.css';

function HabitList({ habits, onDelete, onComplete }) {
  if (habits.length === 0) {
    return (
      <div className="empty-state">
        <p>🎯 No quests yet! Create your first quest to start your journey.</p>
      </div>
    );
  }

  return (
    <div className="habit-list">
      <h2>Your Active Quests</h2>
      <div className="habits-grid">
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default HabitList;
