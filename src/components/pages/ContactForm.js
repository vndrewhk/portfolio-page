import styles from "./contact.module.css";
import {
  TextField,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useEffect, useRef, useState } from "react";
import { green } from "@mui/material/colors";
import useHttp from "../../hooks/use-http";

const ContactForm = () => {
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    createdOn: "",
  });

  const [nameFocused, setNameFocused] = useState(false);

  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const nameTextRef = useRef();

  const emailTextRef = useRef();

  const phoneTextRef = useRef();

  const messageTextRef = useRef();

  const nameBlurHandler = () => {
    if (nameFocused && nameTextRef.current.value.length === 0) {
      // if (nameTextRef.current.value.length === 0) {
      console.log("Please enter a valid name!");
    }
    if (!nameFocused) {
      setNameFocused(true);
      if (nameTextRef.current.value.length === 0) {
        console.log("Please enter a valid name!");
      }
    }
    setMessageInfo((prevState) => {
      return { ...prevState, name: nameTextRef.current.value };
    });
  };

  const nameChangeHandler = () => {
    if (nameFocused && nameTextRef.current.value.length === 0) {
      // if (nameTextRef.current.value.length === 0) {
      console.log("Please enter a valid name!");
    }
  };
  const emailBlurHandler = () => {
    if (emailFocused && !emailTextRef.current.value.includes("@")) {
      console.log("Please enter a valid email!");
    }
    if (!emailFocused) {
      setEmailFocused(true);
    }
    setMessageInfo((prevState) => {
      return { ...prevState, email: emailTextRef.current.value };
    });
  };

  const phoneBlurHandler = () => {
    if (phoneFocused && phoneTextRef.current.value.length < 10) {
      console.log("Please enter a valid phone number!");
    }
    if (!phoneFocused) {
      setPhoneFocused(true);
    }
    setMessageInfo((prevState) => {
      return { ...prevState, phone: phoneTextRef.current.value };
    });
  };

  const messageChangeHandler = () => {
    if (messageFocused && nameTextRef.current.value.length === 0) {
      // if (nameTextRef.current.value.length === 0) {
      console.log("Please enter a valid name!");
    }
    setMessageInfo((prevState) => {
      return {
        ...prevState,
        message: messageTextRef.current.value,
        createdOn: new Date(),
      };
    });
  };

  let { isLoading, success, sendRequest: sendMessageRequest } = useHttp();

  const enterMessageHandler = async (messageInfo) => {
    console.log(isLoading);
    console.log(success);
    sendMessageRequest({
      url: "https://portfolio-c6560-default-rtdb.firebaseio.com/contact.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: messageInfo,
    });
    // console.log("done");
    console.log(isLoading);
    console.log(success);
  };

  const submitContactHandler = (e) => {
    e.preventDefault();

    enterMessageHandler(messageInfo);

  };


  return (
    <div className={styles["contact-info-box"]}>
      {isLoading && (
        <CircularProgress
          color="success"
          className={styles["contact-info-title"]}
        />
      )}
      {!isLoading && (
        <>
          <Typography
            variant="p1"
            component="h2"
            className={styles["contact-info-title"]}
          >
            <span className={styles.icon}>
              <DriveFileRenameOutlineIcon />
            </span>
            <span>Contact Me!</span>
          </Typography>

          <Typography
            variant="p1"
            component="h3"
            className={styles["contact-form-message"]}
          >
            Leave a message here and I'll get back to you as soon as possible!
          </Typography>

          <form className={styles["contact-form-field"]}>
            <Box className={styles["contact-form-info"]}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Name"
                variant="standard"
                inputRef={nameTextRef}
                onBlur={nameBlurHandler}
                onChange={nameChangeHandler}
              />

              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="E-mail"
                variant="standard"
                inputRef={emailTextRef}
                onBlur={emailBlurHandler}
              />
              <PhoneIphoneIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="Phone"
                variant="standard"
                inputRef={phoneTextRef}
                onBlur={phoneBlurHandler}
              />
            </Box>
            <TextField
              className={styles["contact-form-textbox"]}
              id="outlined-multiline-flexible"
              label="Please leave a message!"
              multiline
              maxRows={10}
              inputRef={messageTextRef}
              onChange={messageChangeHandler}
            />
            <Button variant="contained" onClick={submitContactHandler}>
              {/*   <FolderIcon className={styles["route-button"]} /> */}
              Submit
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
