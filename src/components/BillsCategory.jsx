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
                <h2 className='font-semibold text-5xl text-center'>Bills category</h2>
                <p className='text-center text-xl text-gray-800 mx-2 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-48 my-5'>Explore and manage all your utility bills easily. Select a category below to view, pay, or update your bills for Electricity, Water, Gas, and Internet.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center gap-2 border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/616/616494.png" alt="" />
                    <h3 className='font-bold  text-xl'>Electric Bill</h3>
                </div>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center gap-2 border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/427/427112.png" alt="" />
                    <h3 className='font-bold  text-xl'>Water Bill</h3>
                </div>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center gap-2 border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/4535/4535728.png" alt="" />
                    <h3 className='font-bold text-xl'>Gas Bill</h3>
                </div>
                <div onClick={handleBillsButtonClicked} className='flex flex-col justify-center items-center gap-2 border-2 rounded-lg shadow-lg mx-auto w-full p-4 transform transition duration-300 ease-in-out hover:scale-105'>
                    <img className='w-20' src="https://cdn-icons-png.flaticon.com/128/2099/2099193.png" alt="" />
                    <h3 className='font-bold  text-xl'>Internet Bill</h3>
                </div>
            </div>
        </div>
    );
};

export default BillsCategory;