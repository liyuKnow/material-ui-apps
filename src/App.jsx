import { Send } from '@mui/icons-material';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Navbar from './components/navbar/Navbar';
import ImageResults from './components/image-results/ImageResults';
import Search from './components/search/Search';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 10,
  }
}));
function App() {
  const classes = useStyles();

  return (
    <div >
      <Navbar />
      <Container className={classes.container} >
        <Search />
        <ImageResults />
      </Container>
    </div>
  );
}

export default App;
