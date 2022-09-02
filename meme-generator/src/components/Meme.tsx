import { FormEvent, HTMLProps, useState } from "react";

interface Meme {
  url: string;
  topText: string;
  bottomText: string;
}

const Meme = () => {
  const [currentMeme, setCurrentMeme] = useState<Meme>({
    url: 'https://i.imgflip.com/1bij.jpg',
    topText: '',
    bottomText: ''
  });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log(name, value)
    setCurrentMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <div className='container mt-10'>
      <div className='flex flex-row justify-start my-3 items-stretch gap-2 flex-wrap'>
        <TextInput
          className='flex-1'
          name='topText'
          onChange={handleChange}
          placeholder='Top text' />
        <TextInput
          className='flex-1'
          name='bottomText'
          onChange={handleChange}
          placeholder='Bottom text' />
      </div>
      <button
        className='appearance-none block uppercase bg-primary-container
         text-on-primary-container font-bold
          p-2 rounded w-full'>get a new meme image 🖼️</button>
      <div className='relative mt-5 break-words'>
        <MemeText textPosition='top'>{currentMeme.topText}</MemeText>
        <img src={currentMeme.url} className='min-w-sm h-auto m-auto' />
        <MemeText textPosition='bottom'>{currentMeme.bottomText}</MemeText>
      </div>
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
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}

const MemeText = (props: HTMLProps<HTMLSpanElement> & { textPosition: 'top' | 'bottom' }) => {
  const textStylePosition = props.textPosition === 'top' ? 'top-0' : 'bottom-0';
  return (<span
    className={`text-4xl absolute text-center
     uppercase text-white font-kanit right-0
     left-0 mx-auto outline-text ${textStylePosition}`}>
    {props.children}
  </span>)
}

export default Meme;