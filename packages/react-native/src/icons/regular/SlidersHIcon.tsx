import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const SlidersHIcon = (
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
          d="M8 4.5C7.17157 4.5 6.5 5.17157 6.5 6 6.5 6.82843 7.17157 7.5 8 7.5 8.82843 7.5 9.5 6.82843 9.5 6 9.5 5.17157 8.82843 4.5 8 4.5zM5.5 6C5.5 4.61929 6.61929 3.5 8 3.5 9.38071 3.5 10.5 4.61929 10.5 6 10.5 7.38071 9.38071 8.5 8 8.5 6.61929 8.5 5.5 7.38071 5.5 6zM8 16.5C7.17157 16.5 6.5 17.1716 6.5 18 6.5 18.8284 7.17157 19.5 8 19.5 8.82843 19.5 9.5 18.8284 9.5 18 9.5 17.1716 8.82843 16.5 8 16.5zM5.5 18C5.5 16.6193 6.61929 15.5 8 15.5 9.38071 15.5 10.5 16.6193 10.5 18 10.5 19.3807 9.38071 20.5 8 20.5 6.61929 20.5 5.5 19.3807 5.5 18z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <G opacity=".5" fill={color}>
          <Path d="M17.8546 12.75C17.9484 12.5184 18 12.2652 18 12 18 11.7348 17.9484 11.4816 17.8546 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12 20.75 12.4142 20.4142 12.75 20 12.75H17.8546zM14.1454 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12 3.25 11.5858 3.58579 11.25 4 11.25H14.1454C14.0516 11.4816 14 11.7348 14 12 14 12.2652 14.0516 12.5184 14.1454 12.75zM9.85462 6.75C9.94837 6.51839 10 6.26523 10 6 10 5.73477 9.94837 5.48161 9.85462 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6 20.75 6.41421 20.4142 6.75 20 6.75H9.85462zM6.14538 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6 3.25 5.58579 3.58579 5.25 4 5.25H6.14538C6.05163 5.48161 6 5.73477 6 6 6 6.26523 6.05163 6.51839 6.14538 6.75zM9.85462 18.75C9.94837 18.5184 10 18.2652 10 18 10 17.7348 9.94837 17.4816 9.85462 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18 20.75 18.4142 20.4142 18.75 20 18.75H9.85462zM6.14538 18.75H4C3.58579 18.75 3.25 18.4142 3.25 18 3.25 17.5858 3.58579 17.25 4 17.25H6.14538C6.05163 17.4816 6 17.7348 6 18 6 18.2652 6.05163 18.5184 6.14538 18.75z" />
        </G>
        <Path
          d="M16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5ZM13.5 12C13.5 10.6193 14.6193 9.5 16 9.5C17.3807 9.5 18.5 10.6193 18.5 12C18.5 13.3807 17.3807 14.5 16 14.5C14.6193 14.5 13.5 13.3807 13.5 12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  }
);

export default SlidersHIcon;
