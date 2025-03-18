import usericoin from '@icons/svgs/user.svg'
import './user.css'
import {NavLink} from 'react-router-dom'
import { Image } from 'react-bootstrap'
const User = () =>{
    return(
        <div className='d-flex gap-2 align-items-center text-white'>
            <Image className='border p-2' src={usericoin} roundedCircle></Image>
            <NavLink className='text-decoration-none' to="/login"><p>Đăng nhập</p></NavLink>
            <p>/</p>
            <NavLink className='text-decoration-none' to="/register"><p>Đăng ký</p></NavLink> 
        </div>
    );
}

export default User;