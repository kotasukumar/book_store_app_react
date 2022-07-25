import React from 'react';
import './Header.css';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function Header(props) {

    const fetchBooks = (event) => {
      props.showSearchingBooks(event.target.value);
    } 

    return (
        <div className='header-container'>
            <div className='header-section-one'>
                <ImportContactsIcon style={{color: 'white'}}/>
                <Typography className='store-title-container'>Bookstore</Typography>
            </div>
            <Search className='searchbar' style={{ width: '40%',height: '60%'}}>
                <SearchIconWrapper>
                <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={fetchBooks}
                />
            </Search>
            <div className='header-options-container'>
                <div className='header-option'>
                    <ShoppingCartOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                    <Typography fontSize='small' className='header-template'>Cart</Typography>
                </div>
            </div>
        </div>
    );
}

export default Header;