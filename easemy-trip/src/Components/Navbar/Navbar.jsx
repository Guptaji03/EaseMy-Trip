import React from 'react'
import style from "./Navbar.module.css"
import { BsHeadset } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { VscAccount } from "react-icons/vsc";


const Navbar = ({ isToken, setIsToken }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  // const [isToken, setIsToken] = React.useState(null);

  const localStorageCheck = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      setIsToken(userData);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = async () => {
    const userData = localStorage.removeItem("userData");
    setIsToken(null);
    navigate('/login')
    // const res = await fetch(' https://easemytrip-backend.herokuapp.com/auth/logout');

  }

  React.useEffect(() => { localStorageCheck() }, [])


  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <div className={style.logo}>
          <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OJBtyg40cYXaD9uhpbM0WqMSCdjJvwrsiQ&usqp=CAU" alt="" />
          </Link>

          <div className={style.easy}>  <p>Take it Easy </p> <hr /></div>
        </div>
        <div className={style.tabs}>
          <div className={style.text1}>

            <p onClick={() => navigate("/flight")}>FLIGHTS</p>


            <hr />
          </div>
          <div className={style.text2}>
            <p onClick={() => navigate("/hotel")}>HOTELS</p>
            <hr />
          </div>
          <div className={style.text3}>
            <p>FLIGHT + HOTEL</p>
            <hr />
          </div>
          <div className={style.text4}>
            <p>TRAINS</p>
            <hr />
          </div>
          <div className={style.text5}>
            <p>BUS</p>
            <hr />
          </div>
          <div className={style.text6}>
            <p>HOLIDAYS</p>
            <hr />
          </div>
          <div className={style.text7}>
            <p>CABS</p>
            <hr />
          </div>
          <div className={style.text8}>
            <p>CRUISE</p>
            <hr />
          </div>
          <div className={style.text9}>
            <p>MORE</p>

          </div>


        </div>
      </div>
      <div className={style.right}>

        <div className={style.rightup}>
          <button>Manage My Booking</button>
          <div className={style.helpline}><BsHeadset className={style.icon} />
            <p>24 x 7 Helpline</p> &nbsp;&nbsp;
            <BsGlobe /> &nbsp;
            English
          </div>
        </div>
        <div className={style.down}>
          <VscAccount />
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ color: "black" }}
            >
              {isToken ? isToken.user.name : 'My account'}
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
              <MenuItem >{isToken ? isToken.user.name : 'My account'}</MenuItem>
              <MenuItem onClick={isToken ? logoutHandler : () => { navigate('/login') }}>{isToken ? 'Logout' : 'Login'}</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
