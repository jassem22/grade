import { useState } from 'react';

function App() {
  const [score, setScore] = useState('');
  const [grade, setGrade] = useState('');

  const calculateGrade = () => {
    const numScore = parseInt(score);
    
    if (isNaN(numScore)) {
      setGrade('Please enter a number');
      return;
    }

    if (numScore < 0 || numScore > 100) {
      setGrade('Score must be 0-100');
      return;
    }

    if (numScore >= 90) setGrade('A');
    else if (numScore >= 80) setGrade('B');
    else if (numScore >= 70) setGrade('C');
    else if (numScore >= 60) setGrade('D');
    else setGrade('F');
  };

  return (
    <div>
      <h1>Grade Calculator</h1>
      <div>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Enter score (0-100)"
          min="0"
          max="100"
        />
      </div>
      <div>
        <button onClick={calculateGrade}>Get Grade</button>
      </div>
      {grade && <div><h3>Your Grade: {grade}</h3></div>}
    </div>
  );
}

export default App;