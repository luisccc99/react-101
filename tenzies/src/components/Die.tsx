type DieProps = {
  value: number;
  isHeld: boolean;
  handleToggle: () => void
}

const DieComponent = (props: DieProps) => {
  return (
    <div className={`w-20 py-5 font-bold
     shadow-lg rounded-md text-4xl 
     bg-white text-gunmetal cursor-pointer
     ${props.isHeld && 'bg-light-malachite-green'}`}
     onClick={props.handleToggle}>
      {props.value}
    </div>
  );
};

export default DieComponent;