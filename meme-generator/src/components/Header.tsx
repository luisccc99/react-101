import IndustryIcon from '../assets/industry.png'

const Header = () => {
  return (
    <div className='bg-primary text-white'>
      <div className='m-auto container flex justify-between py-2 h-[65px] items-center'>
        <img className='mr-3 h-full w-auto invert' src={IndustryIcon} />
        <span className='text-2xl font-bold mr-auto'>Meme Generator</span>
        <span className='text-lg font-semibold'>React Course - Project 3</span>
      </div>
    </div >
  );
};

export default Header;