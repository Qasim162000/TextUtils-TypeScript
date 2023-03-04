import React from "react";

// interface cAlert {
//   message: string;
//   type: string;
// }

// interface customAlert {
//   message?: string;
//   type?: string;
//   // customAlert: ((message?: string, type?: string) => null) | null
// }
type AlertProps = {
  customAlert: {
    message: string;
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
        className={`alert alert-${props.customAlert.message} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.customAlert.type)}</strong>:{" "}
        {props.customAlert.message}
      </div>
    )
  );
};

export default Alert;
