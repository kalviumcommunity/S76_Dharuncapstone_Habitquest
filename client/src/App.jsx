import { useState, useEffect } from 'react';
import './App.css';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import UserProgress from './components/UserProgress';
import Header from './components/Header';

function App() {
  const [habits, setHabits] = useState([]);
  const [userXP, setUserXP] = useState(0);
  const [userLevel, setUserLevel] = useState(1);

  // Load habits from localStorage on mount
  useEffect(() => {
    const savedHabits = localStorage.getItem('habits');
    const savedXP = localStorage.getItem('userXP');
    const savedLevel = localStorage.getItem('userLevel');
    
    if (savedHabits) setHabits(JSON.parse(savedHabits));
    if (savedXP) setUserXP(Number(savedXP));
    if (savedLevel) setUserLevel(Number(savedLevel));
  }, []);

  // Save to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
    localStorage.setItem('userXP', userXP.toString());
    localStorage.setItem('userLevel', userLevel.toString());
  }, [habits, userXP, userLevel]);

  const addHabit = (habit) => {
    const newHabit = {
      id: Date.now(),
      ...habit,
      streak: 0,
      completed: false,
      completedDates: []
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const completeHabit = (id) => {
    const today = new Date().toDateString();
    setHabits(habits.map(habit => {
      if (habit.id === id && !habit.completedDates.includes(today)) {
        const xpGain = 10;
        setUserXP(prevXP => {
          const newXP = prevXP + xpGain;
          // Level up every 100 XP
          if (newXP >= userLevel * 100) {
            setUserLevel(prevLevel => prevLevel + 1);
          }
          return newXP;
        });
        
        return {
          ...habit,
          streak: habit.streak + 1,
          completed: true,
          completedDates: [...habit.completedDates, today]
        };
      }
      return habit;
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <UserProgress xp={userXP} level={userLevel} />
        <AddHabitForm onAddHabit={addHabit} />
        <HabitList 
          habits={habits} 
          onDelete={deleteHabit} 
          onComplete={completeHabit} 
        />
      </div>
    </div>
  );
}

export default App;

