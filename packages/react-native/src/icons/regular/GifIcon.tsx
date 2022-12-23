import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const GifIcon = (
  ({ color = 'currentColor', ...props }) => {
    return (
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <Path
          opacity=".5"
          d="M2.43251 6.88624C2.52307 6.8401 2.66035 6.79822 2.94748 6.77476C3.24336 6.75058 3.62757 6.75 4.2 6.75H19.8C20.3724 6.75 20.7566 6.75058 21.0525 6.77476C21.3396 6.79822 21.4769 6.8401 21.5675 6.88624C21.8027 7.00608 21.9939 7.19731 22.1138 7.43251C22.1599 7.52307 22.2018 7.66035 22.2252 7.94748C22.2494 8.24336 22.25 8.62757 22.25 9.2V14.8C22.25 15.3724 22.2494 15.7566 22.2252 16.0525C22.2018 16.3396 22.1599 16.4769 22.1138 16.5675C21.9939 16.8027 21.8027 16.9939 21.5675 17.1138C21.4769 17.1599 21.3396 17.2018 21.0525 17.2252C20.7566 17.2494 20.3724 17.25 19.8 17.25H4.2C3.62757 17.25 3.24336 17.2494 2.94748 17.2252C2.66035 17.2018 2.52307 17.1599 2.43251 17.1138C2.19731 16.9939 2.00608 16.8027 1.88624 16.5675C1.8401 16.4769 1.79822 16.3396 1.77476 16.0525C1.75058 15.7566 1.75 15.3724 1.75 14.8V9.2C1.75 8.62757 1.75058 8.24336 1.77476 7.94748C1.79822 7.66035 1.8401 7.52307 1.88624 7.43251C2.00608 7.19731 2.19731 7.00608 2.43251 6.88624ZM13.2247 8.75003H14.7202V15.0189H13.2247V8.75003ZM9.33604 8.75003C7.38375 8.75003 6.00013 10.0978 6.00013 12.0009C6.00013 13.9576 7.45539 15.2472 9.32261 15.2472C10.9346 15.2472 12.3675 14.0696 12.3675 12.0636C12.3675 11.9113 12.3585 11.7591 12.3361 11.5934H9.32708V12.7486H10.854C10.6794 13.4875 10.1599 13.8815 9.26887 13.8815C8.3375 13.8815 7.54047 13.2054 7.54047 12.0009C7.54047 10.9083 8.26138 10.156 9.2644 10.156C9.8465 10.156 10.2898 10.371 10.6032 10.7068L11.6689 9.65901C11.1227 9.09034 10.3301 8.75003 9.33604 8.75003ZM4.46271 13.3352C3.94777 13.3352 3.5 13.774 3.5 14.2845C3.5 14.8039 3.94777 15.2517 4.46271 15.2517C4.97317 15.2517 5.41647 14.8039 5.41647 14.2845C5.41647 13.774 4.97317 13.3352 4.46271 13.3352ZM20 11.271H17.2581V10.0978H20.5V8.75003H15.7626V15.0189H17.2581V12.6233H20V11.271Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <Path
          d="M4.16957 5.25H19.8304C20.3646 5.24999 20.8104 5.24998 21.1747 5.27974C21.5546 5.31078 21.9112 5.37789 22.2485 5.54973C22.7659 5.81338 23.1866 6.23408 23.4503 6.75153C23.6221 7.08879 23.6892 7.44545 23.7203 7.82533C23.75 8.18956 23.75 8.6354 23.75 9.16955V14.8305C23.75 15.3646 23.75 15.8104 23.7203 16.1747C23.6892 16.5546 23.6221 16.9112 23.4503 17.2485C23.1866 17.7659 22.7659 18.1866 22.2485 18.4503C21.9112 18.6221 21.5546 18.6892 21.1747 18.7203C20.8104 18.75 20.3646 18.75 19.8305 18.75H4.16955C3.6354 18.75 3.18956 18.75 2.82533 18.7203C2.44545 18.6892 2.08879 18.6221 1.75153 18.4503C1.23408 18.1866 0.813385 17.7659 0.549733 17.2485C0.377889 16.9112 0.310778 16.5546 0.27974 16.1747C0.249981 15.8104 0.24999 15.3646 0.25 14.8304V9.16957C0.24999 8.63541 0.249981 8.18956 0.27974 7.82533C0.310778 7.44545 0.377889 7.08879 0.549733 6.75153C0.813385 6.23408 1.23408 5.81338 1.75153 5.54973C2.08879 5.37789 2.44545 5.31078 2.82533 5.27974C3.18956 5.24998 3.63541 5.24999 4.16957 5.25ZM2.94748 6.77476C2.66036 6.79822 2.52307 6.8401 2.43251 6.88624C2.19731 7.00608 2.00608 7.19731 1.88624 7.43251C1.8401 7.52307 1.79822 7.66036 1.77476 7.94748C1.75058 8.24336 1.75 8.62757 1.75 9.2V14.8C1.75 15.3724 1.75058 15.7566 1.77476 16.0525C1.79822 16.3396 1.8401 16.4769 1.88624 16.5675C2.00608 16.8027 2.19731 16.9939 2.43251 17.1138C2.52307 17.1599 2.66036 17.2018 2.94748 17.2252C3.24336 17.2494 3.62757 17.25 4.2 17.25H19.8C20.3724 17.25 20.7566 17.2494 21.0525 17.2252C21.3396 17.2018 21.4769 17.1599 21.5675 17.1138C21.8027 16.9939 21.9939 16.8027 22.1138 16.5675C22.1599 16.4769 22.2018 16.3396 22.2252 16.0525C22.2494 15.7566 22.25 15.3724 22.25 14.8V9.2C22.25 8.62757 22.2494 8.24336 22.2252 7.94748C22.2018 7.66036 22.1599 7.52307 22.1138 7.43251C21.9939 7.19731 21.8027 7.00608 21.5675 6.88624C21.4769 6.8401 21.3396 6.79822 21.0525 6.77476C20.7566 6.75058 20.3724 6.75 19.8 6.75H4.2C3.62757 6.75 3.24336 6.75058 2.94748 6.77476Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>
    );
  }
);

export default GifIcon;
