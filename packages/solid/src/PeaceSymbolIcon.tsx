import * as React from 'react';
import { IconProps } from './types';

export const PeaceSymbolIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.75 3.08612C6.37108 3.69456 3 7.45361 3 12 3 13.6886 3.46503 15.2686 4.27401 16.6189 4.30249 16.5834 4.33319 16.5491 4.36612 16.5161L10.75 10.1322V3.08612zM5.79934 18.5232C7.12862 19.7872 8.84382 20.649 10.75 20.9139V13.6678L6.13388 18.2839C6.03345 18.3843 5.92017 18.4641 5.79934 18.5232zM13.25 20.9139C15.1562 20.649 16.8714 19.7872 18.2007 18.5232 18.0798 18.4641 17.9666 18.3843 17.8661 18.2839L13.25 13.6678V20.9139zM19.726 16.6189C20.535 15.2686 21 13.6886 21 12 21 7.45361 17.6289 3.69456 13.25 3.08612V10.1322L19.6339 16.5161C19.6668 16.5491 19.6975 16.5834 19.726 16.6189z"
          fill={color}
        />
        <path
          d="M10.75 3.08612C6.37108 3.69456 3 7.45361 3 12 3 13.6886 3.46503 15.2686 4.27401 16.6189 4.30249 16.5834 4.33319 16.5491 4.36612 16.5161L10.75 10.1322V3.08612zM5.79934 18.5232C7.12862 19.7872 8.84382 20.649 10.75 20.9139V13.6678L6.13388 18.2839C6.03345 18.3843 5.92017 18.4641 5.79934 18.5232zM13.25 20.9139C15.1562 20.649 16.8714 19.7872 18.2007 18.5232 18.0798 18.4641 17.9666 18.3843 17.8661 18.2839L13.25 13.6678V20.9139zM19.726 16.6189C20.535 15.2686 21 13.6886 21 12 21 7.45361 17.6289 3.69456 13.25 3.08612V10.1322L19.6339 16.5161C19.6668 16.5491 19.6975 16.5834 19.726 16.6189z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default PeaceSymbolIcon;
