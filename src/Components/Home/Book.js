import { Button, Card, CardActions, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CartService from '../Service/CartService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Book=(props)=>{
    const[cart, setCart] = useState(true);
    const[wishlist, setWishlist] = useState(true);
    console.log(props.bookArray);
    console.log(localStorage.getItem('id'));

    const addToCart = (id) => {
        CartService.addBookTocart(id, localStorage.getItem('id'));
        console.log(id);
        toast.success("Book added to cart")
        //setCart(false);
    }
    return(
        <div className='bookfive' style={{"marginTop":"20px", margin:"100px"}}>    
            <div className='book-five-container'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.bookArray.map(book => 
                <Card sx={{ maxWidth: 300, background: "#F5F5F5", minHeight:300 }} style={{"marginTop":"20px", margin:"20px", "marginLeft":"50px"}} >
                <img src={book.bookImage} alt={book.bookName} width="100" height="200" background="black" style={{"marginTop":"50px", margin:"20px"}}/>
                <CardContent sx={{ background: "white", minHeight: 200}} style={{textAlign:"left"}}>
                <Typography sx={{color:"#0A0102", font:"25px/25px Lato"}}>{book.bookName}</Typography>
                <Typography sx={{color:"#9D9D9D", font:"20px/20px Lato"}}>{book.authorName}</Typography>
                <Typography>Rs.{book.prize}</Typography>
                <CardActions style={{ margin:"20px"}} sx={{width:"1000px"}}>
                    {
                        cart?
                        <><Button sx={{ border: '1px #9D9D9D solid' }} size="medium" style={{ "backgroundColor": "#A03037", "color": "white", "marginLeft": "-20px" }}
                                        onClick={() => addToCart(book.id)}>{'Add to cart'}</Button><Button sx={{ border: '1px #9D9D9D solid' }} size="medium" style={{ "color": "#A03037" }}>Add to Wishlist</Button></>
                :
                <div>add to cart</div>
                    }
                </CardActions>
                </CardContent>
                </Card>
            )}
            </Grid>
            </div>
            <ToastContainer/>
        </div>
    );
}
export default Book;