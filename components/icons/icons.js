export const IconAllActivities = props => {
  let fillColor, strokeColor;
  if (props.theme == "dark") {
    (fillColor = "white"), (strokeColor = "white");
  } else {
    (fillColor = "black"), (strokeColor = "black");
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3H10V10H3V3Z"
        fill={fillColor}
        fillOpacity="0.4"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3H21V10H14V3Z"
        fill={fillColor}
        fillOpacity="0.4"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14H21V21H14V14Z"
        fill={fillColor}
        fillOpacity="0.4"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 14H10V21H3V14Z"
        fill={fillColor}
        fillOpacity="0.4"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconYearInReview = props => {
  let fillColor, strokeColor;
  if (props.theme == "dark") {
    (fillColor = "#E0BC3E"), (strokeColor = "#E0BC3E");
  } else {
    (fillColor = "#E0BC3E"), (strokeColor = "#E0BC3E");
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 12H18L15 21L9 3L6 12H2" fill={fillColor} fillOpacity="0.4" />
      <path
        d="M22 12H18L15 21L9 3L6 12H2"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const IconFavourites = props => {
  let fillColor, strokeColor;
  if (props.theme == "dark") {
    (fillColor = "#E0BC3E"), (strokeColor = "#E0BC3E");
  } else {
    (fillColor = "#E0BC3E"), (strokeColor = "#E0BC3E");
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 21L12 16L5 21V5V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z"
        fill="#C95F5F"
        fillOpacity="0.4"
        stroke="#C95F5F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
