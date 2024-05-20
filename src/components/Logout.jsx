import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      // Clear cookies
      localStorage.clear()
     

      // Redirect to the desired location
      navigate('/');
    };

    logout();
  }, [navigate]);

  return null; // or you can render a loading spinner or a message if needed
};

export default Logout;