import React, { useContext } from "react";
import Cookies from "js-cookie";
import { GlobalContext } from "../Context/GlobalContext";
//import {Card, Table, Button} from 'flowbite-react';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const user = JSON.parse(Cookies.get('user'))
  //console.log(user);
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    pass, setPass
  } = state;
  const { handleChangePass, handlePass } = handleFunction;
  return (
    <>
      <div className="flex flex-col w-full md:ml-40 md:space-y-4">
        <div className="h-screen px-4 pb-24 overflow-auto md:px-6 self-center">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mt-4">
            Welcome back, {user.name}
          </h1>
        </div>

      </div>

    </>
  );
};

export default Dashboard;
