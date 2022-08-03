import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import ChatIcon from '@mui/icons-material/Chat';
const Bar = () => {
    return (
        <Fragment>
            <Box mb={4}>
                <AppBar position="static">
                    <Toolbar>
                        <Box >
                            <ChatIcon></ChatIcon>
                        </Box>
                        <Typography variant='h6'>
                            React chat app
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </Fragment>
    );
};

export default Bar;