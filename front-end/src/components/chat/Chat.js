import { Box, Container, Grid, List, ListItem, ListItemText, Paper, Typography, Divider, FormControl, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Fragment, useState } from "react";
import { ChatMessageDto } from "../model/ChatMessageDto.js";
import './chat.css';
import SendIcon from "@mui/icons-material/Send";
const Chat = () => {

    const [chatMessages, setChatMessages] = useState([
        new ChatMessageDto('John', 'hi')
    ]);

    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
    const listChatMessages = chatMessages.map((chatMessageDto, index) => 
        <ListItem key={index}>
            <ListItemText primary={`${chatMessageDto.user}: ${chatMessageDto.message}`}/>
        </ListItem>
    );
    const userChangeHandler = (event) => {
        setUser(event.target.value);
    }
    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    }
    const sendMessage = () => {
        if(user && message) {
            console.log("sent!");
        }
    }
    return(
        <Fragment>
            <Container>
                <Paper elevation={5}>
                    <Box p={3}>
                        <Typography variant="h4" gutterBottom>
                            Happy Chatting
                        </Typography>
                        <Divider />
                        <Grid container spacing={4} alignItems="center">
                            <Grid id='chat-window' xs={12} item>
                                <List id='chat-window-messages'>
                                    {listChatMessages}
                                </List>
                            </Grid>
                            <Grid xs={2} item>
                                <FormControl xs={2} fullWidth>
                                    <TextField value={user} label="nickname" variant="outlined" onChange={userChangeHandler}/>
                                </FormControl>
                            </Grid>
                            <Grid xs={9} item>
                                <FormControl fullWidth>
                                    <TextField value={message} label="Type your message..." variant="outlined" onChange={messageChangeHandler}/>
                                </FormControl>
                            </Grid>
                            <Grid xs={1} item>
                                <IconButton aria-label="send" color="primary" onClick={sendMessage}>
                                    <SendIcon></SendIcon>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Fragment>
    );
}

export default Chat;