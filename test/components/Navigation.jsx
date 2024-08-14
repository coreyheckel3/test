import Link from 'next/link';
import './Navigation.css'

export default function Navigation() {
  
  return ( 
    <ul className='menu cf'>
      
      <li className='nav'>
        <Link href='/projects'>Projects</Link>
      </li>
    </ul>
  );
}