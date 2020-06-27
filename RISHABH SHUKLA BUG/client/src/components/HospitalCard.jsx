import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";
import HospitalInfo from "./HospitalInfo";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "green",
  },
}));

export default function HospitalCards({ props }) {
  const { name, desc, address, image, link, data } = props;
  console.log(props);
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ width: 345 }}
      width="345px"
      style={{ flexBasis: "33.33%" }}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={Math.floor(Math.random() * 30) + " kms away"}
      />
      {image ? (
        <CardMedia className={classes.media} image={image} title={data.name} />
      ) : null}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/hospital/profile/${data._id}`}>
          <Button variant="outlined" color="primary" endIcon={<InfoIcon />}>
            View Detail
          </Button>
        </Link>
        <a href={`tel:${data.telephone}`}>
          <Button
            variant="outlined"
            color="#aed581"
            endIcon={<AddIcCallIcon />}
          >
            Call
          </Button>
        </a>
        <HospitalInfo props={{ data }} />
      </CardActions>
    </Card>
  );
}
