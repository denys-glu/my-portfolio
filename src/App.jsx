import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Main from './components/Main';

//Images
import mainBackground from './assets/images/slider-1-1920x1080.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mainBackground: {
    backgroundImage: `url(${mainBackground})`,
    backgroundSize: "cover",
    paddingTop: "200px!important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.mainBackground}>
            <div className={classes.paper}>
              <Main />
            </div>
          </Grid>
          <Grid item xs={12}>
            About Me
          </Grid>
          <Grid item xs={12}>
            Skills
          </Grid>
          <Grid item xs={6}>
            Projects
          </Grid>
          <Grid item xs={6}>
            Projects
          </Grid>
          <Grid item xs={12}>
            Contact me
          </Grid>
          <Grid item xs={12}>
            Footer
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
