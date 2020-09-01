import React, { useRef, useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  cardHeader: {
    lineHeight: "3",
    margin: "auto",
    boxShadow: "none",
    color: "white",
    opacity: "0.5"
  },
  titleBox: {
    background: "#2ec2b0"
  },
  maincard: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "30px"
  }
});

export default function CodeCard(props) {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
    setTimeout(function () {
      setCopySuccess("");
    }, 2500);
  }

  const classes = useStyles();

  return (
    <a href={props.externallink}>
      <div>
        <Card className={classes.maincard}>
          <CardContent className={classes.titleBox}>
            <Typography
              className={classes.cardHeader}
              variant="h6"
              component="h5"
            >
              {props.externallink === undefined ? "CODE" : "LINK"}
            </Typography>
          </CardContent>
          <div>
            <CardContent>
              <Typography variant="h6" component="h2">
                {props.description}
              </Typography>
              <Typography variant="body1" component="p">
                {props.code === undefined ? null : (
                  <div>
                    <textarea
                      className="textarea"
                      cols={props.code.length}
                      rows="1"
                      onClick={copyToClipboard}
                      ref={textAreaRef}
                      defaultValue={props.code}
                      spellCheck="false"
                    />
                  </div>
                )}
                <div>
                  {document.queryCommandSupported("copy") && (
                    <div>
                      <b>{copySuccess}</b>
                    </div>
                  )}

                  {props.externallink === undefined ? null : (
                    <a href={props.externallink}>{props.externallink}</a>
                  )}
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Last Verified: <b>Today</b>
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    </a>
  );
}
