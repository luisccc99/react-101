import { HTMLProps } from "react";

const Meme = () => {
  return (
    <div className='container'>
      <div className='flex flex-row justify-start my-3 items-stretch gap-2'>
        <TextInput name='top' />
        <TextInput name='bottom' />
      </div>
      <button
        className='block
         uppercase 
        bg-light-green
        hover:bg-green
          p-2 rounded w-full'>get a new meme image 🖼️</button>
    </div>
  );
};

const TextInput = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      className='appearance-none border-2
       border-gray-600
       hover:border-gray-900 
       focus:border-blue-600 focus:outline-none
       sm:w-full md:w-1/2
       px-2 py-3 rounded'
      type='text'
      name={props.name}
      placeholder={props.name}
    />
  );
}

export default Meme;