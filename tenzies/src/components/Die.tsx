import './Die.css';

export interface Die {
  readonly id: string;
  value: number;
  isHeld: boolean;
}

type DieProps = Omit<Die, 'id'> & {
  toggle: () => void;
}

const DieComponent = (props: DieProps) => {
  
  return (
    <div className={`font-bold w-[100px] h-[100px]
     shadow-lg rounded-md text-4xl p-1
     bg-white text-gunmetal cursor-pointer
     ${props.isHeld && 'bg-light-malachite-green'} face`}
      onClick={props.toggle}>
      {
        Array(props.value).fill(1).map((_, idx) => (
          <span key={idx} className='pip'></span>
        ))
      }
    </div>
  );
};

export default DieComponent;