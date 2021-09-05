import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "30vh",
    [theme.breakpoints.down("sm")]: {
      height: "15vh",
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
  
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          title="My post"
          className={classes.media}
          image="https://images.pexels.com/photos/4424102/pexels-photo-4424102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first post
          </Typography>
          <Typography variant="body2">
            lorem ipsum dolor sit amet, consectet lOVcGUoRxcEcfyvFMAnDgaF1VWw
            lorem asdfkljaslkdfmjasdf asdfklşasddkfşlaskdf asdflşkmasdşlfkasd
            asdfkaşsldfkpşlasdkfasd
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
