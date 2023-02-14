import React from "react";
import Createpin from "./screens/Createpin";
import Singup from "./screens/Singup";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Layout from "./components/Layout";
import SendMoney from "./screens/SendMoney";
import TransactionSuccessful from "./components/TransactionSuccessful";
import ClipLoader from "react-spinners/ClipLoader";
import {useAppContext} from './context'
import Message from "./components/Modal";
import Transaction from "./screens/Transaction";

function App() {
   const { loadingInProgress } = useAppContext();
  return (
    <>
      {loadingInProgress ? (
        <div className='loader-container flex items-center justify-center w-100 h-screen absolute z-10 px-[45%]'>
          <ClipLoader color={"#1F28EB"} size={100} className='mx-auto' />
        </div>
      ) : (
          <Router>
            <Message/>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/signup' element={<Singup />} />
            <Route exact path='/createpin' element={<Createpin />} />
            <Route
              exact
              path='/dashboard'
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              exact
              path='/sendmoney'
              element={
                <Layout>
                  <SendMoney />
                </Layout>
              }
            />
            <Route
              exact
              path='/transactionsucessful'
              element={
                <Layout>
                  <TransactionSuccessful />
                </Layout>
              }
            />
            <Route
              exact
              path='/transactions'
              element={
                <Layout>
                  <Transaction/>
                </Layout>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}
export default App;
