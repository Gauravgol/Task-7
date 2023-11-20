import { useState } from 'react';
import NavBar from './Components/NavBar';
import Users from './Components/Users';
import Login from './Components/Login';  // Import the Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to set login state to true
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        // If logged in, display NavBar and Users components
        <>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <NavBar />
          </div>
          <Users />
        </>
      ) : (
        // If not logged in, display the Login component
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
