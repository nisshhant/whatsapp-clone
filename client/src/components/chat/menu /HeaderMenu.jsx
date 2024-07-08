import { useState } from "react";

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";

const HeaderMenu = () => {
  const [open, setOpen ] = useState(false);
  const handleClose = () => {
    setOpen(null);
  }
  const handlecLick = (e) => {
    setOpen(e.curren tTarget);
  }
  return (
    <div><MoreVert onclick = {handlecLick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getConentAnchorE1 = {null}
        anchorOrigin={{vertical:"bottom",
          horizontal : "center"
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>

  )

}
export default HeaderMenu;