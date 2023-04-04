import React, { createContext, useState } from "react";
import Cookies from 'js-cookie'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [detail, setDetail] = useState({

  })
  const [fetchStatus, setFetchStatus] = useState(true);
  const [search, setSearch] = useState("");
  const [accord, setAccord] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [popupNavbar, setpopUpNavbar] = useState(false);
  const [currentId, setCurrentId] = useState(-1);
  const navigate = useNavigate();
  const [fotoProfil, setFotoProfil] = useState({
    image_url: ""
  })
  const [register, setRegister] = useState({
    name: "",
    image_url: "",
    email: "",
    password: ""
  })
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const [pass, setPass] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password:""
  })
  const [filter, setFilter] = useState({
    company_city: "",
    company_name: "",
    salary_min: "",
  });
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: ""
  })

  const handleInput = (event) =>{
    setInput({ ...input, [event.target.name]: event.target.value });
  }
  const handleEdit = (event) =>{
    let idData = parseInt(event.currentTarget.value);
    //console.log(idData)
    setCurrentId(idData);
    navigate(`/dashboard/list-job-vacancy/edit/${idData}`)
  }
  const handleEditFoto = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    if (name === "image_url") {
      setFotoProfil({ ...fotoProfil, name: value });
    }
  }
  const handleSubmitFoto =(event) =>{
    event.preventDefault()
    let idData = parseInt(event.target.value);
    console.log(idData)
    let{image_url} = fotoProfil;
    axios.put(`https://dev-example.sanbercloud.com/api/register/${idData}`,{
       image_url
      },{ headers: { "Authorization": "Bearer " + Cookies.get('token') } })
      .then((res)=>{
        setFetchStatus(true)
        navigate("/dashboard/profile")
      })
  }
  const handleDelete = (event) =>{
    let idData = parseInt(event.currentTarget.value);
    axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
    { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
    .then ((res) =>{
      setFetchStatus(true)
    })

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let { title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max
    } = input;
    if (currentId === -1) {
      axios.post("https://dev-example.sanbercloud.com/api/job-vacancy", {
        title,
        job_description,
        job_qualification,
        job_type,
        job_tenure,
        job_status,
        company_name,
        company_image_url,
        company_city,
        salary_min,
        salary_max
      }, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
        .then((res) => {
          setFetchStatus(true);
          alert("Berhasil Tambah Data")
          navigate("/dashboard/list-job-vacancy")
        })
    }
    else {
      axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,{
        title,
        job_description,
        job_qualification,
        job_type,
        job_tenure,
        job_status,
        company_name,
        company_image_url,
        company_city,
        salary_min,
        salary_max
      },{ headers: { "Authorization": "Bearer " + Cookies.get('token') } })
      .then((res)=>{
        setFetchStatus(true);
        alert("Berhasil update data!")
        navigate("/dashboard/list-job-vacancy")
      })
    }
    setCurrentId(-1);
    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: ""
      });
  }

  const handleChangeLogin = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  }
  const handleLogin = (event) => {
    event.preventDefault();
    //console.log(login)
    let { email, password } = login
    axios.post('https://dev-example.sanbercloud.com/api/login', { email, password })
      .then((event) => {
        let data = event.data
        let { token, user } = data
        console.log(token)
        console.log(user)
        Cookies.set('token', token, { expires: 1 })
        Cookies.set('user', JSON.stringify(user), { expires: 1 })
        navigate("/Dashboard")
      })
  }
  const handleChangeRegister = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  }
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(register)
    let { name, image_url, email, password } = register
    axios.post('https://dev-example.sanbercloud.com/api/register', { name, image_url, email, password })
      .then((event) => {
        let data = event.data
        let { token, user } = data
        console.log(token)
        console.log(user)
        Cookies.set('token', token, { expires: 1 })
        Cookies.set('user', JSON.stringify(user), { expires: 1 })
        navigate("/Dashboard")
      })
  }
  const handleChangePass = (event) => {
    setPass({ ...pass, [event.target.name]: event.target.value });
  }
  const handlePass = (event) => {
    event.preventDefault();
    console.log(pass)
    let {current_password, new_password, new_confirm_password} = pass;
    axios.post("https://dev-example.sanbercloud.com/api/change-password",{
      current_password, new_password, new_confirm_password
    },{ headers: { "Authorization": "Bearer " + Cookies.get('token') } })
    .then((res) =>{
      alert("Berhasil Ganti Password")
      navigate("/dashboard/profile")
    })
    setPass({
      current_password: "",
      new_password: "",
      new_confirm_password:""
    });
  }
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    navigate("/")
  }
  const handleChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(search);
    let fetchData = async () => {
      setData(null);
      let { data } = await axios.get(
        "https://dev-example.sanbercloud.com/api/job-vacancy"
      );
      let dataJob = data.data;
      console.log(dataJob);
      let searchData = dataJob.filter((res) => {
        let title = Object.values(res)[3];

        //return Object.values(res).join(" ").toLowerCase().includes(search.toLowerCase())
        return title.toLowerCase().includes(search.toLowerCase());
      });
      console.log(searchData);
      setData([...searchData]);
    };
    fetchData();
  };
  const handleFilter = (event) => {
    event.preventDefault()
    console.log(filter);
    let fetchData = async () => {
      setData(null);
      let { data } = await axios.get(
        "https://dev-example.sanbercloud.com/api/job-vacancy"
      );
      let dataJob = data.data;
      console.log(dataJob);
      let filterData = dataJob.filter((res) => {
        return res.company_city.toLowerCase() === filter.company_city || res.company_name.toLowerCase() === filter.company_name || res.job_type.toLowerCase() === filter.job_type
      });
      console.log(filterData);
      setData([...filterData]);
    };
    fetchData();
  }
  
  const handleDetail = (event) => {
    let idData = parseInt(event.currentTarget.value);
    //console.log(idData)
    setCurrentId(idData)
    navigate(`/detailData/${idData}`)
  }
  const handleAccord = (event) => {
    setAccord(!accord);
  };
  const handlePopUpNavbar = (event) => {
    setpopUpNavbar(!popupNavbar);
  };
  const handleSidebar = (event) => {
    setSidebar(!sidebar);
  };

  let fetchData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data.data]);
      });
  };
  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    search,
    setSearch,
    accord,
    setAccord,
    filter,
    setFilter,
    login,
    setLogin,
    register,
    setRegister,
    pass,
    setPass,
    currentId,
    setCurrentId,
    detail,
    setDetail,
    input,
    setInput,
    popupNavbar,
    setpopUpNavbar,
    sidebar,
    setSidebar,
    fotoProfil,
    setFotoProfil
  };

  let handleFunction = {
    fetchData,
    handleChangeSearch,
    handleSearch,
    handleAccord,
    handleChangeFilter,
    handleFilter,
    handleChangeLogin,
    handleLogin,
    handleChangeRegister,
    handleRegister,
    handleLogout,
    handleChangePass,
    handlePass,
    handleDetail,
    handleInput,
    handleEdit,
    handleSubmit,
    handleDelete,
    handlePass,
    handlePopUpNavbar,
    handleSidebar,
    handleEditFoto,
    handleSubmitFoto
  };
  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
