import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import Ionicon from 'react-ionicons';

export default function AlertDialog(props) {
    const { closeModal } = props;
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{style:{width:"100%", height:"50%"}}}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container spacing={3}>
                            <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                                <Ionicon icon="md-people"/><br></br>
                                People
                             </Grid>
                            <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                                <Ionicon icon="ios-star" /><br></br>
                                Starred
                             </Grid>
                            <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                                <Ionicon icon="md-arrow-round-back" /><br></br>
                                Backlog View
                    </Grid>
                    <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                    <Ionicon icon="ios-construct" /><br></br>
                                Project Settings
                             </Grid>
                            <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                            <Ionicon icon="md-checkmark-circle-outline" /><br></br>
                                Project Access
                             </Grid>
                            <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                            <Ionicon icon="ios-easel-outline" /><br></br>
                                Sprint Board
                    </Grid>
                    <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                    <Ionicon icon="md-map" /><br></br>
                               Roadmap
                             </Grid>
                            <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                            <Ionicon icon="ios-flower" /><br></br>
                                Release
                             </Grid>
                            <Grid item sm={4} xs={12} style={{ textAlign: "center", color:"black" }}>
                            <Ionicon icon="ios-people" /><br></br>
                                Manage Team
                    </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
