import { FormEvent, HTMLProps, useEffect, useState } from "react";

interface Meme {
  readonly id: string;
  name: string;
  url: string;
  width: number;
  height: number;
}

const Meme = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [content, setContent] = useState({
    top: '',
    bottom: ''
  });
  const [currentMeme, setCurrentMeme] = useState<Meme>();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setContent((prevContent => ({
      ...prevContent,
      [name]: value
    })))
  }

  const setRandomMeme = (): void => {
    setCurrentMeme(memes[Math.floor(Math.random() * memes.length)]);
  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(raw => raw.json())
      .then(res => setMemes(res.data.memes))
      .catch(err => console.error(err))
  }, []);

  return (
    <div className='container my-10'>
      <div className='flex flex-row justify-start my-3 items-stretch gap-2 flex-wrap'>
        <TextInput
          className='flex-1'
          name='top'
          onChange={handleChange}
          placeholder='Top text' />
        <TextInput
          className='flex-1'
          name='bottom'
          onChange={handleChange}
          placeholder='Bottom text' />
      </div>
      <button
        className='appearance-none block uppercase bg-primary-container
         text-on-primary-container font-bold
          p-2 rounded w-full'
        onClick={setRandomMeme}>get a new meme image 🖼️</button>
      {
        currentMeme &&
        <>
          <p className='text-center mt-5 mb-1'>"{currentMeme.name}"</p>
          <div className='relative break-words max-w-md m-auto'>
            <MemeText textPosition='top'>{content.top}</MemeText>
            <img src={currentMeme.url} className='min-w-sm h-auto m-auto' />
            <MemeText textPosition='bottom'>{content.bottom}</MemeText>
          </div>
        </>
      }
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