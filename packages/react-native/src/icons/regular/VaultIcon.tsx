import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const VaultIcon = (
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
          d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9V9.35352C11.0368 9.4138 10.8342 9.49915 10.6455 9.60617C10.3543 9.41354 9.95835 9.44545 9.7019 9.7019C9.44545 9.95835 9.41354 10.3543 9.60617 10.6455C9.49915 10.8342 9.4138 11.0368 9.35352 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H9.35352C9.41381 12.9632 9.49915 13.1658 9.60617 13.3545C9.41355 13.6457 9.44545 14.0416 9.7019 14.2981C9.95835 14.5545 10.3543 14.5865 10.6455 14.3938C10.8342 14.5008 11.0368 14.5862 11.25 14.6465V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V14.6465C12.9632 14.5862 13.1658 14.5008 13.3545 14.3938C13.6457 14.5865 14.0416 14.5545 14.2981 14.2981C14.5545 14.0416 14.5865 13.6457 14.3938 13.3545C14.5008 13.1658 14.5862 12.9632 14.6465 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H14.6465C14.5862 11.0368 14.5008 10.8342 14.3938 10.6455C14.5865 10.3543 14.5545 9.95835 14.2981 9.7019C14.0416 9.44545 13.6457 9.41355 13.3545 9.60617C13.1658 9.49915 12.9632 9.41381 12.75 9.35352V9ZM12 13.25C11.6548 13.25 11.3423 13.1101 11.1161 12.8839C10.8899 12.6577 10.75 12.3452 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12C13.25 12.3452 13.1101 12.6577 12.8839 12.8839C12.6577 13.1101 12.3452 13.25 12 13.25Z"
          fill={color}
        />
        <Path
          d="M14.633 2.25H9.367C8.27486 2.24999 7.40935 2.24999 6.71173 2.30699C5.99835 2.36527 5.39472 2.48688 4.84355 2.76772C3.94978 3.22312 3.22312 3.94978 2.76772 4.84355C2.48688 5.39472 2.36527 5.99834 2.30699 6.71173C2.24999 7.40935 2.24999 8.27485 2.25 9.36699V14.633C2.24999 15.7251 2.24999 16.5906 2.30699 17.2883C2.36527 18.0017 2.48688 18.6053 2.76772 19.1565C3.22312 20.0502 3.94978 20.7769 4.84355 21.2323C5.39472 21.5131 5.99834 21.6347 6.71173 21.693C7.40935 21.75 8.27484 21.75 9.36698 21.75H14.633C15.7252 21.75 16.5906 21.75 17.2883 21.693C18.0017 21.6347 18.6053 21.5131 19.1565 21.2323C20.0502 20.7769 20.7769 20.0502 21.2323 19.1565C21.5131 18.6053 21.6347 18.0017 21.693 17.2883C21.75 16.5906 21.75 15.7252 21.75 14.633V9.36698C21.75 8.27484 21.75 7.40935 21.693 6.71173C21.6347 5.99835 21.5131 5.39472 21.2323 4.84355C20.7769 3.94978 20.0502 3.22312 19.1565 2.76772C18.6053 2.48688 18.0017 2.36527 17.2883 2.30699C16.5906 2.24999 15.7251 2.24999 14.633 2.25ZM5.52453 4.10423C5.829 3.94909 6.21325 3.85271 6.83388 3.80201C7.46326 3.75058 8.26752 3.75 9.4 3.75H14.6C15.7325 3.75 16.5367 3.75058 17.1661 3.80201C17.7867 3.85271 18.171 3.94909 18.4755 4.10423C19.087 4.41582 19.5842 4.913 19.8958 5.52453C20.0509 5.829 20.1473 6.21325 20.198 6.83388C20.2494 7.46326 20.25 8.26752 20.25 9.4V14.6C20.25 15.7325 20.2494 16.5367 20.198 17.1661C20.1473 17.7867 20.0509 18.171 19.8958 18.4755C19.5842 19.087 19.087 19.5842 18.4755 19.8958C18.171 20.0509 17.7867 20.1473 17.1661 20.198C16.5367 20.2494 15.7325 20.25 14.6 20.25H9.4C8.26752 20.25 7.46327 20.2494 6.83388 20.198C6.21325 20.1473 5.829 20.0509 5.52453 19.8958C4.913 19.5842 4.41582 19.087 4.10423 18.4755C3.94909 18.171 3.85271 17.7867 3.80201 17.1661C3.75058 16.5367 3.75 15.7325 3.75 14.6V9.4C3.75 8.26752 3.75058 7.46327 3.80201 6.83388C3.85271 6.21325 3.94909 5.829 4.10423 5.52453C4.41582 4.913 4.913 4.41582 5.52453 4.10423Z"
          fill={color}
        />
        <g opacity=".5" fill={color}>
          <Path d="M6.25 12C6.25 8.82436 8.82436 6.25 12 6.25 15.1756 6.25 17.75 8.82436 17.75 12 17.75 15.1756 15.1756 17.75 12 17.75 8.82436 17.75 6.25 15.1756 6.25 12zM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12 7.75 14.3472 9.65279 16.25 12 16.25 14.3472 16.25 16.25 14.3472 16.25 12 16.25 9.65279 14.3472 7.75 12 7.75zM3 6.5C3.82843 6.5 4.5 7.17157 4.5 8L4.5 9.5C4.5 10.3284 3.82843 11 3 11 2.17157 11 1.5 10.3284 1.5 9.5V8C1.5 7.17157 2.17157 6.5 3 6.5zM4.5 14.5C4.5 13.6716 3.82843 13 3 13 2.17157 13 1.5 13.6716 1.5 14.5V16C1.5 16.8284 2.17157 17.5 3 17.5 3.82843 17.5 4.5 16.8284 4.5 16L4.5 14.5z" />
        </g>
      </Svg>
    );
  }
);

export default VaultIcon;