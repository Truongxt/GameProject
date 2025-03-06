import controllerIcon from '@icons/svgs/controller.svg'
import searchIcon from '@icons/svgs/search.svg'
import cartIcon from '@icons/svgs/cart.svg'
import './header.css'
import User from './User/User'
import { NavLink } from 'react-router-dom'
const Header = () =>{
    return(
        <div className='header'>
            <div className='headerContainer'>
                <div className='headerBox'>
                    <img src={controllerIcon} alt="" />
                    <h4 className='webname'>GameKeyShop</h4>
                </div>
                <div className='headerSearch'>
                    <input type="text" className='searchInput' placeholder='Tìm kiếm sản phẩm'/>
                    <button className='searchBtn'><img src={searchIcon} alt="" /></button>
                </div>
                <div className='headerBox'>
                    <User></User>
                </div>
                <div className='headerBox'>
                    <NavLink className="cart">
                        <img src={cartIcon} alt="" />
                        <p>Giỏ hàng</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;