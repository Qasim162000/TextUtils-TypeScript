import React from "react";

type AlertProps = {
  customAlert: {
    msg: string;
    type: string;
  } | null;
};

const Alert = (props: AlertProps) => {
  const capitalize = (word: string) => {
    // Method 1:
    // return word.charAt(0).toUpperCase() + word.slice(1);

    // Method 2:
    let firstCapitalized = word[0].toUpperCase();
    return firstCapitalized + word.slice(1);
  };
  return (
    props.customAlert && (
      <div
        className={`alert alert-${props.customAlert.msg} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.customAlert.type)}</strong>:{" "}
        {props.customAlert.msg}
      </div>
    )
  );
};

export default Alert;
