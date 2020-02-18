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
