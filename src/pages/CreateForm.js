import React,{useEffect,useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const CreateForm = () => {
    let { IdData } = useParams();
    const { state, handleFunction } = useContext(GlobalContext);
    const { fetchStatus, setFetchStatus, input, setInput } = state;
    const { handleInput, handleSubmit, fetchData } = handleFunction;
    useEffect(() => {
        if (IdData !== undefined) {
          axios
            .get(
              `https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`
            )
            .then((res) => {
              let data = res.data;
              console.log(data)
              setInput({
                title: data.title,
                job_description: data.job_description,
                job_qualification: data.job_qualification,
                job_type: data.job_type,
                job_tenure: data.job_tenure,
                job_status: data.job_status,
                company_name: data.company_name,
                company_image_url: data.company_image_url,
                company_city: data.company_city,
                salary_min: data.salary_min,
                salary_max: data.salary_max
              });
            });
        }
      }, []);
    return (
        <>
            <div className="flex flex-col w-full md:space-y-4 md:ml-40 p-8">
            <h1 className="self-center p-2 text-3xl">
                    Form Lowongan Pekerjaan
                </h1>
                <div className="border-2 shadow-lg p-4 bg-white">
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Title
                        </label>
                        <input type="text" id="title" name="title" onChange={handleInput} value={input.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Pekerjaan" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Company Name
                        </label>
                        <input type="text" id="company_name" name="company_name" onChange={handleInput} value={input.company_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama perusahaan" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="company_image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Company Image
                        </label>
                        <input type="text" id="company_image_url" name="company_image_url" onChange={handleInput} value={input.company_image_url} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Logo perusahaan" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="company_city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Company City
                        </label>
                        <input type="text" id="company_city" name="company_city" onChange={handleInput} value={input.company_city} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kota perusahaan" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="job_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Job Description
                        </label>
                        <textarea type="text" id="job_description" name="job_description" onChange={handleInput} value={input.job_description} rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="job_qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Job Qualification
                        </label>
                        <textarea type="text" id="job_qualification" name="job_qualification" onChange={handleInput} value={input.job_qualification} rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="job_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Job Type
                        </label>
                        <input type="text" id="job_type" name="job_type" onChange={handleInput} value={input.job_type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tipe Pekerjaan" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="job_tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Job Tenure
                        </label>
                        <input type="text" id="job_tenure" name="job_tenure" onChange={handleInput} value={input.job_tenure} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tipe Kontrak" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="salary_min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Min Salary
                        </label>
                        <input type="number" id="salary_min" name="salary_min" onChange={handleInput} value={input.salary_min} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gaji minimal" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="salary_max" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Max Salary
                        </label>
                        <input type="number" id="salary_max" name="salary_max" onChange={handleInput} value={input.salary_max} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gaji maksimal" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default CreateForm