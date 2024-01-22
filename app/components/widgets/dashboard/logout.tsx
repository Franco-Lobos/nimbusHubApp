import { Link } from "@remix-run/react";
import { buttonClass } from "~/components/constants/styles";
import { FaSignOutAlt } from 'react-icons/fa/index.js';

const LogOutButton = () => {
    return(
        <Link to="/dashboard/logout" className={`${buttonClass} absolute right-6 top-8 `}>
        <FaSignOutAlt className={`
          text-blue/80 dark:text-themeWhite/80 w-11 h-11  opacity-60 p-2`}
        ></FaSignOutAlt>
      </Link>
    )
}

export default LogOutButton;