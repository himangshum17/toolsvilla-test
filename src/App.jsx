import toolsvillaLogo from './assets/reg_header_logo.png';
import herobg from './assets/registration_2.png';
import bg1 from './assets/registration_1.png';
export default function App() {
  return (
    <>
      <header>
        <div className='container flex flex-col md:flex-row justify-between gap-4 items-center'>
          <div className='w-32'>
            <img src={toolsvillaLogo} alt='' />
          </div>
          <div className='flex gap-4 flex-wrap md:flex-nowrap'>
            <button className='capitalize w-full md:w-auto flex gap-1 items-center justify-center rounded-lg px-[10px] min-w-[130px] py-2 border border-[#2f9296] bg-[#f0f0f0]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                />
              </svg>
              <span>download app</span>
            </button>
            <button className='capitalize w-full md:w-auto flex gap-1 items-center justify-center rounded-lg px-[10px] min-w-[130px] py-2 border border-[#2f9296] bg-[#f0f0f0]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
              <span>login</span>
            </button>
            <button className=' w-full md:w-auto rounded-lg px-[10px] min-w-[130px] py-2 border border-[#2f9296] bg-[#2f9296] text-white uppercase'>
              seller support
            </button>
          </div>
        </div>
      </header>
      <section className='pt-10'>
        <div className='container relative'>
          <div className='md:absolute left-24 top-0 xl:-bottom-8 xl:top-auto'>
            <form className='max-w-lg md:w-[500px] rounded-3xl border border-[#2f9296] p-4 md:px-10 md:py-8 bg-white'>
              <h2 className='text-center text-2xl'>
                Register To Become a Seller
              </h2>
              <h3 className='text-center text-base'>Create your account now</h3>
              <div className='space-y-4 mt-16'>
                <div className='flex items-center border border-black rounded-lg bg-white'>
                  <span className='flex-shrink-0 px-2'>+91 |</span>
                  <input
                    type='text'
                    placeholder='Mobile No*'
                    className='focus:outline-none px-2 py-3 h-14 bg-transparent w-full placeholder:text-[#2f9296] placeholder:text-base placeholder:font-medium'
                  />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='GSTIN*'
                    className='focus:outline-none border border-black rounded-lg px-2 py-3 h-14 bg-white w-full placeholder:text-[#2f9296] placeholder:text-base placeholder:font-medium'
                  />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='Email ID*'
                    className='focus:outline-none border border-black rounded-lg px-2 py-3 h-14 bg-white w-full placeholder:text-[#2f9296] placeholder:text-base placeholder:font-medium'
                  />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='Company Name*'
                    className='focus:outline-none border border-black rounded-lg px-2 py-3 h-14 bg-white w-full placeholder:text-[#2f9296] placeholder:text-base placeholder:font-medium'
                  />
                </div>
                <div className='flex gap-1 items-center'>
                  <input type='checkbox' />
                  <span className='text-xs'>
                    I want to receive important updates on Whatsapp
                  </span>
                </div>
                <button className='w-full rounded-lg px-[10px] min-w-[130px] py-2 border border-[#2f9296] bg-[#2f9296] text-white uppercase'>
                  create account
                </button>
              </div>
            </form>
          </div>
          <div>
            <img src={herobg} alt='' />
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <img src={bg1} alt='' />
        </div>
      </section>
    </>
  );
}
