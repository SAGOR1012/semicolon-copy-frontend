import company from '../../assets/company.png';
import TotalUserCard from '../../Components/TotalUserCard/TotalUserCard';
const Footer = () => {
  // get current year function
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className=''>
      <footer className='footer flex justify-between bg-neutral text-neutral-content p-10'>
        <aside className='flex items-center'>
          <p>
            Developed By
            <br />
            Semicolon coder
          </p>
          <img
            className='h-20 w-20'
            src={company}
            alt=''
          />
        </aside>
        {/* social */}
        <nav>
          <h6 className='footer-title'>Social</h6>
        </nav>
      </footer>

      <div>
        <footer className='footer footer-center bg-base-300 text-base-content p-4'>
          <aside>
            <p>
              {/* Dynamic date function  */}
              Copyright © {getCurrentYear()} - All right reserved by Semicolon
              coder
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
