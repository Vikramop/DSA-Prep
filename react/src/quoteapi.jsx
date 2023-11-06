import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const url = 'https://api.adviceslip.com/advice';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Quote of the day</h2>
      <h1>{advice}</h1>
    </>
  );
}

export default App;
