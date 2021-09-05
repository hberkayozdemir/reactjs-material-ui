import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Icon,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Cake,
  Cancel,
  Close,
  Mail,
  Notifications,
  Search,
} from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    /*  backgroundColor: "black", */
  },

  icons: {
    display: "flex",
    alignItems: "center",
    /*  justifyContent: "space-between" */ // çalışmadı ben de badgelere class atıcam
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancelButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      // farklı ölçülere uygun hale getirir responsivelik katıyor
      display: "none",
    },
  },

  search: {
    display: "flex", // block yapınca kayıyor ama
    alignItems: "center",
    // ortalamak icin

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "80%",
    },
  },
  input: {
    color: "white",
    margin: theme.spacing(1),
    // margin left gibi 2 bosluk 1 bosluk bırakup search bar ile arada boşluk bırakıyorum
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Facebook
        </Typography>

        <Cake />
        <Typography variant="h6" className={classes.logoSm}>
          Fb
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase
            className={classes.input}
            placeholder="Search..."
          ></InputBase>

          <Cancel
            className={classes.cancelButton}
            onClick={() => setOpen(false)}
          ></Cancel>
        </div>

        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            /*    onClick={() => (setOpen = true)} */ // bu şekilde kullanamayız setOpen const bir şey ve setOpen bir fonksiyon gibi değer almalı
            onClick={() => setOpen(true)}
          ></Search>
          <Badge badgeContent={4} color="secondary" className={classes.icon}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.icon}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFe9ebkrcDi-Q/profile-displayphoto-shrink_800_800/0/1629672668702?e=1635984000&v=beta&t=Do5lps4vS7PaWsL1Q9qkd-QXM7Vu4z0i5WiMBXK3AoY"
          ></Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
