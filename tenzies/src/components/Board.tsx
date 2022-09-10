import { nanoid, random } from "nanoid";
import { useState } from "react";
import Die from "../utils/Die";
import DieComponent from "./Die";

const TOTAL_DICE = 10;
const randomNumber = () => Math.ceil(Math.random() * 6);


const Board = () => {
  const allNewDice = () => {
    const dices: Die[] = []
    for (let i = 0; i < TOTAL_DICE; i++) {
      dices.push(new Die(randomNumber()));
    }
    return dices;
  }

  const [dice, setDice] = useState<Die[]>(allNewDice);

  const rollDice = () => {
    setDice(prevDice => {
      return prevDice.map(dice => {
        if (!dice.isHeld) {
          dice.setValue(randomNumber())
        }
        return dice;
      });
    });
  }

  const handleToogleDie = (id: string) => {
    setDice(prevDice => prevDice.map(dice => {
      if (dice.id === id) {
        dice.toogleHeld();
      }
      return dice;
    }))
  }

  return (
    <div className='bg-cultured w-[800px] h-[640px] m-auto rounded-md flex flex-col justify-center'>
      <div className='grid grid-cols-5 gap-y-10 mx-10 justify-items-center'>
        {
          dice.map(d => {
            return (
              <DieComponent
                key={d.id}
                value={d.value}
                isHeld={d.isHeld}
                handleToggle={() => handleToogleDie(d.id)}
              />
            )
          })
        }
      </div>
      <button
        onClick={rollDice}
        className='bg-han-purple font-bold uppercase text-white
         p-3 w-fit px-10 rounded-md 
         mx-auto mt-10 hover:opacity-80' >
        Roll
      </button>
    </div>
  );
}


export default Board;