import React, { useRef, useState } from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";

function Entry(props) {
  //console.log(props.name, props.logo, props.externallink);

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

  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          <img src={props.logo} alt="logo" className="logo" />
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.description}
        {props.code === undefined ? null : (
          <div>
            <textarea
              // hidden="hidden"
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
        {/* <b onClick={copyToClipboard}>{props.code}</b> */}

        <div>
          {
            /* Logical shortcut for only displaying the 
          button if the copy command exists */
            document.queryCommandSupported("copy") && (
              <div>
                <b>{copySuccess}</b>
              </div>
            )
          }
        </div>

        {props.externallink === undefined ? null : (
          <a href={props.externallink}>
            {" "}
            <b>this referral link</b>
          </a>
        )}
      </dd>
      <br />
      <Button
        href={props.link}
        color="default"
        endIcon={<KeyboardArrowRightIcon />}
      >
        more
      </Button>
    </div>
  );
}

export default Entry;
