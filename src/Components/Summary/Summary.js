import { Button, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CartService from '../Service/CartService'
import { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import OrderService from '../Service/OrderService';

class Summary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookArray: [],
            coustomerDetails: false,
            cartButton: true
        };
    }

    componentDidMount(){
        this.getall();
    } 

    getall(){
        CartService.getUserCart(localStorage.getItem('id')).then((response)=>{
            this.setState({
                bookArray:response.data.data
            });
            console.log(response.data.data);
        })
    }

    placeOrder(){
        OrderService.placeOrder(localStorage.getItem('id'))
        alert("Order placed successfully");
    }
render(){
    return(
        <div style={{"marginTop":"70px", "marginLeft":"10px"}}>
            <Card sx={{ maxWidth: 1000, minHeight:450 }} style={{"marginTop":"20px", margin:"20px"}}>
        <Typography variant='h4' style={{marginRight:"70rem",marginTop:"1rem" }}>Cart({this.state.bookArray.length})</Typography>
        {
            this.state.bookArray.map(book =>
                <><img src={book.bookImage} width='70' height='90' style={{"marginRight":"55rem", "marginTop":"3rem"}}/>
        <CardContent style={{"marginLeft":"13rem", "marginTop":"-7rem", "textAlign":"left"}}>
            <Typography sx={{color:"#0A0102", font:"20px/20px Lato"}}>{book.bookName}</Typography>
            <Typography sx={{color:"#9D9D9D", font:"15px/15px Lato"}}>{book.authorName}</Typography>
            <Typography>Rs. {book.prize}</Typography>
        </CardContent>
        </>  
        )
        }           
        <Link to='/order'><Button sx={{ border: '1px #9D9D9D solid'}} size="large" variant='contained' onClick={()=>this.placeOrder()}
        style={{"display":"flex", "flexDirection":"row", "marginLeft":"50rem", "marginTop":"3rem", "backgroundColor":"#A03037"}}>
            Proceed</Button></Link>
        </Card>
        <ToastContainer/>
        </div>
    );
}
}

export default Summary;