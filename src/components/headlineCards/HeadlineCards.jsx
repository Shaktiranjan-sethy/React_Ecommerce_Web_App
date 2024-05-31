import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HeadlineCards = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animation in ms
            once: true,     // Whether animation should happen only once
        });
    }, []);

    return (
        <div className='max-w-[1250px] mx-auto p-4 py-16 grid md:grid-cols-3 gap-6 '>
            {/* Card */}
            <div className='rounded-xl relative -z-10' data-aos="fade-up-right" >
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Shop 'til you drop, without leaving your seat!</p>
                    <p className='px-2'>Through 24/7</p>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1682802739047-24fa5d983e71?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative -z-10' data-aos="zoom-in" >
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Elevate your shopping game with online convenience.</p>
                    <p className='px-2'>Added Daily</p>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1596609548164-aee7658cb54f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob3BwaW5nJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative -z-10' data-aos="fade-up-left" >
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Fashion at your fingertips, delivered to your door</p>
                    <p className='px-2'>Convenient Treats</p>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://plus.unsplash.com/premium_photo-1661338902363-fc3f8059fead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBpbWFnZXMlMjB3aXRoJTIwcGVvcGxlfGVufDB8fDB8fHwx'
                    alt='/'
                />
            </div>
        </div>
    );
};

export default HeadlineCards;