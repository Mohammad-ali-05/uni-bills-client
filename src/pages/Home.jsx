import React from 'react';
import SwiperContainer from '../components/SwiperContainer';
import BillsCategory from '../components/BillsCategory';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <section >
                <SwiperContainer></SwiperContainer>
            </section>
            <section className='max-w-[1440px] w-full mx-auto my-20 p-2 lg:px-10'>
                <BillsCategory></BillsCategory>
            </section>
            <section>

            </section>
            <section className='max-w-[1440px] w-full mx-auto my-20 p-2 lg:px-10'>
                <FAQ></FAQ>
            </section>
        </>
    );
};

export default Home;