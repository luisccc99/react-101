import { BiWorld } from 'react-icons/bi'
import './Header.css'

export default function Header() {
  return (
    <div className='wrapper'>
      <span className='title'>
        <BiWorld />
        My Future Travel Journal (hopefully)
      </span>
    </div>
  );
}