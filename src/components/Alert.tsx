import React from "react";

// interface cAlert {
//   message: string;
//   type: string;
// }

interface Props {
  customAlert: () => void | boolean;
}

const Alert: React.FC<Props> = () => {
  const capitalize = (word: string) => {
    // Method 1:
    // return word.charAt(0).toUpperCase() + word.slice(1);

    // Method 2:
    let firstCapitalized = word[0].toUpperCase();
    return firstCapitalized + word.slice(1);
  };
  return (
    cAlert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(alert.type)}</strong>: {alert.message}
      </div>
    )
  );
};

export default Alert;
