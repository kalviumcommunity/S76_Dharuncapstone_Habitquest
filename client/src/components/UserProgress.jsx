import './UserProgress.css';

function UserProgress({ xp, level }) {
  const xpForNextLevel = level * 100;
  const progressPercentage = (xp / xpForNextLevel) * 100;

  return (
    <div className="user-progress">
      <div className="level-badge">
        <span className="level-number">Lvl {level}</span>
      </div>
      <div className="xp-info">
        <p className="xp-text">{xp} / {xpForNextLevel} XP</p>
        <div className="xp-bar">
          <div 
            className="xp-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UserProgress;
