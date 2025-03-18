import { NavLink } from "react-router-dom";
import './menu.css'
import homeicon from '@icons/svgs/home.svg'
import steamicon from '@icons/svgs/steam.svg'
import walleticon from '@icons/svgs/wallet.svg'
import newsicon from '@icons/svgs/newspaper.svg'
import usicon from '@icons/svgs/us.svg'
import contacticon from '@icons/svgs/call.svg'
const Menu = () => {
    return(
            <div className="menuContainer">
                <ul>
                    <li>
                        <NavLink to="/"><img src={homeicon} alt="" /><p>Trang chủ</p></NavLink>
                    </li>
                    <li>
                        <NavLink to="/game-steam"><img src={steamicon} alt="" /><p>Game Steam</p></NavLink>
                    </li>
                    <li>
                        <NavLink><img src={walleticon} alt="" /><p>Steam Wallet</p></NavLink>
                    </li>
                    <li>                       
                        <NavLink><img src={newsicon} alt="" /><p>Tin tức</p></NavLink>
                    </li>
                    <li>                  
                        <NavLink><img src={usicon} alt="" /><p>Về chúng tôi</p></NavLink>
                    </li>
                    <li>                       
                        <NavLink to="/contact"><img src={contacticon} alt="" /><p>Liên hệ</p></NavLink>
                    </li>
                    
                </ul>
            </div>
    );
}
export default Menu