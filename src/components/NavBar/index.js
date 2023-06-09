import style from './layout.module.css';
import { ImNewspaper } from 'react-icons/im';

export default function Navbar() {
    return (
        <div className={style.nav_bar}>
            <ImNewspaper size={60} color='#000' />
            <div>
                <h1>NewsHub</h1>
                <h3>Your Source for the Latest News</h3>
            </div>
        </div>
    )
}