import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BalanceIcon = (
  ({ color = 'currentColor', size = 24, ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"

        {...props}
        
      >
        <g opacity=".5" fill={color}>
          <Path d="M6 17.5C4.067 17.5 2.5 15.933 2.5 14H9.5C9.5 15.933 7.933 17.5 6 17.5zM18 17.5C16.067 17.5 14.5 15.933 14.5 14H21.5C21.5 15.933 19.933 17.5 18 17.5z" />
        </g>
        <Path
          d="M12 2.25C10.4812 2.25 9.25 3.48122 9.25 5C9.25 5.17424 9.2662 5.3447 9.29719 5.50995C8.71981 5.82544 8.31587 6.19347 8.00768 6.47426C7.91073 6.56259 7.82316 6.64238 7.74274 6.70909C7.53968 6.87753 7.35112 7.00188 7.10883 7.09093C6.86228 7.18155 6.52006 7.25003 6.00017 7.25003C5.58596 7.25003 5.25017 7.58581 5.25017 8.00003C5.25017 8.41424 5.58596 8.75003 6.00017 8.75003C6.65248 8.75003 7.17711 8.66394 7.62629 8.49885C8.07972 8.3322 8.41578 8.0997 8.70042 7.86358C8.85275 7.73722 8.9836 7.61887 9.1071 7.50716C9.37904 7.2612 9.61533 7.04748 9.9667 6.85156C10.3074 7.22546 10.7498 7.50504 11.2502 7.64653V16.5C11.2502 17.6675 11.0139 18.4873 10.6436 18.9964C10.3003 19.4684 9.78797 19.75 9.00017 19.75C8.58596 19.75 8.25017 20.0858 8.25017 20.5C8.25017 20.9142 8.58596 21.25 9.00017 21.25C10.2124 21.25 11.2 20.7816 11.8567 19.8786C11.8994 19.82 11.9403 19.7599 11.9796 19.6985C12.1073 19.8875 12.2502 20.0607 12.4073 20.2178C13.1337 20.9442 14.0866 21.25 15.0002 21.25C15.4144 21.25 15.7502 20.9142 15.7502 20.5C15.7502 20.0858 15.4144 19.75 15.0002 19.75C14.4137 19.75 13.8667 19.5558 13.468 19.1572C13.0751 18.7643 12.7502 18.0961 12.7502 17V7.64644C13.2505 7.5049 13.6928 7.22532 14.0334 6.85144C14.3849 7.0474 14.6212 7.26115 14.8932 7.50716C15.0167 7.61886 15.1476 7.73723 15.2999 7.86358C15.5846 8.0997 15.9206 8.3322 16.3741 8.49885C16.8232 8.66394 17.3479 8.75003 18.0002 8.75003C18.4144 8.75003 18.7502 8.41424 18.7502 8.00003C18.7502 7.58581 18.4144 7.25003 18.0002 7.25003C17.4803 7.25003 17.1381 7.18155 16.8915 7.09093C16.6492 7.00188 16.4607 6.87753 16.2576 6.70909C16.1772 6.64236 16.0896 6.56263 15.9927 6.47427C15.6844 6.19342 15.2804 5.82531 14.7028 5.50978C14.7338 5.34458 14.75 5.17418 14.75 5C14.75 3.48122 13.5188 2.25 12 2.25ZM10.75 5C10.75 4.30964 11.3096 3.75 12 3.75C12.6904 3.75 13.25 4.30964 13.25 5C13.25 5.69036 12.6904 6.25 12 6.25C11.3096 6.25 10.75 5.69036 10.75 5Z"
          fill={color}
        />
        <Path
          d="M8.96802 13.25L7.11084 9.45692C7.10515 9.44529 7.09915 9.43381 7.09287 9.42249 6.61661 8.56523 5.38373 8.56523 4.90747 9.42249 4.90118 9.43381 4.89519 9.44529 4.8895 9.45692L3.03232 13.25H2.5C2.08579 13.25 1.75 13.5858 1.75 14 1.75 16.3472 3.65279 18.25 6 18.25 8.34721 18.25 10.25 16.3472 10.25 14 10.25 13.5858 9.91421 13.25 9.5 13.25H8.96802zM7.29787 13.25H4.70246L6.00017 10.5996 7.29787 13.25zM8.48452 14.75C8.4953 14.7502 8.50611 14.7502 8.51693 14.75H8.64648C8.32002 15.9043 7.25878 16.75 6 16.75 4.74122 16.75 3.67998 15.9043 3.35352 14.75H3.48341C3.49423 14.7502 3.50503 14.7502 3.51582 14.75H8.48452zM20.968 13.25H21.5C21.9142 13.25 22.25 13.5858 22.25 14 22.25 16.3472 20.3472 18.25 18 18.25 15.6528 18.25 13.75 16.3472 13.75 14 13.75 13.5858 14.0858 13.25 14.5 13.25H15.0323L16.8895 9.45692C16.8952 9.44529 16.9012 9.43381 16.9075 9.42249 17.3837 8.56523 18.6166 8.56523 19.0929 9.42249 19.0992 9.43381 19.1051 9.44529 19.1108 9.45692L20.968 13.25zM20.4845 14.75H15.5158C15.505 14.7502 15.4942 14.7502 15.4834 14.75H15.3535C15.68 15.9043 16.7412 16.75 18 16.75 19.2588 16.75 20.32 15.9043 20.6465 14.75H20.5169C20.5061 14.7502 20.4953 14.7502 20.4845 14.75zM19.2979 13.25L18.0002 10.5996 16.7025 13.25H19.2979z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default BalanceIcon;
