import {useEffect} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/apiHooks';

const Layout = () => {
  const navigate = useNavigate();
  const {getUserByToken} = useUser();
  const location = useLocation();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      const user = await getUserByToken(userToken);
      if (user) {
        const target = location.pathname === '/' ? '/home' : location.pathname;
        navigate(target);
        return;
      }
    }
    navigate('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []); // jos taulukko tyhjä, ajetaan vain kerran

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home"> Home</Link>
          </li>
          <li>
            <Link to="/profile"> Profile</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
