import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookMessenger, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* tutorial video */}
      <a
        href='https://www.facebook.com/share/v/16nLs5wHCm/' // REPLACE 'yourusername' with your actual Telegram username
        target='_blank'
        rel='noopener noreferrer' // Recommended for security when using target="_blank"
        style={{
          position: 'fixed',
          bottom: '130px',
          right: '20px',
          backgroundColor: 'red', // Telegram blue
          color: 'white',
          padding: '5px 10px',
          borderRadius: '50px',
          textDecoration: 'none',

          zIndex: '1000', // Ensure it stays on top of other content
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}>
        <p className='flex justify-center    gap-2 text-xl'>
          টিউটোরিয়াল <CiYoutube className='' />
        </p>
      </a>
      {/* support */}
      <a
        href=' https://wa.me/+8801580307894?text=Hi' // REPLACE 'yourusername' with your actual Telegram username
        target='_blank'
        rel='noopener noreferrer' // Recommended for security when using target="_blank"
        style={{
          position: 'fixed',
          bottom: '75px',
          right: '20px',
          backgroundColor: '#25d366', // Telegram blue
          color: 'white',
          padding: '5px 10px',
          borderRadius: '50px',
          textDecoration: 'none',

          zIndex: '1000', // Ensure it stays on top of other content
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}>
        <p className='flex justify-center  gap-2 text-xl'>
          সাপোর্ট <FaWhatsapp className='' />
        </p>
      </a>
      {/* group */}
      {/* <a
        href='https://t.me/semicoloncoder' // REPLACE 'yourusername' with your actual Telegram username
        target='_blank'
        rel='noopener noreferrer' // Recommended for security when using target="_blank"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '20px',
          backgroundColor: '#24A1DE	', // Telegram blue
          color: 'white',
          padding: '3px 8px',
          borderRadius: '50px',
          textDecoration: 'none',

          zIndex: '1000', // Ensure it stays on top of other content
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}>
        <p className='flex justify-center    gap-2 text-xl'>
          গ্রূপ <FaTelegram className='' />
        </p>
      </a> */}
      {/* messenger group */}
      <a
        href='https://m.me/j/AbbHIge744jjVqaC/' // REPLACE 'yourusername' with your actual Telegram username
        target='_blank'
        rel='noopener noreferrer' // Recommended for security when using target="_blank"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'rgb(0, 132, 255)	', // Telegram blue
          color: 'white',
          padding: '3px 8px',
          borderRadius: '50px',
          textDecoration: 'none',

          zIndex: '1000', // Ensure it stays on top of other content
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}>
        <p className='flex justify-center items-center    gap-2 text-xl'>
          গ্রুপ <FaFacebookMessenger className='' />
        </p>
      </a>
      {/* tostify alert message */}
      <ToastContainer
        position='top-center'
        autoClose={2000}
      />
    </div>
  );
};

export default Main;
