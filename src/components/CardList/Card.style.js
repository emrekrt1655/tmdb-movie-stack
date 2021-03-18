import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles( (theme) =>({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    avatar : {
      margin : '2rem auto 1rem',
      backgroundColor: theme.palette.secondary.main,
  },
  lang : {
    textTransform: 'capitalize',
    marginRight: '0.9rem'
  },

  wrapper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
    
  },

  langfam:{
    display:'flex',
    flexDirection:'row',
  },

  icon:{
    fontSize:'small'
  },

  spann: {
    color:theme.palette.secondary.main
  }

  

  }));