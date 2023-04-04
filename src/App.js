import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import FindJob from "./pages/FindJob";
import ListJob from "./pages/ListJob";
import DetailJob from "./pages/DetailJob";
import Profile from "./pages/Profile";
import CreateForm from "./pages/CreateForm";
import ChangePassword from "./pages/ChangePassword";
import Notfound from "./pages/Notfound";
import { GlobalProvider } from "./Context/GlobalContext";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LayoutLanding from "./widgets/LayoutLanding";
import LayoutDashboard from "./widgets/LayoutDashboard";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Cookies from "js-cookie";


function App() {
  const LoginRoute = (props) => {
    if (Cookies.get('token') === undefined) {
      return props.children
    }
    else if (Cookies.get('token') !== undefined) {
      return <Navigate to={"/"} />
    }
  }

  const DashboardRoute = (props) => {
    if (Cookies.get('token') === undefined) {
      return <Navigate to={"/Login"} />

    }
    else if (Cookies.get('token') !== undefined) {
      return props.children
    }
  }

  return (
    <>
      <Router>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutLanding>
                  <Hero />
                  <Content />
                </LayoutLanding>
              }
            ></Route>
            <Route
              path="/FindJob"
              element={
                <LayoutLanding>
                  <FindJob />
                  <Content />
                </LayoutLanding>
              }
            ></Route>
            <Route
              path="/DetailJob"
              element={
                <LayoutLanding>
                  <DetailJob />
                </LayoutLanding>
              }
            ></Route>
            <Route
              path="/Dashboard"
              element={
                <DashboardRoute >
                  <LayoutDashboard>
                    <Dashboard />
                  </LayoutDashboard>
                </DashboardRoute>

              }
            ></Route>
            <Route
              path="/Login"
              element={
                <LoginRoute>
                  <Login />
                </LoginRoute>
              }
            ></Route>
            <Route
              path="/Register"
              element={
                <Register />
              }
            ></Route>
            <Route path="/dashboard/list-job-vacancy" element={
              <DashboardRoute >
                <LayoutDashboard>
                  <ListJob />
                </LayoutDashboard>
              </DashboardRoute>
            } />
            <Route path="/dashboard/list-job-vacancy/create" element={
              <DashboardRoute>
                <LayoutDashboard>
                  <CreateForm />
                </LayoutDashboard>
              </DashboardRoute>
            }
            ></Route>
            <Route path="/detailData/:IdData" element={
              <LayoutLanding>
                <DetailJob />
              </LayoutLanding>
            } />
            <Route path="/dashboard/profile" element={
              <DashboardRoute >
                <LayoutDashboard>
                  <Profile />
                </LayoutDashboard>
              </DashboardRoute>
            } />
            <Route path="/dashboard/profile/change-password" element={
              <DashboardRoute >
                <LayoutDashboard>
                  <ChangePassword />
                </LayoutDashboard>
              </DashboardRoute>
            } />
            <Route path="/dashboard/list-job-vacancy/edit/:IdData" element={
              <DashboardRoute>
                <LayoutDashboard>
                  <CreateForm />
                </LayoutDashboard>
              </DashboardRoute>
            } />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </>
  );
}

export default App;
