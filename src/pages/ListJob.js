import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const ListJob = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus, search, accord, filter } = state;
  const { fetchData, handleDetail, handleEdit, handleDelete, handleChangeSearch, handleSearch, handleAccord, handleChangeFilter, handleFilter } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus, fetchData]);
  return (
    <>
      <div className="flex flex-col justify-center w-full md:space-y-4 md:ml-40 p-8 overflow-x-auto">
        <form onSubmit={handleSearch} className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Cari Judul Pekerjaan
          </label>
          <div className="w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
             
            </div>
            <input
              type="search"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari Judul Pekerjaan"
              value={search}
              onChange={handleChangeSearch}
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <button className="p-1 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setFetchStatus(true) && setData(null)}>
          reset data
        </button>
        </form>
        
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            onClick={handleAccord}
            class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-2 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>Filter</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0 rotate-180"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div className={`p-5 border w-full bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-2
              ${accord ? "block" : "hidden"}`}>
          <form onSubmit={handleFilter}>
            <div className="mb-6">
              <label
                htmlFor="company city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kota
              </label>
              <input
                type="search"
                id="company city"
                onChange={handleChangeFilter}
                value={filter.company_city}
                name="company_city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari lowongan berdasarkan kota"

              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="company_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Perusahaan
              </label>
              <input
                type="search"
                id="company_name"
                onChange={handleChangeFilter}
                value={filter.company_name}
                name="company_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari lowongan berdasarkan nama perusahaan "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="salary_min"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipe Pekerjaan
              </label>
              <input
                type="search"
                id="salary_min"
                onChange={handleChangeFilter}
                value={filter.job_type}
                name="job_type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari lowongan berdasarkan tipe pekerjaan"

              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button className="p-1 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  
            onClick={() => setFetchStatus(true) && setData(null)}>
             reset data
            </button>
          </form>
        </div>
        <h1 className="self-center p-2 text-3xl">
          Daftar Lowongan Pekerjaan
        </h1>
        <table className="table table-responsive w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Pekerjaan
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Perusahaan
              </th>
              <th scope="col" className="px-6 py-3">
                Kota Perusahaan
              </th>
              <th scope="col" className="px-6 py-3">
                Tipe Pekerjaan
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data != null && data.map((res, index) => {
              return (
                <>
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {res.title}
                    </th>
                    <td className="px-6 py-4">
                      {res.company_name}
                    </td>
                    <td className="px-6 py-4">
                      {res.company_city}
                    </td>
                    <td className="px-6 py-4">
                      {res.job_type}
                    </td>
                    <td className="px-2 py-4 text-center">
                      <button type="button" value={res.id} onClick={handleEdit} className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-2">Edit</button>
                      <button type="button" value={res.id} onClick={handleDelete} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                    </td>
                  </tr>
                </>
              )
            })}


          </tbody>
        </table>

      </div>

    </>
  )
}

export default ListJob