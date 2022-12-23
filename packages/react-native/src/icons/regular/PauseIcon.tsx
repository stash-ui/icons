import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PauseIcon = (
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
          d="M8.75 5.25C7.64543 5.25 6.75 6.14543 6.75 7.25V16.75C6.75 17.8546 7.64543 18.75 8.75 18.75 9.85457 18.75 10.75 17.8546 10.75 16.75V7.25C10.75 6.14543 9.85457 5.25 8.75 5.25zM8.25 7.25C8.25 6.97386 8.47386 6.75 8.75 6.75 9.02614 6.75 9.25 6.97386 9.25 7.25V16.75C9.25 17.0261 9.02614 17.25 8.75 17.25 8.47386 17.25 8.25 17.0261 8.25 16.75V7.25zM15.25 5.25C14.1454 5.25 13.25 6.14543 13.25 7.25V16.75C13.25 17.8546 14.1454 18.75 15.25 18.75 16.3546 18.75 17.25 17.8546 17.25 16.75V7.25C17.25 6.14543 16.3546 5.25 15.25 5.25zM14.75 7.25C14.75 6.97386 14.9739 6.75 15.25 6.75 15.5261 6.75 15.75 6.97386 15.75 7.25V16.75C15.75 17.0261 15.5261 17.25 15.25 17.25 14.9739 17.25 14.75 17.0261 14.75 16.75V7.25z"
          fill={color}
        />
        <g opacity=".5" fill={color}>
          <Path d="M8.75 6.75C8.47386 6.75 8.25 6.97386 8.25 7.25V16.75C8.25 17.0261 8.47386 17.25 8.75 17.25 9.02614 17.25 9.25 17.0261 9.25 16.75V7.25C9.25 6.97386 9.02614 6.75 8.75 6.75zM15.25 6.75C14.9739 6.75 14.75 6.97386 14.75 7.25V16.75C14.75 17.0261 14.9739 17.25 15.25 17.25 15.5261 17.25 15.75 17.0261 15.75 16.75V7.25C15.75 6.97386 15.5261 6.75 15.25 6.75z" />
        </g>
      </Svg>
    );
  }
);

export default PauseIcon;
