import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 380

  },
  media: {
    height: 140,
  },
  avatar: {
    margin: '2rem auto 1rem',
    backgroundColor: theme.palette.secondary.main,
  },
  lang: {
    textTransform: 'capitalize',
    marginRight: '0.9rem'
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },

  langfam: {
    display: 'flex',
    flexDirection: 'row',
  },

  icon: {
    fontSize: 'small'
  },

  spann: {
    color: theme.palette.secondary.main
  },

  para: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical'


  },
  titlehead: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },

  cardAction: {
    position: 'relative',




  },

  cardButtonLeft: {
    position: 'sticky',
    left: 10,
    bottom: 10
  },

  cardButtonRight: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },

}));