// src/components/Sidebar.tsx
import { Link} from '@remix-run/react';


const Navigator = () => (
  <nav className="bg-themeBlack text-white p-4 w-full absolute bottom-0 left-0 right-0">
    <ul className="flex felx-row justify-between items-center w-full">
      <li>
        <Link to="/dashboard/forecast" className="hover:text-gold">
          Forecast
        </Link>
      </li>
      <li>
        <Link to="/dashboard/realTime" className="hover:text-gold">
          Real Time Weather
        </Link>
      </li>
      <li>
        <Link to="/dashboard/recentHistory" className="hover:text-gold">
          Recent History
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigator;

