
type DieProps = {
  value: number
}

const Die = (props: DieProps) => {
  return (
    <div className='w-20 py-5 font-bold
     shadow-lg rounded-md text-4xl 
     bg-white text-gunmetal cursor-pointer'>
      {props.value}
    </div>
  );
};

export default Die;