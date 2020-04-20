import React, { useState } from 'react';
import NavBar from './router/NavBar';
import { LoginContext } from './context/LoginContext';

function App() {

  const [user, setUser] = useState({ isLogin: false })

  return (
    <div>
      <LoginContext.Provider value={{ user, setUser }}>
        <NavBar />
      </LoginContext.Provider>
    </div>
  );
}

export default App;