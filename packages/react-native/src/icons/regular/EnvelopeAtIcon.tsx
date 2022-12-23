import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const EnvelopeAtIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          d="M12.831 2.88097C12.284 2.75668 11.7161 2.75668 11.1691 2.88097C10.5484 3.02202 9.98458 3.37473 9.16838 3.88532L5.76129 6.01477C5.03167 6.4704 4.52725 6.7854 4.15263 7.22253C3.82217 7.60814 3.57347 8.05685 3.42162 8.54145C3.24948 9.0908 3.2497 9.68551 3.25003 10.5457L3.25006 16.2321C3.25005 17.045 3.25004 17.7006 3.29342 18.2315C3.33808 18.7781 3.43244 19.2583 3.65878 19.7025C4.01831 20.4081 4.59198 20.9818 5.29759 21.3413C5.74181 21.5676 6.22195 21.662 6.76859 21.7066C7.29949 21.75 7.9551 21.75 8.76793 21.75H15.2322C16.045 21.75 16.7006 21.75 17.2315 21.7066C17.7782 21.662 18.2583 21.5676 18.7025 21.3413C19.4081 20.9818 19.9818 20.4081 20.3413 19.7025C20.5677 19.2583 20.662 18.7781 20.7067 18.2315C20.7501 17.7006 20.7501 17.045 20.7501 16.2321L20.7501 10.5457C20.7504 9.6855 20.7506 9.0908 20.5785 8.54145C20.4266 8.05685 20.1779 7.60814 19.8475 7.22253C19.4729 6.7854 18.9684 6.4704 18.2388 6.01476L14.8317 3.88532C14.0155 3.37473 13.4517 3.02202 12.831 2.88097ZM11.5015 4.34368C11.8297 4.26911 12.1704 4.26911 12.4986 4.34368C12.8402 4.42131 13.177 4.62003 14.1466 5.226L17.3466 7.226C18.2111 7.76637 18.5022 7.95784 18.7085 8.19862C18.9068 8.42998 19.056 8.69921 19.1471 8.98997C19.2003 9.15966 19.2262 9.3437 19.2387 9.65243L13.5452 14.2784C13.1771 14.5775 12.9321 14.776 12.7303 14.9165C12.5362 15.0517 12.4247 15.1023 12.3372 15.1268C12.1168 15.1885 11.8837 15.1885 11.6634 15.1268C11.5759 15.1023 11.4643 15.0517 11.2703 14.9165C11.0685 14.776 10.8235 14.5775 10.4553 14.2784L4.76143 9.65207C4.77394 9.34356 4.79985 9.15959 4.853 8.98997C4.94411 8.69921 5.09332 8.42998 5.2916 8.19862C5.49795 7.95784 5.78897 7.76637 6.65356 7.226L9.85356 5.226C10.8231 4.62003 11.1599 4.42131 11.5015 4.34368ZM4.75006 11.5755L9.53019 15.4594C9.87219 15.7373 10.1601 15.9713 10.4129 16.1473C10.6784 16.3323 10.9466 16.4838 11.259 16.5713C11.7439 16.707 12.2567 16.707 12.7416 16.5713C13.0539 16.4838 13.3221 16.3323 13.5877 16.1473C13.8404 15.9712 14.1284 15.7373 14.4704 15.4593L19.2501 11.5759V16.2C19.2501 17.0525 19.2495 17.6467 19.2117 18.1093C19.1746 18.5632 19.1055 18.824 19.0048 19.0215C18.7891 19.4449 18.4449 19.7891 18.0215 20.0048C17.824 20.1054 17.5633 20.1745 17.1094 20.2116C16.6467 20.2494 16.0525 20.25 15.2001 20.25H8.80006C7.9476 20.25 7.35337 20.2494 6.89074 20.2116C6.43686 20.1745 6.17609 20.1054 5.97858 20.0048C5.55521 19.7891 5.21101 19.4449 4.99529 19.0215C4.89465 18.824 4.82552 18.5632 4.78844 18.1093C4.75064 17.6467 4.75006 17.0525 4.75006 16.2V11.5755Z"
          fill={color}
        />
        <g opacity=".5" fill={color}>
          <Path d="M7.25 10.5333C7.25 8.05726 9.25726 6.05 11.7333 6.05H12.8C14.9815 6.05 16.75 7.81848 16.75 10V10.8C16.75 11.2142 16.4142 11.55 16 11.55C15.5858 11.55 15.25 11.2142 15.25 10.8V10C15.25 8.64691 14.1531 7.55 12.8 7.55H11.7333C10.0857 7.55 8.75 8.88569 8.75 10.5333C8.75 10.9476 8.41421 11.2833 8 11.2833C7.58579 11.2833 7.25 10.9476 7.25 10.5333Z" />
          <Path d="M13.0512 8.57122C12.6935 8.36738 12.2811 8.25 11.8333 8.25 10.3465 8.25 9.25 9.54399 9.25 11 9.25 12.456 10.3465 13.75 11.8333 13.75 12.4568 13.75 13.0117 13.5225 13.4458 13.1508 13.7225 13.4024 14.1497 13.4135 14.4399 13.163 14.7535 12.8924 14.7882 12.4188 14.5176 12.1052 14.4542 12.0318 14.4167 11.9379 14.4167 11.8333V9C14.4167 8.58579 14.0809 8.25 13.6667 8.25 13.4119 8.25 13.1868 8.37704 13.0512 8.57122zM11.8333 9.75C12.3715 9.75 12.9167 10.2469 12.9167 11 12.9167 11.7531 12.3715 12.25 11.8333 12.25 11.2951 12.25 10.75 11.7531 10.75 11 10.75 10.2469 11.2951 9.75 11.8333 9.75zM10.4132 16.1475C10.1605 15.9715 9.87219 15.7373 9.53019 15.4594L9.22664 15.2128 4.46973 19.9697 5.53039 21.0303 10.4132 16.1475zM13.5871 16.1477L18.4697 21.0303 19.5304 19.9697 14.7737 15.213 14.4704 15.4594C14.1284 15.7373 13.8398 15.9717 13.5871 16.1477z" />
        </g>
      </Svg>
    );
  }
);

export default EnvelopeAtIcon;