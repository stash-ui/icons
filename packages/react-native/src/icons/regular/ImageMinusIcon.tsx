import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const ImageMinusIcon = (
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
          d="M12.633 3.25H9.367C8.27486 3.24999 7.40935 3.24999 6.71173 3.30699C5.99834 3.36527 5.39472 3.48688 4.84355 3.76772C3.94978 4.22312 3.22312 4.94978 2.76772 5.84355C2.48688 6.39472 2.36527 6.99834 2.30699 7.71173C2.24999 8.40935 2.24999 9.27485 2.25 10.367V13.633C2.25 14.5703 2.24999 15.3407 2.28602 15.9813C2.28867 16.0504 2.29378 16.1169 2.29871 16.1812L2.3 16.1981C2.30223 16.2285 2.30456 16.2585 2.30699 16.2883C2.36527 17.0017 2.48688 17.6053 2.76772 18.1565C2.99542 18.6033 3.29093 19.0084 3.64124 19.3588C3.99155 19.7091 4.39666 20.0046 4.84355 20.2323C4.91243 20.2674 4.98218 20.3 5.05281 20.3303C5.1582 20.3755 5.26567 20.4156 5.37558 20.4513C5.78141 20.5827 6.22057 20.6529 6.71178 20.693C7.40936 20.75 8.27481 20.75 9.36687 20.75H13.2499C13.6642 20.75 14 20.4142 14 20C14 19.5858 13.6642 19.25 13.2499 19.25H9.4C8.26752 19.25 7.46327 19.2494 6.83388 19.198C6.21325 19.1473 5.829 19.0509 5.52453 18.8958C5.28556 18.774 5.06405 18.6239 4.86425 18.4497C4.55279 18.1782 4.29409 17.848 4.10427 17.4755C3.944 17.1609 3.84666 16.7618 3.7973 16.1055C3.79639 16.0935 3.79554 16.0821 3.79474 16.0714C3.79115 16.0215 3.78785 15.9705 3.78481 15.9183C3.78458 15.9122 3.78439 15.9065 3.78426 15.9009C3.78353 15.8705 3.78495 15.8618 3.78541 15.859C3.78853 15.8392 3.79982 15.8039 3.8088 15.786C3.8088 15.786 3.80971 15.7841 3.81258 15.7796C3.81602 15.7743 3.82281 15.7643 3.83594 15.7469C3.86578 15.7075 3.90728 15.6574 3.98418 15.5651L4.04645 15.4904C4.47716 14.9736 4.76971 14.6236 5.01558 14.3758C5.25669 14.1328 5.39653 14.048 5.49947 14.0104C5.77659 13.9091 6.0806 13.9091 6.35771 14.0104C6.46065 14.048 6.60049 14.1328 6.8416 14.3758C7.08747 14.6236 7.38002 14.9736 7.81073 15.4904C8.41293 16.2131 9.50908 16.2532 10.1625 15.5764L13.1661 12.4656C13.5763 12.0407 13.8526 11.7553 14.0829 11.5533C14.3067 11.3568 14.436 11.2862 14.534 11.2536C14.7902 11.1684 15.067 11.1684 15.3232 11.2536C15.4537 11.2971 15.6248 11.4016 15.98 11.7434C16.2784 12.0307 16.7532 12.0215 17.0404 11.7231C17.3277 11.4246 17.3186 10.9499 17.0201 10.6626C16.6379 10.2947 16.2641 9.98582 15.7967 9.83032C15.2332 9.64282 14.624 9.64282 14.0605 9.83032C13.6923 9.9528 13.3877 10.1677 13.0935 10.4258C12.811 10.6738 12.4917 11.0045 12.1086 11.4013L9.08335 14.5345C9.04993 14.5692 8.99386 14.5671 8.96306 14.5301L8.94162 14.5044C8.53776 14.0198 8.20369 13.6189 7.90635 13.3192C7.599 13.0095 7.27509 12.7486 6.87265 12.6015C6.263 12.3787 5.59418 12.3787 4.98453 12.6015C4.58209 12.7486 4.25818 13.0095 3.95083 13.3192C3.88576 13.3848 3.81893 13.4552 3.75 13.5303V10.4C3.75 9.26752 3.75058 8.46327 3.80201 7.83388C3.85271 7.21325 3.94909 6.829 4.10423 6.52453C4.41582 5.913 4.913 5.41582 5.52453 5.10423C5.829 4.94909 6.21325 4.85271 6.83388 4.80201C7.46326 4.75058 8.26752 4.75 9.4 4.75H12.6C13.7325 4.75 14.5367 4.75058 15.1661 4.80201C15.7867 4.85271 16.171 4.94909 16.4755 5.10423C17.087 5.41582 17.5842 5.913 17.8958 6.52453C18.0509 6.829 18.1473 7.21325 18.198 7.83388C18.2494 8.46326 18.25 9.26752 18.25 10.4C18.25 10.8142 18.5858 11.15 19 11.15C19.4142 11.15 19.75 10.8142 19.75 10.4V10.367C19.75 9.27484 19.75 8.40935 19.693 7.71173C19.6347 6.99834 19.5131 6.39472 19.2323 5.84355C18.7769 4.94978 18.0502 4.22312 17.1565 3.76772C16.6053 3.48688 16.0017 3.36527 15.2883 3.30699C14.5906 3.24999 13.7251 3.24999 12.633 3.25Z"
          fill={color}
        />
        <G opacity=".5" fill={color}>
          <Path d="M9 6.25C7.48122 6.25 6.25 7.48122 6.25 9 6.25 10.5188 7.48122 11.75 9 11.75 10.5188 11.75 11.75 10.5188 11.75 9 11.75 7.48122 10.5188 6.25 9 6.25zM7.75 9C7.75 8.30964 8.30964 7.75 9 7.75 9.69036 7.75 10.25 8.30964 10.25 9 10.25 9.69036 9.69036 10.25 9 10.25 8.30964 10.25 7.75 9.69036 7.75 9zM16 16.25C15.5858 16.25 15.25 16.5858 15.25 17 15.25 17.4142 15.5858 17.75 16 17.75H21C21.4142 17.75 21.75 17.4142 21.75 17 21.75 16.5858 21.4142 16.25 21 16.25H16z" />
        </G>
      </Svg>
    );
  }
);

export default ImageMinusIcon;
