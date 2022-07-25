import { Button, Card, CardActions, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const Book=(props)=>{
    console.log(props.bookArray);
    return(
        <div className='bookfive' style={{"marginTop":"20px", margin:"100px"}}>    
            <div className='book-five-container'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.bookArray.map(book => 
                <Card sx={{ maxWidth: 350, background: "#F5F5F5", height:420 }} style={{"marginTop":"20px", margin:"20px"}} >
                <img src={book.bookImage} alt={book.bookName} width="100" height="200" background="black" style={{"marginTop":"50px", margin:"20px"}}/>
                <CardContent sx={{ background: "white"}} style={{textAlign:"left"}}>
                <Typography sx={{color:"#0A0102", font:"25px/25px Lato"}}>{book.bookName}</Typography>
                <Typography sx={{color:"#9D9D9D", font:"20px/20px Lato"}}>{book.authorName}</Typography>
                <Typography>Rs.{book.prize}</Typography>
                <CardActions style={{ margin:"20px"}} sx={{width:"1000px"}}>
                <Button sx={{ border: '1px #9D9D9D solid'}} size="medium" variant='contained'>Add to cart</Button>
                <Button sx={{ border: '1px #9D9D9D solid'}} size="medium">Add to Wishlist</Button>
                </CardActions>
                </CardContent>
                </Card>
            )}
            </Grid>
            </div>
        </div>
    );
}
export default Book;