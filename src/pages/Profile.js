import React, { useContext } from 'react'
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

const Profile = () => {
    const user = JSON.parse(Cookies.get('user'))
    const { state, handleFunction } = useContext(GlobalContext);
    const {
        fotoProfil, setFotoProfil
    } = state;
    const { handleEditFoto, handleSubmitFoto } = handleFunction;
    return (
        <>
            <div className="flex flex-col w-full md:space-y-4 md:ml-40 p-8">

                <div className="self-center p-2 text-3xl">
                    Profile
                </div>
                <div className="flex flex-wrap justify-center md:justify-start md:self border-2 shadow-lg p-4 bg-white gap-8 md:pl-16">
                    <div className="justify-center">
                        <img className="h-auto max-w-xs" src="https://media.istockphoto.com/id/1018999828/id/vektor/ikon-profil-avatar-default-tempat-penampung-foto-abu-abu.jpg?s=1024x1024&w=is&k=20&c=HfHK9DxGnhAaq_9CSMLeS779VztAT1CrXoFoBAkNn-8=" alt="image description" />
                    </div>
                    <div className="md:mt-6">
                        <p>Nama : {user.name}</p>
                        <p>Email : {user.email}</p>
                        <p className="border-2 bg-yellow-500 text-white p-1 mt-3 text-center md:mb-10">
                            <Link to="/dashboard/profile/change-password" >Ganti Password
                            </Link>
                        </p>
                        <div>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile