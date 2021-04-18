import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import useStyles from './styles';

export default function Cards(props) {
    const classes = useStyles();
  return (
   <Card className={classes.card}>
     <CardMedia className={classes.media} image={props.selectedFile || 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'} />
     <div className={classes.overlay}>
       <Typography variant="h6">{props.artwork_type_title}</Typography>
       <Typography variant="body2">{props.date_start} - {props.date_end}</Typography>
     </div>
     <div className={classes.details}>
       <Typography variant="body2" color="textSecondary" component="h2">{props.classification_title}</Typography>
     </div>
     <Typography className={classes.title} gutterBottom variant="h5" component="h2">Artist: {props.artist_title}</Typography>
     <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">{props.message}</Typography>
     </CardContent>
   </Card>
 );
};
