import { useState } from "react";

export const SCORE_KEY = 'tenzies-score';

export interface Score {
  seconds: number;
  rolls: number;
  dateInMilliseconds: number;
}

const getScores = (): Score[] => {
  return JSON.parse(localStorage.getItem(SCORE_KEY) || '[]') as Score[];
}

export const addScore = (score: Score) => {
  const scores: Score[] = getScores();
  scores.push(score)
  localStorage.setItem(SCORE_KEY, JSON.stringify(scores));
}

const ScoreTable = () => {
  const [scores, setScores] = useState(() => getScores().sort((a, b) => a.seconds - b.seconds));
  return (<div className='bg-cultured w-[800px] mx-auto mt-6 rounded pb-5'>
    <h3 className='text-2xl font-karla text-maastritch-blue text-start p-3'>Scores</h3>
    <table className='border-collapse table-fixed w-full p-5'>
      <thead>
        <tr className='border-b py-2'>
          <TableHeader title='Time' />
          <TableHeader title='Number of rolls' />
          <TableHeader title='Date' />
        </tr>
      </thead>
      <tbody>
        {
          scores.map((s, idx) => (<ScoreRow key={idx} {...s} />))
        }
      </tbody>
    </table>
  </div>);
}

const ScoreRow = (props: Score) => {
  return (
    <tr className='hover:bg-gray-300'>
      <td className='py-2'>{props.seconds} sec</td>
      <td>{props.rolls}</td>
      <td>{new Date(props.dateInMilliseconds).toDateString()}</td>
    </tr>
  );
}

const TableHeader = (props: { title: string }) => {
  return (
    <th className='py-2'>{props.title}</th>
  );
}


export default ScoreTable;