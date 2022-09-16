import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import DieComponent, { DieType } from "./Die";

const TOTAL_DICE = 10;
const randomNumber = () => Math.ceil(Math.random() * 6);


const Board = () => {
  const generateDie = (): DieType => {
    return ({
      id: nanoid(),
      value: randomNumber(),
      isHeld: false
    })
  }

  const allNewDice = () => {
    const dices: DieType[] = []
    for (let i = 0; i < TOTAL_DICE; i++) {
      dices.push(generateDie());
    }
    return dices;
  }

  const [dice, setDice] = useState<DieType[]>(allNewDice);
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);

  const areHeld = (arr: DieType[]) => arr.every(die => die.isHeld);

  const sameValue = (arr: DieType[]) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1].value !== arr[i].value) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (areHeld(dice) && sameValue(dice)) {
      setTenzies(true)
    } else {
      setTenzies(false)
    }
  }, [dice]);

  const rollDice = () => {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.isHeld ? die : generateDie();
      });
    });
    setRolls(prevRolls => prevRolls + 1);
  }

  const holdDie = (id: string) => {
    setDice(prevDice => prevDice.map(die => {
      return id === die.id ? ({ ...die, isHeld: !die.isHeld }) : die;
    }))
  }

  const restartGame = () => {
    setDice(allNewDice())
  }

  return (
    <div className='bg-cultured w-[800px] h-[640px] m-auto rounded-md flex flex-col justify-evenly'>
      {tenzies && <ReactConfetti />}
      <div>
        <h1 className='text-5xl font-karla font-semibold text-maastritch-blue'>Tenzies</h1>
        <p className='mt-2 font-inter text-2xl text-independence tracking-wide'>Roll until all dice are the same. Click <br />
          each die freeze it at its current value <br />
          between rolls.</p>
      </div>
      <span className='text-lg text-independence font-semibold'>Number of rolls: {rolls}</span>
      <div className='grid grid-cols-5 gap-y-10 mx-10 justify-items-center'>
        {
          dice.map(d => {
            return (
              <DieComponent
                key={d.id}
                value={d.value}
                isHeld={d.isHeld}
                toggle={() => holdDie(d.id)}
              />
            )
          })
        }
      </div>
      <button
        onClick={tenzies ? restartGame : rollDice}
        className='bg-han-purple font-bold uppercase text-white
         p-3 w-fit px-10 rounded-md 
         mx-auto hover:opacity-80' >
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </div>
  );
}


export default Board;