import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
}));

export default function FontAwesome() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Button>
        <Link href="https://www.linkedin.com/in/denys-glukhovskyi-098227108/" target="_blank">
          <Icon className="fab fa-linkedin" />
        </Link>
      </Button>
      <Button>
        <Link href="https://github.com/denys-glu" target="_blank">
          <Icon className="fab fa-github-square" />
        </Link>
      </Button>
    </div>
  );
}