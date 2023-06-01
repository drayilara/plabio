// This component needs to be modified. Read bout snackbars here before using: https://m2.material.io/components/snackbars

import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function AutoNotification({
  waitTime,
  verticalDirection,
  horizontalDirection,
  message,
}) {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    const openNotificationOnPageLoad = () => {
      setState((prev) => ({
        ...prev,
        open: true,
        vertical: verticalDirection,
        horizontal: horizontalDirection,
      }));
    };

    setTimeout(() => {
      openNotificationOnPageLoad();
    }, waitTime);
  }, [waitTime]);

  const { open, vertical, horizontal } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={message}
      key={vertical + horizontal}
      action={
        <>
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
    ></Snackbar>
  );
}
