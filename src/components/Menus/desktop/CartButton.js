import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./CartButton.styles";
import { Typography, Button, Fade } from "@material-ui/core";
import CartItem from "./CartItem";

export default function CartButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.topDiv} onClick={()=>setOpen(!open)}>
        <ShoppingCartIcon className={classes.shopIcon} />
        <div className={classes.badge}>
          <Typography variant="subtitle2" color="textPrimary">
            2
          </Typography>
        </div>
      </div>

      <Fade in={open}>
        <div className={classes.cartContent}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div className={classes.PriceDiv}>
            <Typography variant="h5" color="textprimary">
              قیمت کل:
            </Typography>
            <Typography variant="h5" color="textprimary">
              50,000
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="small"
            className={classes.button}
          >
            نمایش سبد خرید
          </Button>
        </div>
      </Fade>
    </div>
  );
}
