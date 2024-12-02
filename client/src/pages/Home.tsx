import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Cupcake from '../components/Cupcake';

function Home() {
  interface Cupcake {
    id: number;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
  }

  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);

  useEffect(() => {
    fetch('http://localhost:3310/api/cupcakes')
      .then(response => response.json())
      .then(data => setCupcakes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Cupcake Union</h1>
      <div className="home-cupcake">
        {cupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
      </div>
      <div className="home-content">
        <p>
          Welcome to the Cupcake Union 🧁 <br />
          On this application, you will:
        </p>
        <p>
          ✔️ Display cupcakes from an API <br />
          ✔️ Filter them by accessory
        </p>
        <p>
          Click on <Link to="/instructions">Instructions</Link> to start!
        </p>
      </div>
    </>
  );
}

export default Home;
