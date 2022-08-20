import IndustryIcon from '../assets/industry.png'

const Header = (): JSX.Element => {
  return (
    <div className='bg-gradient-to-r from-light-green via-light-pink to-light-blue'>
      <div className='m-auto max-w-[1200px] flex justify-between py-2 px-4 h-[65px] items-center'>
        <img className='mr-3 h-full w-auto' src={IndustryIcon} />
        <span className='text-2xl font-bold mr-auto'>Meme Generator</span>
        <span className='text-lg font-semibold'>React Course - Project 3</span>
      </div>
    </div >
  );
};

export default Header;