import { makeStyles } from '@mui/styles';

import coldBg from '../assets/images/cold-bg.jpg';
import warmBg from '../assets/images/warm-bg.jpg';

export const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundImage: `url(${coldBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        transition: '0.4 ease-out',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.3)'
    },
    appWarm: {
        backgroundImage: `url(${warmBg})`,
    }
});
