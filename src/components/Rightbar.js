import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}));

const RightBar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Rightbar</Container>;
};
export default RightBar;
