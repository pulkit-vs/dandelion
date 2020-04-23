import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <Grid container style={{ padding: "5%" }} spacing={3}>
                <Grid item xs={12} sm={4}>
                    <img src={require('./mui.png')} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <h2 style={{ color: "#12a9cf" }}>AMN Wonolo</h2>
                    <span style={{fontSize:"15px"}}> Software Project </span>
                </Grid>
            </Grid>
        </Card>
    );
}