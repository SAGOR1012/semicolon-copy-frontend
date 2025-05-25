import { Helmet } from 'react-helmet-async';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseUser from '../../Hooks/UseUser';
import { AiOutlinePhone } from 'react-icons/ai';
import { TfiEmail } from 'react-icons/tfi';
import './Card.css'; // Import custom styles
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { FcSimCardChip } from 'react-icons/fc';
import UseAuth from '../../Hooks/UseAuth';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const Account = () => {
  const { user } = UseAuth();
  const [userData, isLoading] = UseUser();
  // console.log(userData.email);
  // console.log('userData', userData);

  // Show loading message while user data is being fetched
  if (isLoading) {
    return (
      <p className='text-center py-44'>
        <LoadingSpinner></LoadingSpinner>
      </p>
    );
  }

  return (
    <div className='py-32 bg-primary-bg-image px-1 md:flex gap-1 justify-center'>
      <Helmet>
        <title>semicolonff | Account</title>
      </Helmet>
      {/* Account Card section   */}
      <div className='flex justify-center '>
        <div className='card-gradient w-[90%] md:w-80    border-b-2   rounded-xl text-white p-5 shadow-lg flex flex-col '>
          <div className='text-lg font-semibold tracking-wide'>
            Semicolon Pay
          </div>
          <div className='text-2xl font-bold tracking-wide mt-6 mb-6 flex justify-between'>
            <span>{user ? userData.balance : '0'} TK</span>{' '}
            <span className='text-5xl -mt-2 '>
              <FcSimCardChip />
            </span>
          </div>
          <div className=''>
            <div className='flex gap-2 justify-end  mt-2'>
              <Link to='/users/addmony'>
                <button className='bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-lg hover:bg-blue-100 transition'>
                  অ্যাড TK
                </button>
              </Link>
              <Link to='/users/withdraw'>
                <button className='bg-red-500  text-xs font-bold  px-3 py-1 rounded-lg hover:bg-red-100 transition'>
                  উত্তোলন
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* video ,how to add/withdraw money */}
      <div className='flex flex-col justify-center items-center border p-2 mt-6 bg-white rounded-lg mx-4 gap-4 font-bold '>
        <a
          href='https://www.facebook.com/share/v/1ACxqnuMrA/'
          target='_blank'>
          <div className='flex gap-5'>
            <h3 className='text-black'>কিভাবে টাকা উত্তোলন করবেন : </h3>
            <TbBrandYoutubeFilled className='text-red-600 text-3xl' />
          </div>
        </a>
        <a
          href='https://www.facebook.com/share/v/1BwQBet6QW/'
          target='_blank'>
          <div className='flex gap-5'>
            <h3 className='text-black'>কিভাবে টাকা অ্যাড করবেন : </h3>
            <TbBrandYoutubeFilled className='text-red-600 text-3xl' />
          </div>
        </a>
      </div>
      {/* User Details section  */}
      <div className='flex justify-center mt-10 md:-mt-4'>
        <div className='w-[350px] h-[200px] rounded-xl text-white p-5 shadow-lg flex flex-col justify-between'>
          <div>
            {/* Name */}
            <h2 className='text-xl font-bold text-yellow-300 tracking-wide mb-2'>
              {user ? userData.name : 'semicolon'}
            </h2>
            <p className='text-sm text-white/70 mb-4'>
              {userData?.role || 'Regular User'}
            </p>
          </div>

          {/* Contact Info */}
          <div className='space-y-2 text-sm'>
            {/* Phone */}
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-300'>
                <AiOutlinePhone></AiOutlinePhone>
              </span>
              <span>{userData.phone || '+880 123XXXXXX'}</span>
            </div>
            {/* Email */}
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-300'>
                <TfiEmail></TfiEmail>
              </span>
              <span>{user ? user.email : 'example@gmail.com'}</span>
            </div>
            {/* UID */}
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-300'>ID</span>
              <span>{user?.uid || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
