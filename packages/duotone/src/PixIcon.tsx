import * as React from 'react';
import { IconProps } from './types';

export const PixIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <g opacity=".5" fill={color}>
          <path d="M17.4162 15.4873L18.665 14.2386C19.4485 13.455 19.8403 13.0632 19.9871 12.6114C20.1162 12.214 20.1162 11.786 19.9871 11.3886C19.8403 10.9368 19.4485 10.545 18.665 9.76146L17.4163 8.51276H15.908C15.6995 8.51276 15.4835 8.60325 15.3123 8.79147L13.3723 10.9255C12.6363 11.7351 11.3632 11.7351 10.6272 10.9255L8.68713 8.79147C8.51603 8.60325 8.29995 8.51276 8.09144 8.51276H6.5832L5.33451 9.76146C4.55094 10.545 4.15916 10.9368 4.01237 11.3886C3.88325 11.786 3.88325 12.214 4.01237 12.6114C4.15916 13.0632 4.55094 13.455 5.33449 14.2385L6.58325 15.4873H8.09144C8.29995 15.4873 8.51603 15.3968 8.68713 15.2086L10.6272 13.0745C11.3632 12.265 12.6363 12.265 13.3723 13.0745L15.3123 15.2086C15.4835 15.3968 15.6995 15.4873 15.908 15.4873H17.4162Z" />
          <path d="M15.908 7.0288H15.9323L14.2383 5.33478C13.4547 4.55122 13.0629 4.15943 12.6112 4.01264 12.2138 3.88352 11.7857 3.88352 11.3883 4.01264 10.9365 4.15943 10.5448 4.55121 9.76119 5.33478L8.06717 7.0288H8.09144C8.74164 7.0288 9.34909 7.31355 9.78518 7.79324L11.7252 9.9273C11.8724 10.0892 12.1271 10.0892 12.2743 9.9273L14.2143 7.79324C14.6504 7.31355 15.2578 7.0288 15.908 7.0288zM15.9323 16.9713H15.908C15.2578 16.9713 14.6504 16.6865 14.2143 16.2068L12.2743 14.0728C12.1271 13.9109 11.8724 13.9109 11.7252 14.0728L9.78518 16.2068C9.34909 16.6865 8.74164 16.9713 8.09144 16.9713H8.06721L9.76119 18.6652C10.5448 19.4488 10.9365 19.8406 11.3883 19.9874 11.7857 20.1165 12.2138 20.1165 12.6112 19.9874 13.0629 19.8406 13.4547 19.4488 14.2383 18.6652L15.9323 16.9713z" />
        </g>
        <path
          d="M19.7511 8.74885C20.1113 9.10905 20.4422 9.43988 20.6962 9.73904C20.97 10.0616 21.2405 10.4436 21.3985 10.93C21.6245 11.6254 21.6245 12.3746 21.3985 13.07C21.2405 13.5564 20.97 13.9384 20.6962 14.261C20.4422 14.5601 20.1113 14.891 19.7511 15.2512L15.251 19.7512C14.8908 20.1115 14.5599 20.4424 14.2608 20.6964C13.9382 20.9702 13.5562 21.2407 13.0698 21.3987C12.3744 21.6247 11.6253 21.6247 10.9298 21.3987C10.4434 21.2407 10.0614 20.9702 9.73886 20.6964C9.43968 20.4424 9.10885 20.1115 8.74863 19.7512L4.24861 15.2512C3.88832 14.891 3.55743 14.5601 3.30344 14.261C3.02961 13.9384 2.75915 13.5564 2.60111 13.07C2.37515 12.3746 2.37515 11.6254 2.60111 10.93C2.75915 10.4436 3.02961 10.0616 3.30344 9.73904C3.55742 9.43987 3.88829 9.10904 4.24856 8.74883L8.74863 4.24875C9.10885 3.88848 9.43968 3.5576 9.73886 3.30362C10.0614 3.02979 10.4434 2.75934 10.9298 2.60129C11.6253 2.37533 12.3744 2.37533 13.0698 2.60129C13.5562 2.75934 13.9382 3.02979 14.2608 3.30362C14.5599 3.5576 14.8908 3.88846 15.251 4.24872L19.7511 8.74885ZM18.665 14.2385L17.4163 15.4873H15.9081C15.6996 15.4873 15.4835 15.3968 15.3124 15.2086L13.3724 13.0745C12.6364 12.265 11.3632 12.265 10.6273 13.0745L8.68721 15.2086C8.5161 15.3968 8.30003 15.4873 8.09152 15.4873H6.58332L5.33458 14.2385C4.55102 13.455 4.15923 13.0632 4.01244 12.6114C3.88332 12.214 3.88332 11.786 4.01244 11.3886C4.15924 10.9368 4.55102 10.545 5.33458 9.76145L6.58328 8.51275H8.09152C8.30003 8.51275 8.5161 8.60323 8.68721 8.79145L10.6273 10.9255C11.3632 11.7351 12.6364 11.7351 13.3724 10.9255L15.3124 8.79145C15.4835 8.60323 15.6996 8.51275 15.9081 8.51275H17.4163L18.665 9.76145C19.4486 10.545 19.8404 10.9368 19.9872 11.3886C20.1163 11.786 20.1163 12.214 19.9872 12.6114C19.8404 13.0632 19.4486 13.455 18.665 14.2385ZM15.9324 7.02879H15.9081C15.2579 7.02879 14.6505 7.31353 14.2144 7.79323L12.2743 9.92728C12.1271 10.0892 11.8725 10.0892 11.7253 9.92728L9.78525 7.79323C9.34917 7.31353 8.74171 7.02879 8.09152 7.02879H8.06724L9.76127 5.33476C10.5448 4.5512 10.9366 4.15942 11.3884 4.01263C11.7858 3.88351 12.2138 3.88351 12.6112 4.01263C13.063 4.15942 13.4548 4.5512 14.2384 5.33477L15.9324 7.02879ZM15.9081 16.9712H15.9323L14.2384 18.6652C13.4548 19.4488 13.063 19.8406 12.6112 19.9874C12.2138 20.1165 11.7858 20.1165 11.3884 19.9874C10.9366 19.8406 10.5448 19.4488 9.76126 18.6652L8.06729 16.9712H8.09152C8.74171 16.9712 9.34917 16.6865 9.78526 16.2068L11.7253 14.0728C11.8725 13.9108 12.1271 13.9108 12.2743 14.0728L14.2144 16.2068C14.6505 16.6865 15.2579 16.9712 15.9081 16.9712Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default PixIcon;
