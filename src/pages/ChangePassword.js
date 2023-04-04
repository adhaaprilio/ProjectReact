import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalContext';

const ChangePassword = () => {
    const { state, handleFunction } = useContext(GlobalContext);
    const { pass,setPass } = state;
    const { handlePass, handleChangePass } = handleFunction;
    return (
        <>
            <div className="flex flex-col w-full md:space-y-4 md:ml-40 p-8">
                <div className="self-center p-2 text-3xl">
                    Ganti Password
                </div>
                <div className="border-2 shadow-lg p-4 bg-white">
                <form onSubmit={handlePass}>
                    <div className="mb-6">
                        <label htmlFor="current_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password Lama
                        </label>
                        <input type="password" id="current_password" name="current_password" onChange={handleChangePass} value={pass.current_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan password lama" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password Baru
                        </label>
                        <input type="password" id="new_password" name="new_password" onChange={handleChangePass} value={pass.new_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan password baru" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="new_confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Konfirmasi Password Baru
                        </label>
                        <input type="password" id="new_confirm_password" name="new_confirm_password" onChange={handleChangePass} value={pass.new_confirm_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="konfirmasi password" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;