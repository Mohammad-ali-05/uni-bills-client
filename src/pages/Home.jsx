import React from 'react';
import SwiperContainer from '../components/SwiperContainer';
import BillsCategory from '../components/BillsCategory';

const Home = () => {
    return (
        <>
            <section >
                <SwiperContainer></SwiperContainer>
            </section>
            <section className='max-w-[1440px] w-full mx-auto my-20 p-2 lg:px-10'>
                <BillsCategory></BillsCategory>
            </section>
        </>
    );
};

export default Home;