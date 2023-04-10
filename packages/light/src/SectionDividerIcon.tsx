import * as React from 'react';
import { IconProps } from './types';

export const SectionDividerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M2.75 4.75C3.02614 4.75 3.25 4.97386 3.25 5.25C3.25 5.77363 3.23292 6.30063 3.27559 6.82288C3.30031 7.12546 3.3464 7.29931 3.41349 7.43099C3.5573 7.71323 3.78677 7.9427 4.06901 8.08651C4.20069 8.1536 4.37454 8.19969 4.67712 8.22441C4.98554 8.24961 5.3817 8.25 5.95 8.25H17.55C18.1183 8.25 18.5145 8.24961 18.8229 8.22441C19.1255 8.19969 19.2993 8.1536 19.431 8.08651C19.7132 7.9427 19.9427 7.71323 20.0865 7.43099C20.1536 7.29931 20.1997 7.12546 20.2244 6.82288C20.2671 6.30063 20.25 5.77363 20.25 5.25C20.25 4.97386 20.4739 4.75 20.75 4.75C21.0261 4.75 21.25 4.97386 21.25 5.25C21.25 5.8009 21.266 6.35485 21.2211 6.90431C21.1913 7.26874 21.1284 7.58883 20.9775 7.88498C20.7378 8.35538 20.3554 8.73783 19.885 8.97752C19.1938 9.32967 18.3211 9.25001 17.5714 9.25H5.92861C5.38671 9.25001 4.94963 9.25001 4.59569 9.22109C4.23126 9.19132 3.91117 9.12841 3.61502 8.97752C3.14462 8.73783 2.76217 8.35538 2.52248 7.88498C2.37159 7.58883 2.30868 7.26874 2.27891 6.90431C2.23402 6.35485 2.25 5.8009 2.25 5.25C2.25 4.97386 2.47386 4.75 2.75 4.75ZM2 12C2 11.7239 2.22386 11.5 2.5 11.5H21.5C21.7761 11.5 22 11.7239 22 12C22 12.2761 21.7761 12.5 21.5 12.5H2.5C2.22386 12.5 2 12.2761 2 12ZM5.92858 14.75H17.5714C18.1133 14.75 18.5504 14.75 18.9043 14.7789C19.792 14.8514 20.5633 15.3021 20.9775 16.115C21.1284 16.4112 21.1913 16.7313 21.2211 17.0957C21.266 17.6452 21.25 18.1991 21.25 18.75C21.25 19.0261 21.0261 19.25 20.75 19.25C20.4739 19.25 20.25 19.0261 20.25 18.75C20.25 18.2264 20.2671 17.6994 20.2244 17.1771C20.1604 16.3939 19.6341 15.8419 18.8229 15.7756C18.5145 15.7504 18.1183 15.75 17.55 15.75H5.95C5.3817 15.75 4.98554 15.7504 4.67712 15.7756C3.86592 15.8419 3.33958 16.3939 3.27559 17.1771C3.23292 17.6994 3.25 18.2264 3.25 18.75C3.25 19.0261 3.02614 19.25 2.75 19.25C2.47386 19.25 2.25 19.0261 2.25 18.75C2.25 18.1991 2.23402 17.6452 2.27891 17.0957C2.30868 16.7313 2.37159 16.4112 2.52248 16.115C2.93667 15.3021 3.70803 14.8514 4.59569 14.7789C4.94962 14.75 5.3867 14.75 5.92858 14.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default SectionDividerIcon;