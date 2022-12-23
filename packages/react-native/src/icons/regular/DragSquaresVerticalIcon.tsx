import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const DragSquaresVerticalIcon = (
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
          d="M6.75 18.7202C6.74997 18.8424 6.74994 18.9748 6.75931 19.0895 6.76991 19.2192 6.79615 19.3907 6.88625 19.5675 7.00609 19.8027 7.19732 19.9939 7.43252 20.1138 7.60935 20.2039 7.78078 20.2301 7.91053 20.2407 8.02518 20.2501 8.15763 20.25 8.27979 20.25H9.72022C9.84238 20.25 9.97483 20.2501 10.0895 20.2407 10.2192 20.2301 10.3907 20.2039 10.5675 20.1138 10.8027 19.9939 10.9939 19.8027 11.1138 19.5675 11.2039 19.3907 11.2301 19.2192 11.2407 19.0895 11.2501 18.9748 11.25 18.8424 11.25 18.7202V17.2798C11.25 17.1576 11.2501 17.0252 11.2407 16.9105 11.2301 16.7808 11.2039 16.6093 11.1138 16.4325 10.9939 16.1973 10.8027 16.0061 10.5675 15.8862 10.3907 15.7961 10.2192 15.7699 10.0895 15.7593 9.97484 15.7499 9.84239 15.75 9.72024 15.75H8.27979C8.15764 15.75 8.02517 15.7499 7.91053 15.7593 7.78078 15.7699 7.60935 15.7961 7.43252 15.8862 7.19732 16.0061 7.00609 16.1973 6.88625 16.4325 6.79615 16.6093 6.76991 16.7808 6.75931 16.9105 6.74994 17.0252 6.74997 17.1576 6.75 17.2798L6.75 18.7202zM6.75 12.7202C6.74997 12.8424 6.74994 12.9748 6.75931 13.0895 6.76991 13.2192 6.79615 13.3907 6.88625 13.5675 7.00609 13.8027 7.19732 13.9939 7.43252 14.1138 7.60935 14.2039 7.78078 14.2301 7.91053 14.2407 8.02518 14.2501 8.15763 14.25 8.27979 14.25H9.72022C9.84238 14.25 9.97483 14.2501 10.0895 14.2407 10.2192 14.2301 10.3907 14.2039 10.5675 14.1138 10.8027 13.9939 10.9939 13.8027 11.1138 13.5675 11.2039 13.3907 11.2301 13.2192 11.2407 13.0895 11.2501 12.9748 11.25 12.8424 11.25 12.7202V11.2798C11.25 11.1576 11.2501 11.0252 11.2407 10.9105 11.2301 10.7808 11.2039 10.6093 11.1138 10.4325 10.9939 10.1973 10.8027 10.0061 10.5675 9.88625 10.3907 9.79615 10.2192 9.76991 10.0895 9.75931 9.97484 9.74994 9.8424 9.74997 9.72025 9.75H8.27978C8.15763 9.74997 8.02517 9.74994 7.91053 9.75931 7.78078 9.76991 7.60935 9.79615 7.43252 9.88625 7.19732 10.0061 7.00609 10.1973 6.88625 10.4325 6.79615 10.6093 6.76991 10.7808 6.75931 10.9105 6.74994 11.0252 6.74997 11.1576 6.75 11.2798V12.7202zM6.75 5.27979V6.72022C6.74997 6.84238 6.74994 6.97483 6.75931 7.08948 6.76991 7.21924 6.79615 7.39067 6.88625 7.56749 7.00609 7.8027 7.19732 7.99392 7.43252 8.11376 7.60935 8.20386 7.78078 8.2301 7.91053 8.2407 8.02517 8.25007 8.15761 8.25004 8.27976 8.25001H9.72023C9.84239 8.25004 9.97484 8.25007 10.0895 8.2407 10.2192 8.2301 10.3907 8.20386 10.5675 8.11376 10.8027 7.99392 10.9939 7.8027 11.1138 7.56749 11.2039 7.39067 11.2301 7.21924 11.2407 7.08948 11.2501 6.97484 11.25 6.84239 11.25 6.72024V5.27979C11.25 5.15764 11.2501 5.02517 11.2407 4.91053 11.2301 4.78078 11.2039 4.60935 11.1138 4.43252 10.9939 4.19731 10.8027 4.00609 10.5675 3.88625 10.3907 3.79615 10.2192 3.76991 10.0895 3.75931 9.97485 3.74994 9.84243 3.74997 9.72029 3.75H8.27978C8.15764 3.74997 8.02516 3.74994 7.91053 3.75931 7.78078 3.76991 7.60935 3.79615 7.43252 3.88625 7.19732 4.00609 7.00609 4.19731 6.88625 4.43252 6.79615 4.60935 6.76991 4.78078 6.75931 4.91053 6.74994 5.02518 6.74997 5.15763 6.75 5.27979zM12.75 18.7202C12.75 18.8424 12.7499 18.9748 12.7593 19.0895 12.7699 19.2192 12.7961 19.3907 12.8862 19.5675 13.0061 19.8027 13.1973 19.9939 13.4325 20.1138 13.6093 20.2039 13.7808 20.2301 13.9105 20.2407 14.0252 20.2501 14.1576 20.25 14.2798 20.25H15.7202C15.8424 20.25 15.9748 20.2501 16.0895 20.2407 16.2192 20.2301 16.3907 20.2039 16.5675 20.1138 16.8027 19.9939 16.9939 19.8027 17.1138 19.5675 17.2039 19.3907 17.2301 19.2192 17.2407 19.0895 17.2501 18.9748 17.25 18.8424 17.25 18.7203V17.2798C17.25 17.1576 17.2501 17.0252 17.2407 16.9105 17.2301 16.7808 17.2039 16.6093 17.1138 16.4325 16.9939 16.1973 16.8027 16.0061 16.5675 15.8862 16.3907 15.7961 16.2192 15.7699 16.0895 15.7593 15.9748 15.7499 15.8424 15.75 15.7202 15.75H14.2798C14.1576 15.75 14.0252 15.7499 13.9105 15.7593 13.7808 15.7699 13.6093 15.7961 13.4325 15.8862 13.1973 16.0061 13.0061 16.1973 12.8862 16.4325 12.7961 16.6093 12.7699 16.7808 12.7593 16.9105 12.7499 17.0252 12.75 17.1576 12.75 17.2798V18.7202zM12.75 12.7202C12.75 12.8424 12.7499 12.9748 12.7593 13.0895 12.7699 13.2192 12.7961 13.3907 12.8862 13.5675 13.0061 13.8027 13.1973 13.9939 13.4325 14.1138 13.6093 14.2039 13.7808 14.2301 13.9105 14.2407 14.0252 14.2501 14.1576 14.25 14.2798 14.25H15.7202C15.8424 14.25 15.9748 14.2501 16.0895 14.2407 16.2192 14.2301 16.3907 14.2039 16.5675 14.1138 16.8027 13.9939 16.9939 13.8027 17.1138 13.5675 17.2039 13.3907 17.2301 13.2192 17.2407 13.0895 17.2501 12.9748 17.25 12.8424 17.25 12.7203V11.2798C17.25 11.1576 17.2501 11.0252 17.2407 10.9105 17.2301 10.7808 17.2039 10.6093 17.1138 10.4325 16.9939 10.1973 16.8027 10.0061 16.5675 9.88625 16.3907 9.79615 16.2192 9.76991 16.0895 9.75931 15.9748 9.74994 15.8424 9.74997 15.7203 9.75H14.2798C14.1576 9.74997 14.0252 9.74994 13.9105 9.75931 13.7808 9.76991 13.6093 9.79615 13.4325 9.88625 13.1973 10.0061 13.0061 10.1973 12.8862 10.4325 12.7961 10.6093 12.7699 10.7808 12.7593 10.9105 12.7499 11.0252 12.75 11.1576 12.75 11.2798V12.7202zM12.75 5.27979V6.72022C12.75 6.84238 12.7499 6.97483 12.7593 7.08948 12.7699 7.21924 12.7961 7.39067 12.8862 7.56749 13.0061 7.8027 13.1973 7.99392 13.4325 8.11376 13.6093 8.20386 13.7808 8.2301 13.9105 8.2407 14.0252 8.25007 14.1576 8.25004 14.2798 8.25001H15.7202C15.8424 8.25004 15.9748 8.25007 16.0895 8.2407 16.2192 8.2301 16.3907 8.20386 16.5675 8.11376 16.8027 7.99392 16.9939 7.8027 17.1138 7.56749 17.2039 7.39067 17.2301 7.21924 17.2407 7.08948 17.2501 6.97484 17.25 6.8424 17.25 6.72025V5.27978C17.25 5.15762 17.2501 5.02517 17.2407 4.91053 17.2301 4.78078 17.2039 4.60935 17.1138 4.43252 16.9939 4.19732 16.8027 4.00609 16.5675 3.88625 16.3907 3.79615 16.2192 3.76991 16.0895 3.75931 15.9749 3.74994 15.8424 3.74997 15.7203 3.75H14.2798C14.1576 3.74997 14.0252 3.74994 13.9105 3.75931 13.7808 3.76991 13.6093 3.79615 13.4325 3.88625 13.1973 4.00609 13.0061 4.19732 12.8862 4.43252 12.7961 4.60935 12.7699 4.78078 12.7593 4.91053 12.7499 5.02518 12.75 5.15763 12.75 5.27979z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default DragSquaresVerticalIcon;