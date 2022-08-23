import { HTMLProps } from "react";

const Meme = () => {
  return (
    <div className='container mt-10'>
      <div className='flex flex-row justify-start my-3 items-stretch gap-2 flex-wrap'>
        <TextInput className='flex-1' name='top' placeholder='Top text' />
        <TextInput className='flex-1' name='bottom' placeholder='Bottom text' />
      </div>
      <button
        className='appearance-none block uppercase bg-primary-container
         text-on-primary-container font-bold
          p-2 rounded w-full'>get a new meme image 🖼️</button>
    </div>
  );
};

const TextInput = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      className={`appearance-none border-2 border-gray-600 
      hover:border-gray-900 
      focus:border-primary focus:outline-none rounded px-2 py-3 roundedw-full ${props.className}`}
      type='text'
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}

export default Meme;