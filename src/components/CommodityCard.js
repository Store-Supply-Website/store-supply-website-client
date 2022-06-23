import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard () {
  const [expanded, setExpanded] = React.useState(false)
  const [isShowAlert, setIsShowAlert] = React.useState(false)

  const handleAlertClick = () => {
    setIsShowAlert(true)
  }

  const handleAlertClose = () => {
    setIsShowAlert(false)
  }
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const handleDelete = () => {

    console.log('Delete')
  }
  const handleEdit = () => {
    console.log('Edit')
  }
  return (
    <div className='flexbox-centering'>
      <Card sx={{ width: 0.35, mt: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=248&fit=crop&auto=format"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h4">
            Burger
          </Typography>
          <Typography paragraph>
          </Typography>
          <Typography variant="h5">
            About this item:
          </Typography>
          <Typography paragraph>
            - DISINFECTANT SPRAY KILLS 99.9% OF VIRUSES AND BACTERIA: Lysol Disinfectant Spray is tested and proven to kill 99.9% of viruses and bacteria, including COVID-19/Coronavirus (when used as directed); EPA Reg 777-99​.
          </Typography>
          <Typography paragraph>
            - DISINFECTANT SPRAY KILLS 99.9% OF VIRUSES AND BACTERIA: Lysol Disinfectant Spray is tested and proven to kill 99.9% of viruses and bacteria, including COVID-19/Coronavirus (when used as directed); EPA Reg 777-99​.
          </Typography>
          <Typography paragraph>
          </Typography>
          <Typography variant="h5">
            Contact provider:
          </Typography>
          <Typography paragraph>
            123-456-789
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleAlertClick}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={handleEdit}>
            <ShareIcon />
          </IconButton>
          {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"

        >
          <ExpandMoreIcon />
        </ExpandMore> */}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Dialog
        open={isShowAlert}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose}>Disagree</Button>
          <Button onClick={handleAlertClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  )
}
