import { useState } from "react";
import Die from "./Die";


const Board = () => {
  
  const randomArray = (): number[] => {
    const nums: number[] = [];
    for (let i = 0; i < 10; i++) {
      nums.push(Math.ceil(Math.random() * 6))
    }
    return nums;
  }
  const [dice, setDice] = useState<number[]>(randomArray);
  
  return (
    <div className='bg-cultured w-[800px] h-[640px] m-auto rounded-md flex flex-col justify-center'>
      <div className='grid grid-cols-5 gap-y-10 mx-10 justify-items-center'>
        {
          dice.map((n, idx) => {
            return (<Die key={idx} value={n} />)
          })
        }
      </div>
      <button className='bg-han-purple text-white' >Roll</button>
    </div>
  );
}


export default Board;