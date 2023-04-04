import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';
import axios from 'axios';

const DetailJob = () => {
    let { IdData } = useParams()
    const { state, handleFunction, fetchData } = useContext(GlobalContext);
    const { detail, setDetail, fetchStatus, setFetchStatus, input, setInput } = state;

    useEffect(() => {
        if (IdData !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
                .then((res) => {
                    //console.log(res.data)
                    let data = res.data;
                    setDetail({ ...data })

                })
        }
        setFetchStatus(false)
    }, [fetchStatus, setFetchStatus, fetchData]);

    const text = detail.job_qualification;
    //const target = '-'
    //const result = text.replace(new RegExp(target, 'g'), `<br />${target}`)
    //const replace = () =>{
    //return text.replace(/-/g, "<br />-")
    //}

    return (
        <>
            <section id="detail-job">
                <div className="w-full flex flex-col h-screen px-24">
                    <div className="flex-grow ">
                        <div className="text-center my-8">
                            <h2 className="text-3xl">Detail Pekerjaan</h2>
                        </div>
                        <div className="mb-4" >
                            <div >
                                <h1 className="text-xl font-bold">{detail.title}</h1>
                            </div>
                            <div >
                                <p className="text-sm">{detail.company_name}</p>
                            </div>
                            <div >
                                <p className="text-sm">{detail.job_tenure}</p>
                            </div>
                            <div >
                                <p className="text-sm">{detail.job_type}</p>
                            </div>
                            <div >
                                <p className="text-sm">{detail.company_city}</p>
                            </div>
                            <div >
                                <p className="text-sm">{`Rp. ${detail.salary_min}`} - {`Rp. ${detail.salary_max}`}</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div>
                                <h2 className="text-xl font-bold">Kualifikasi</h2>
                            </div>
                            <div >
                                <p className="text-sm">{detail.job_qualification}</p>
                            </div>
                        </div>
                        <div>
                            <div >
                                <h2 className="text-xl font-bold">Deskripsi Pekerjaan</h2>
                            </div>
                            <div >
                                <p className="text-sm">{detail.job_description}</p>
                            </div>
                        </div>

                        {/*
                            title : string, Contoh value -> FrontendDeveloper
                            job_description : string, Contoh value ->  Melakukan implementasi tampilan web dll
                            job_qualification : string, Contoh value -> Harus bisa React dll
                            job_type : string, Contoh value -> onSite/work from home/hybird
                            job_tenure : string, Contoh value -> kontrak, magang dll
                            job_status : integer,  Contoh value -> 0 dan 1. 0 untuk Ditutup, 1 untuk Dibuka
                            company_name : string, Contoh value -> Google
                            company_image_url : string, Contoh value -> Bisa cari di google atau www.istockphoto.com dengan keyword company logo, klik kanan pada gambar lalu copy image address
                            company_city : string, Contoh value -> Jakarta
                            salary_min : integer, Contoh value -> 9000000
                            salary_max : integer, Contoh value -> 10000000*/
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailJob;