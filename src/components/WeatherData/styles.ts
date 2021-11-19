import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15
    },
    location: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 500,
        fontStyle: 'italic',
        textAlign: 'center',
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)'
    },
    date: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 300,
        fontStyle: 'italic',
        textAlign: 'center',
        textShadow: '2px 2px rgba(50, 50, 70, 0.5)'
    },
    temperature: {
        color: '#fff',
        fontSize: 70,
        fontWeight: 500,
        textAlign: 'center',
        textShadow: '2px 2px rgba(50, 50, 70, 0.3)',

        boxShadow: '3px 6px rgba(0,0,0,0.2)',

        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 16,
        padding: 30
    },
    weather: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 48,
        fontWeight: 700,
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)',
    }
});
