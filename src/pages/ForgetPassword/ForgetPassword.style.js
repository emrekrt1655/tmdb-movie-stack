import {makeStyles} from '@material-ui/core/styles'


export const styles = makeStyles((theme) => ({
    wrapper: {
        marginTop: '8rem',
        textAlign:'center',
    },
    avatar : {
        margin : '2rem auto 1rem',
        backgroundColor: theme.palette.secondary.main,
    },
    text: {
        marginBottom: '1rem',
        color: '#F50057'
    },
    history : {
        marginTop: '1rem',

        
    },
    span: {
        color: '#F50057',
        cursor: 'pointer',
        textDecoration: 'underline',

        '&:hover': {
            fontSize: 'larger'
        }

    }
}));