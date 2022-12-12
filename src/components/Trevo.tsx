import * as React from "react";
import { SVGProps } from "react";

const Trevo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      d="M26.265 3.69C17.807-3.057 12.982 6.21 11.52 12.5-2.327 16.686-.037 23.529 4.512 28.125 6.596 30.23 9.6 31 12.561 31h17.458V12.855c0-3.463-1.047-7.007-3.754-9.166Z"
      fill="#F44E1E"
      stroke="#F44E1E"
    />
    <path
      d="M35.773 3.354c8.458-6.745 13.283 2.521 14.746 8.81 13.846 4.186 11.556 11.03 7.007 15.626-2.084 2.104-5.087 2.874-8.049 2.874H32.02V12.52c0-3.463 1.047-7.006 3.754-9.165Z"
      fill="#1CBBFF"
      stroke="#1CBBFF"
    />
    <path
      d="M26.284 60.31c-8.458 6.746-13.283-2.52-14.746-8.81C-2.308 47.314-.018 40.471 4.531 35.875 6.615 33.77 9.618 33 12.58 33h17.458v18.145c0 3.463-1.047 7.007-3.754 9.166Z"
      fill="#A35AFF"
      stroke="#A35AFF"
    />
    <path
      d="M35.773 60.31c8.458 6.746 13.283-2.52 14.746-8.81 13.846-4.186 11.556-11.029 7.007-15.625C55.442 33.77 52.439 33 49.477 33H32.02v18.145c0 3.463 1.047 7.007 3.754 9.166Z"
      fill="#0ACE84"
      stroke="#0ACE84"
    />
  </svg>
);

export default Trevo;
