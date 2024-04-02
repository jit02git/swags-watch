import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

export default function RecipeReviewCard() {
    const test = [{
        "img": "https://tse3.mm.bing.net/th?id=OIP.KXfd_WZEZ3mCqaXA7_EQYQHaKX&pid=Api&P=0&h=180",
        "title": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    }, {
        "img": "https://tse1.mm.bing.net/th?id=OIP.LUmyx70oxQyeX65tp4R1sgHaF7&pid=Api&P=0&h=180",
        "title": 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    }, {
        "img": "https://tse1.mm.bing.net/th?id=OIP.JErL_YgWda2grS0dw4Wj3gHaHo&pid=Api&P=0&h=180",
        "title": 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
    }]


    return (<>
        <Grid container spacing={2}>
            {test.map((index) => (
                <Grid item xs={12} sm={6} md={4} mt={1}>
                    <Card sx={{ maxWidth: 345, p: 2 }} >
                        <CardMedia
                            component="img"
                            height="400"
                            image={`${index.img}`}
                            alt="Paella dish"
                        />
                        <CardContent style={{height:'50px'}}>
                            <Typography variant="body2" color="text.secondary">
                                {index.title}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Link to={`/detail`}>
                                <IconButton aria-label="add to favorites">
                                    <VisibilityIcon />
                                </IconButton>
                            </Link>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
    );
}
