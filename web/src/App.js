// App.js
import React, { useState } from "react";
import CardList from "./styles/CardList";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import GyroscopeCard from "./components/GyroscopeCard";
import AccelerometerCard from "./components/AccelerometerCard";
import SensorChart from "./components/SensorChart";
import LatestDataCard from "./components/LatestDataCard"; // Importa el nuevo componente

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Actualizar el estado para indicar que el usuario ha iniciado sesión
    setLoggedIn(true);
  };

  return (
    <div>
      <Navbar />
      {isLoggedIn ? (
        // Mostrar la aplicación principal si el usuario ha iniciado sesión
        <div>
          <CardList>
            <GyroscopeCard />
            <AccelerometerCard />
            {/* Agrega el componente LatestDataCard */}
            <LatestDataCard />
          </CardList>

          <div>
            <h1>Gráfico de Giroscopio</h1>
            <SensorChart sensorDataKeys={["GyroZ", "GyroY", "GyroX"]} label="Gyro" />

            <h1>Gráfico de Acelerómetro</h1>
            <SensorChart sensorDataKeys={["AccZ", "AccY", "AccX"]} label="Acc" />
          </div>
        </div>
      ) : (
        // Mostrar el formulario de inicio de sesión si el usuario no ha iniciado sesión
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
