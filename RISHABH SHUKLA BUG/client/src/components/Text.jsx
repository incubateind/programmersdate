import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: 22,
  },
}));

export default function TypographyTheme(props) {
  const { text } = props;
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
}
