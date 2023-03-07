import React, { useState,useRef } from 'react';
// import data
import { reservationData } from '../data';
// import datepicker
import DatePicker from 'react-datepicker';
// import datepicker css
import 'react-datepicker/dist/react-datepicker.css';
// import timepicker css
import '../timepicker.css';
// import icons
import { FaUsers, FaCalendar } from 'react-icons/fa';
import { GiFoodTruck } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';
//import emailjs
import emailjs from '@emailjs/browser';

const Reservation = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  // date state
  const [startDate, setStartDate] = useState(new Date());
  //sending enquiry
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0g8oczd', 'template_u816ef7', form.current, 'KACmQ19f0JxBwClG-')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section className='relative top-96 z-30 pb-20 lg:py-[100px]' id='reservation'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='text-center'
        >
          {/* title */}
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          >
            {title}
          </motion.h2>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark'
          >
            {subtitle}
          </motion.p>
          {/* model */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'
          >
            <img src={modelImg} alt='' />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          ref={form} 
          onSubmit={sendEmail}
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={'show'}
        >
          <div className='flex flex-col lg:flex-column gap-y-4 items-center justify-between mb-8'>
            {/* email */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <MdEmail />
                <div>email</div>
              </div>
              <input name='email' className='input' type='text' placeholder='xxxx@xxx.com' />
            </div>
            {/* datepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                name='date'
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* number of persons */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input name='persons' className='input' type='number' placeholder='1' />
            </div>
            {/* food order */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <GiFoodTruck />
                <div>What would you like?</div>
              </div>
              <input name='description' className='input' type='text' placeholder='Curry Roti' />
            </div>
          </div>
          {/* button */}
          <div className='max-w-[316px] mx-auto flex justify-center'>
            <button className='btn capitalize w-full lg:w-auto'>
              {btnText}
            </button>
            <span className='mt-3'>{done && "Thank you, we will get back to you soon"}</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
