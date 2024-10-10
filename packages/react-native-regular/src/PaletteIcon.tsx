import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const PaletteIcon = ({ color = 'currentColor', ...props }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.07799 12.9963C8.12508 13.5466 7.71718 14.0309 7.1669 14.078C6.61663 14.1251 6.13237 13.7172 6.08527 13.1669C6.03818 12.6166 6.44608 12.1324 6.99636 12.0853C7.54663 12.0382 8.03089 12.4461 8.07799 12.9963Z"
      fill={color}
    />
    <Path
      d="M8.1669 10.078C8.71718 10.0309 9.12508 9.54662 9.07799 8.99635C9.03089 8.44607 8.54663 8.03817 7.99636 8.08526C7.44608 8.13235 7.03818 8.61662 7.08527 9.16689C7.13237 9.71716 7.61663 10.1251 8.1669 10.078Z"
      fill={color}
    />
    <Path
      d="M13.078 6.99635C13.1251 7.54662 12.7172 8.03088 12.1669 8.07798C11.6166 8.12507 11.1324 7.71716 11.0853 7.16689C11.0382 6.61662 11.4461 6.13235 11.9964 6.08526C12.5466 6.03817 13.0309 6.44607 13.078 6.99635Z"
      fill={color}
    />
    <Path
      d="M16.0262 9.61447C16.5765 9.56738 16.9844 9.08312 16.9373 8.53284C16.8902 7.98257 16.406 7.57466 15.8557 7.62176C15.3054 7.66885 14.8975 8.15312 14.9446 8.70339C14.9917 9.25366 15.476 9.66157 16.0262 9.61447Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 13.1636 20.3665 14.0224 19.5358 14.4602C18.8119 14.8417 17.9192 14.7925 17.1951 14.702C16.8709 14.6614 16.5377 14.6056 16.2253 14.5532L16.0643 14.5263C15.6971 14.4652 15.3629 14.4131 15.0579 14.3873C14.388 14.3307 14.1291 14.4308 14.0323 14.5283C13.9689 14.5922 13.8818 14.7515 14.016 15.3071C14.0777 15.5626 14.1718 15.843 14.2829 16.1606L14.33 16.2947C14.4251 16.5653 14.5288 16.86 14.6136 17.1487C14.7998 17.7826 14.9799 18.6398 14.5984 19.3951C14.1875 20.2087 13.2957 20.6107 12.0828 20.7454L12.0415 20.75H12C7.16751 20.75 3.25 16.8325 3.25 12ZM12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 15.9901 7.9734 19.2274 11.9583 19.2499C12.9607 19.1316 13.1947 18.8471 13.2595 18.7188C13.3547 18.5303 13.3568 18.1925 13.1744 17.5715C13.1016 17.3237 13.0128 17.0711 12.917 16.7985L12.8671 16.656C12.7565 16.34 12.6392 15.9957 12.558 15.6594C12.4062 15.0313 12.3064 14.1379 12.9677 13.4717C13.5885 12.8462 14.5008 12.8348 15.1843 12.8926C15.556 12.9241 15.9439 12.9857 16.3104 13.0466L16.4792 13.0748C16.7929 13.1273 17.0908 13.1772 17.3812 13.2135C18.1028 13.3038 18.566 13.2757 18.8366 13.1331C19.0004 13.0468 19.25 12.8364 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z"
      fill={color}
    />
  </Svg>
);

export default PaletteIcon;