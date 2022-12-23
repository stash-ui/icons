import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SignoutAltIcon = (
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
          opacity=".5"
          d="M12.5303 8.46967C12.8232 8.76256 12.8232 9.23744 12.5303 9.53033L10.8107 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H10.8107L12.5303 14.4697C12.8232 14.7626 12.8232 15.2374 12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967Z"
          fill={color}
        />
        <Path
          d="M3.25 12C3.25 7.71979 6.71979 4.25 11 4.25C13.1114 4.25 15.0269 5.09533 16.4239 6.46432C16.7198 6.75423 16.7246 7.22908 16.4347 7.52492C16.1448 7.82077 15.6699 7.82559 15.3741 7.53568C14.246 6.4303 12.7032 5.75 11 5.75C7.54822 5.75 4.75 8.54822 4.75 12C4.75 15.4518 7.54822 18.25 11 18.25C12.7032 18.25 14.246 17.5697 15.3741 16.4643C15.6699 16.1744 16.1448 16.1792 16.4347 16.4751C16.7246 16.7709 16.7198 17.2458 16.4239 17.5357C15.0269 18.9047 13.1114 19.75 11 19.75C6.71979 19.75 3.25 16.2802 3.25 12Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default SignoutAltIcon;