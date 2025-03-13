import usericoin from '@icons/svgs/user.svg'
import './user.css'
import {NavLink} from 'react-router-dom'
const User = () =>{
    return(
        <div className='userContainer'>
            <button className='userLogo'><img src={usericoin} alt="" /></button>
            <div className='userEnter'>
            <NavLink to="/login"><p>Đăng nhập</p></NavLink>
            <p>/</p>
            <NavLink to="/register"><p>Đăng ký</p></NavLink>
            
            </div>
        </div>
    );
}

export default User;