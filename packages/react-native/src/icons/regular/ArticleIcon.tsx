import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArticleIcon = (
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
          d="M9.5 6.5C9.5 6.08579 9.83579 5.75 10.25 5.75H16.75C17.1642 5.75 17.5 6.08579 17.5 6.5 17.5 6.91421 17.1642 7.25 16.75 7.25H10.25C9.83579 7.25 9.5 6.91421 9.5 6.5zM14.1384 8.75H16.3616C16.4211 8.74998 16.4923 8.74995 16.5549 8.75507 16.6275 8.761 16.7315 8.77623 16.8405 8.83175 16.9816 8.90366 17.0963 9.01839 17.1683 9.15951 17.2238 9.26849 17.239 9.37248 17.2449 9.44509 17.2501 9.50773 17.25 9.57884 17.25 9.63838V11.3616C17.25 11.4211 17.2501 11.4923 17.2449 11.5549 17.239 11.6275 17.2238 11.7315 17.1683 11.8405 17.0963 11.9816 16.9816 12.0964 16.8405 12.1683 16.7315 12.2238 16.6275 12.239 16.5549 12.2449 16.4923 12.2501 16.4212 12.25 16.3616 12.25H14.1384C14.0789 12.25 14.0077 12.2501 13.9451 12.2449 13.8725 12.239 13.7685 12.2238 13.6595 12.1683 13.5184 12.0964 13.4037 11.9816 13.3317 11.8405 13.2762 11.7315 13.261 11.6275 13.2551 11.5549 13.2499 11.4923 13.25 11.4212 13.25 11.3616V9.63844C13.25 9.57889 13.2499 9.50773 13.2551 9.44509 13.261 9.37248 13.2762 9.26849 13.3317 9.15951 13.4037 9.01839 13.5184 8.90366 13.6595 8.83175 13.7685 8.77623 13.8725 8.761 13.9451 8.75507 14.0077 8.74995 14.0789 8.74998 14.1384 8.75zM14.25 9.75001V11.25H16.25V9.75001H14.25zM9.75 9.50001C9.75 9.22386 9.97386 9.00001 10.25 9.00001H11.5C11.7761 9.00001 12 9.22386 12 9.50001 12 9.77615 11.7761 10 11.5 10H10.25C9.97386 10 9.75 9.77615 9.75 9.50001zM10.25 11.25C9.97386 11.25 9.75 11.4739 9.75 11.75 9.75 12.0261 9.97386 12.25 10.25 12.25H11.5C11.7761 12.25 12 12.0261 12 11.75 12 11.4739 11.7761 11.25 11.5 11.25H10.25zM9.75 14.5C9.75 14.2239 9.97386 14 10.25 14H16.75C17.0261 14 17.25 14.2239 17.25 14.5 17.25 14.7761 17.0261 15 16.75 15H10.25C9.97386 15 9.75 14.7761 9.75 14.5z"
          fill={color}
        />
        <Path
          d="M16.3214 3H10.6786C10.1367 3 9.69963 2.99999 9.34569 3.02891C8.98126 3.05868 8.66117 3.12159 8.36502 3.27248C7.89462 3.51217 7.51217 3.89462 7.27248 4.36502C7.12159 4.66117 7.05868 4.98126 7.02891 5.34569C6.99999 5.69963 7 6.1367 7 6.6786V17H4.5C4.36739 17 4.24021 17.0527 4.14645 17.1464C4.05268 17.2402 4 17.3674 4 17.5C4 19.122 4.54825 20.0362 5.2 20.525C5.51433 20.7607 5.82894 20.8789 6.06623 20.9382C6.20526 20.973 6.34898 20.9973 6.4926 21C8.14982 21.0124 13.6802 21 16.6161 21C17.3045 21.0004 18.0011 21.0505 18.635 20.7275C19.4479 20.3133 19.8986 19.542 19.9711 18.6543C20 18.3004 20 17.8634 20 17.3216V6.67858C20 6.1368 20 5.69957 19.9711 5.34569C19.9413 4.98126 19.8784 4.66117 19.7275 4.36502C19.4878 3.89462 19.1054 3.51217 18.635 3.27248C18.3388 3.12159 18.0187 3.05868 17.6543 3.02891C17.3004 2.99999 16.8633 3 16.3214 3ZM16.8 19.725C16.4517 19.4638 16 18.878 16 17.5C16 17.2239 15.7761 17 15.5 17H8V6.7C8 6.1317 8.00039 5.73554 8.02559 5.42712C8.05031 5.12454 8.0964 4.95069 8.16349 4.81901C8.3073 4.53677 8.53677 4.3073 8.81901 4.16349C8.95069 4.0964 9.12454 4.05031 9.42712 4.02559C9.73554 4.00039 10.1317 4 10.7 4H16.3C16.8683 4 17.2645 4.00039 17.5729 4.02559C17.8755 4.05031 18.0493 4.0964 18.181 4.16349C18.4632 4.3073 18.6927 4.53677 18.8365 4.81901C18.9036 4.95069 18.9497 5.12454 18.9744 5.42712C18.9996 5.73554 19 6.1317 19 6.7V17.3C19 17.8683 18.9996 18.2645 18.9744 18.5729C18.9298 19.1186 18.6882 19.5781 18.181 19.8365C17.7311 20.0657 17.2013 20.026 16.8 19.725ZM15.6806 20H6.50487C6.25301 19.9884 5.99837 19.8738 5.8 19.725C5.49719 19.4979 5.11613 19.0254 5.02184 18H15.0185C15.0873 18.8964 15.3414 19.5418 15.6806 20Z"
          fill={color}
        />
      </Svg>
    );
  }
);

export default ArticleIcon;
