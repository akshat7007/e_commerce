import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Grid } from "@mui/material";

export default function Product() {
  return (
    <Grid
      style={{
        margin: "16px",
        justifyContent: "center",
        marginRight: "16px",
        display: "flex",
      }}
    >
      <Card style={{ width: "250px" }}>
        <CardMedia
          component="img"
          height="150"
          image="https://source.unsplash.com/random"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="text.primary">
            Lorem
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent:"space-between"}}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          
            <Button variant="contained">
              Add <ShoppingCartIcon />
            </Button>
        
        </CardActions>
      </Card>
    </Grid>
  );
}
