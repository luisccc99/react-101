
const Score = () => {
  return (<div className='bg-cultured w-[800px] mx-auto mt-6 rounded'>
    <h3 className='text-2xl font-karla text-maastritch-blue text-start p-3'>Scores</h3>
    <table className='border-collapse table-fixed w-full'>
      <thead>
        <tr className='border-b py-2'>
          <TableHeader title='Time' />
          <TableHeader title='Number of rolls' />
          <TableHeader title='Date' />
        </tr>
      </thead>
      <tbody>
        {
          Array.from([1, 2, 3, 4]).map((_, idx) => <TableRow key={idx} />)
        }
      </tbody>
    </table>
  </div>);
}

const TableHeader = (props: { title: string }) => {
  return (
    <th className='py-2'>{props.title}</th>
  );
}

const TableRow = () => {
  return (
    <tr className='hover:bg-gray-300'>
      <td>12 min</td>
      <td>8</td>
      <td>{new Date().toDateString()}</td>
    </tr>
  );
}

export default Score;