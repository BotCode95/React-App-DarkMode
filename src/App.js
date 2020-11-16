import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  //  const initialState = {
     
  //  }
  /**
   * Determina si el checkbox deberia estar checkeado basado en el contenido del localstorage
   */
 const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false)


/* cada vez que el estado checked cambie, actualiza la propiedad
  data-theme en el HTML para que use el tema que estamos almacenando
  en el localStorage
*/
useEffect(() => {
  document.getElementsByTagName("HTML")[0]
  .setAttribute("data-theme", localStorage.getItem("theme"))
}, [checked])

/* Actualiza el estado checked y el contenido de nuestro objeto 
theme en el localStorage basados en el checkbox*/
const toggleThemeChange = () => {
  if(checked === false) {
    localStorage.setItem("theme", "dark");
    setChecked(true)
  } else {
    localStorage.setItem("theme", "light");
    setChecked(false);
  }
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          click para cambiar el tema
        </p>
        <label>
          <input 
            type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
        </label>
      </header>
    </div>
  );
}
  

export default App;
