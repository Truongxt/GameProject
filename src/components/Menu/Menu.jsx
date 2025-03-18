import { NavLink } from "react-router-dom";
import './menu.css'
import homeicon from '@icons/svgs/home.svg'
import steamicon from '@icons/svgs/steam.svg'
import walleticon from '@icons/svgs/wallet.svg'
import newsicon from '@icons/svgs/newspaper.svg'
import usicon from '@icons/svgs/us.svg'
import contacticon from '@icons/svgs/call.svg'
import { Navbar, Nav, Image } from "react-bootstrap";
const Menu = () => {
    return(
<<<<<<< HEAD
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
=======
        <div className="d-flex justify-content-center align-items-center bg-white">
            <Navbar style={{width: '80%'}} expand="lg" className="bg-body-tertiary p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-between bg-white w-100">
                        <Nav.Link as={NavLink} to="/" className=" d-flex gap-2"><Image src={homeicon}/><p className="text-dark fw-normal">Trang chủ</p></Nav.Link>
                        <Nav.Link as={NavLink} to="/steamgame" className=" d-flex gap-2"><Image src={steamicon}/><p className="text-dark fw-normal">Steam game</p></Nav.Link>
                        <Nav.Link as={NavLink} to="/steamwallet" className=" d-flex gap-2"><Image src={walleticon}/><p className="text-dark fw-normal">Steam Wallet</p></Nav.Link>
                        <Nav.Link as={NavLink} to="/" className=" d-flex gap-2"><Image src={contacticon}/><p className="text-dark fw-normal">Liên hệ</p></Nav.Link>
                        <Nav.Link as={NavLink} to="/" className=" d-flex gap-2"><Image src={newsicon}/><p className="text-dark fw-normal">Tin tức</p></Nav.Link>
                        <Nav.Link as={NavLink} to="/" className=" d-flex gap-2"><Image src={usicon}/><p className="text-dark fw-normal">Về chúng tôi</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
            // <div className="menuContainer">
            //     <ul>
            //         <li>
            //             <NavLink to="/"><img src={homeicon} alt="" /><p>Trang chủ</p></NavLink>
            //         </li>
            //         <li>
            //             <NavLink to=""><img src={steamicon} alt="" /><p>Game Steam</p></NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/steamwallet" ><img src={walleticon} alt=""/><p>Steam Wallet</p></NavLink>
            //         </li>
            //         <li>                       
            //             <NavLink><img src={newsicon} alt="" /><p>Tin tức</p></NavLink>
            //         </li>
            //         <li>                  
            //             <NavLink><img src={usicon} alt="" /><p>Về chúng tôi</p></NavLink>
            //         </li>
            //         <li>                       
            //             <NavLink to="/contact"><img src={contacticon} alt="" /><p>Liên hệ</p></NavLink>
            //         </li>
>>>>>>> ecbe1e79788865163198702a51c9446c8a0d8c1c
                    
            //     </ul>
            // </div>
    );
}
export default Menu