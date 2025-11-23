import React from 'react';
import { useNavigate } from 'react-router';

const BillsCategory = () => {
    const navigate = useNavigate()

    const handleBillsButtonClicked = (e) => {
        const billName = e.currentTarget.querySelector("h3").textContent
        navigate("/bills", {state: billName})
    }


    return (
        <div>
            <div className='my-10'>
                <h2 className='font-semibold text-5xl sm:text-7xl  text-center'>Bills category</h2>
                <p className='text-center text-2xl text-gray-800 my-5'>Click to pay your utility bills.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/616/616494.png" alt="" />
                    <h3 className='font-medium text-2xl'>Electric Bill</h3>
                </div>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/427/427112.png" alt="" />
                    <h3 className='font-medium text-2xl'>Water Bill</h3>
                </div>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/4535/4535728.png" alt="" />
                    <h3 className='font-medium text-2xl'>Gas Bill</h3>
                </div>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/2099/2099193.png" alt="" />
                    <h3 className='font-medium text-2xl'>Internet Bill</h3>
                </div>
            </div>
        </div>
    );
};

export default BillsCategory;