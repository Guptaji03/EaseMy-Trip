import React, {  useState } from 'react'
import style from "./search.module.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dateToSearchActions } from '../../store/dateToSearchSlice';
import { fetchFlightData } from '../../store/flightDataActions';


const Searchbar = () => {
    const navigate =useNavigate()
    const from = ['','Jaipur', 'Delhi',"Chennai","Mumbai","Banglore"];
    const to =["",'Jaipur', 'Delhi',"Chennai","Mumbai","Banglore"]
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(from[0]);
    const [inputValue, setInputValue] = React.useState('');
    const [destination, setDestination] = React.useState(to[0]);
    const [inputDestination, setInputDestination] = React.useState('');
    const [date,setDate] =React.useState(null);
    const [returnDate,setReturnDate] =React.useState(null);
    //  const [data,setData] =useState({})


    const dispatch = useDispatch()
    const dateObj = useSelector(state=>state.dateSearch)
    const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '2px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
        },
      }));

     
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };

 const sendData =()=>{
     if(value==="" ||destination==="" ){
        alert("Enter the Valid Details")
     }
   else{
    // Sun Apr 03 2022
     let arr = date.toDateString().split(" ")
     arr=arr[2]+arr[1]+"il"+arr[3]
    
       let dep  =returnDate.toDateString().split(" ")
       dep=dep[2]+dep[1]+"il"+dep[3]
  //  console.log(arr)
  //  console.log(dep)
    var obj ={
        "from_location":value,
        "to_location":destination,
        "date":arr
    }

    console.log(obj);
    navigate("/flight")
    dispatch(dateToSearchActions.searchObj(obj))
    // dispatch(fetchFlightData(dateObj))
   
    
     
   }
   
   
 }


//value destination date returnDate input

  return (
    <div className={style.searchBar}>

     <div>
     
     <Autocomplete
       value={value}
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
       inputValue={inputValue}
       onInputChange={(event, newInputValue) => {
         setInputValue(newInputValue);
       }}
       id="controllable-states-demo"
    //    className={style.first}
       options={from}
       sx={{ width: 220 , backgroundColor: "white" , border:0 , borderRadius: 0 }}
       renderInput={(params) => <TextField {...params} label="From"  />}
     />
   </div>
   

     <div>
     
     <Autocomplete
       value={destination}
       onChange={(event, newValue) => {
         setDestination(newValue);
       }}
       inputValue={inputDestination}
       onInputChange={(event, newInputValue) => {
        setInputDestination(newInputValue);
       }}
       id="controllable-states-demo"
       options={to}
       sx={{ width: 220 , backgroundColor: "white" }}
       renderInput={(params) => <TextField {...params} label="To" />}
     />
   </div>
   

   <div>
   <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Departure"
        value={date}
        
        onChange={(newValue) => {
            setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params}  sx={{ width: 180 , backgroundColor: "white" }}/>}
      />
    </LocalizationProvider>
   </div>

   <div>
   <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Return"
        value={returnDate}
        
        onChange={(newValue) => {
          setReturnDate(newValue);
        }}
        renderInput={(params) => <TextField {...params}  sx={{ width: 180 , backgroundColor: "white" }}/>}
      />
    </LocalizationProvider>
   </div>

   <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        
        sx={{
            ':hover': {
              
              bgcolor: 'white',
              color: 'black',
            },height:55 , backgroundColor:"white" , color:"black" , width:120 }}
      
        endIcon={<KeyboardArrowDownIcon />}
      >
        Economy
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem  disableRipple >
          <input type="checkbox" name="input" value="Economy" />&nbsp;
          {/* {check}  */}
          Economy
        </MenuItem>
        <MenuItem  disableRipple>
        <input type="checkbox"  name="input" value="First"/> &nbsp;
          First
        </MenuItem>
      
        <MenuItem  disableRipple>
        <input type="checkbox" name="input" value="Business"/> &nbsp;
          Business
        </MenuItem>
        
        <MenuItem  disableRipple>
          
          <button onClick={handleClose} className={style.Done}  >Done</button>
        </MenuItem>
      </StyledMenu>
    </div>
     
      <input type="submit" value="Search" className={style.inputSubmit} onClick={sendData} />
    </div>
  )
}

export default Searchbar
