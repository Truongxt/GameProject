import controllerIcon from '@icons/svgs/controller.svg'
import searchIcon from '@icons/svgs/search.svg'
import cartIcon from '@icons/svgs/cart.svg'
import { Image, InputGroup, Button, FormControl, Badge, Col } from 'react-bootstrap'
import Menu from '@components/Menu/Menu'
import User from './User/User'
import { NavLink } from 'react-router-dom'
const Header = () =>{
    return(
        <div>
            <div className="d-flex justify-content-center bg-dark py-1">
                <div className='d-flex align-items-center gap-3' style={{width: '80%', height: '50px'}}>
                    <Col>
                        <NavLink className='text-white d-flex gap-2 text-decoration-none' as={NavLink} to='/'>
                            <Image src={controllerIcon}></Image>
                            <h4 className='align-content-center m-0 '>GameKeyShop</h4>
                        </NavLink>  
                    </Col>
                    <Col>
                        <InputGroup className='d-fex align-items-center' style={{height: '50px', width: '500px'}}>
                            <FormControl type="text" className='h-75'placeholder='Tìm kiếm sản phẩm'/>
                            <Button className='h-75 m-0'><Image src={searchIcon}/></Button>
                        </InputGroup>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <User></User>
                    </Col>
                    <Col className='d-flex justify-content-end col-2'>
                        <NavLink className="d-flex gap-2 text-white p-2 text-decoration-none border rounded" to='/cart'>
                            <img src={cartIcon} alt="" />
                            <p>Giỏ hàng</p>
                            <Badge bg='secondary' className='m-0'>0</Badge>
                        </NavLink>
                     </Col>
                </div>
            </div>
            <Menu></Menu>
        </div>
    );
}

export default Header;