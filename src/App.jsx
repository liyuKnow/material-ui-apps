import React from 'react';
import { Send as SendIcon } from '@material-ui/icons';
import Navbar from './components/Navbar';
import { Container, Grid, makeStyles } from '@material-ui/core';
import FeaturedPost from './components/FeaturedPost/FeaturedPost';
import { featuredPosts, sidebar } from './Data/Data';
import PostCard from './components/PostCard/PostCard';
import Main from './components/Main/Main';
import RightSideBAr from './components/RightSideBar/RightSideBAr';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container >
      <Navbar />
      <FeaturedPost />
      <br />
      <Grid container spacing={3}>
        {featuredPosts.map(post => (
          <PostCard post={post} key={post.title} />
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="From the Firehose" />
        <RightSideBAr
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </Container>

  );
}

export default App;
