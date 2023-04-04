import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const Content = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus } = state;
  const { fetchData, handleDetail } = handleFunction;
  const location = useLocation()
  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
      let result =
        data !== null &&
        data.map((res, index) => {
          let {
            company_city,
            company_image_url,
            company_name,
            id,
            job_description,
            job_qualification,
            job_status,
            job_tenure,
            job_type,
            salary_max,
            salary_min,
            title,
          } = res;

          return (
            company_city,
            company_image_url,
            company_name,
            id,
            job_description,
            job_qualification,
            job_status,
            job_tenure,
            job_type,
            salary_max,
            salary_min,
            title
          );
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus, fetchData]);

  return (
    <>
      <section id="content">
        <div className="border-red-500 my-2 py-4 px-24">
          <div className="border-green-500">
            <h1 className="border-b-4 text-center text-3xl mb-6 pb-4">
              Lowongan{" "}
            </h1>
            <div className="grid md:grid-cols-3 gap-4 grid-cols-1 mb-2">
              {data !== null &&
                data.map((res, index) => {
                  return (
                    <>
                      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <p >
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {res.title}
                          </h5>
                        </p>
                        <div className="flex flex-col mb-2">
                          <div className="flex relative ">

                            {res.company_name}
                          </div>
                        </div>
                        <div className="flex flex-col mb-2">
                          <div className="flex relative ">
                            <span className="inline-flex  items-center mr-1 bg-white  border-gray-300 text-gray-500 shadow-sm text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16"> <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z" /> </svg>
                            </span>
                            {res.company_city}
                          </div>
                        </div>
                        <div className="flex flex-col mb-2">
                          <div className="flex relative ">
                            <span className="inline-flex  items-center mr-1 bg-white  border-gray-300 text-gray-500 shadow-sm text-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16"> <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" /> </svg>
                            </span>
                            {res.job_type}
                          </div>
                        </div>
                        <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
                          {res.job_description}
                        </p>
                        <button
                          onClick={handleDetail}
                          value={res.id}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Detail Pekerjaan
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className="border-blue-500 grid mb-2">
              <div className="text-center">
                {location.pathname === "/" ?
                  <Link to="/FindJob">
                    <button className="text-sm rounded bg-blue-500 text-white py-1.5 px-4 mt-6 ">
                      Lihat Selengkapnya
                    </button>
                  </Link>
                  :
                  <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px mt-4">
                      <li>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                      </li>
                      <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                      </li>
                      <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                      </li>
                    </ul>
                  </nav>
                }
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Content;
