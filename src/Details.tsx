import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const DetailContainer = styled(Box)({
  flexGrow: 1,
  padding: '16px',
});

const ImageContainer = styled(Grid)({
  maxWidth: 345,
});

const TextContainer = styled(Grid)({
  textAlign: 'justify',
});

export default function Detail() {
  return (
    <DetailContainer>
      <Grid container spacing={2}>
        <ImageContainer item xs={12} md={4}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.KXfd_WZEZ3mCqaXA7_EQYQHaKX&pid=Api&P=0&h=180"
            alt="cat"
            style={{ width: '90%', height: 'auto' }}
          />
        </ImageContainer>
        <TextContainer item xs={12} md={8}>
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </h1>
        </TextContainer>
      </Grid>
    </DetailContainer>
  );
}
