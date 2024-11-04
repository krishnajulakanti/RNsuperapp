/**
 * @file As per the react-native-elements documentation for extending the typescript definitions
 * for the theme we have to declare a file like this.
 * More information can be found in the below reference
https://reactnativeelements.com/docs/customization/typescript#adding-custom-colors
 */

import '@rneui/themed';
import {ButtonStyle} from '../types/button';
import {IconStyle} from '../types/Icon';
import {Typography} from '../types/text';

// declare module '@rneui/themed' {
//   export interface Colors {
//     C1: string;
//     C2: string;
//     C3: string;
//     C4: string;
//     C5: string;
//     C6: string;
//     C7: string;
//     C8: string;
//     C9: string;
//     C10: string;
//     C11: string;
//     C12: string;
//     C13: string;
//     C14: string;
//     C15: string;
//     C16: string;
//     C17: string;
//     C18: string;
//     C19: string;
//     C20: string;
//     C21: string;
//     BG1: string;
//     BG2: string;
//   }
//   export interface Theme {
//     smallButton: ButtonStyle;
//     defaultButton: ButtonStyle;
//     roundedButton: ButtonStyle;
//     secondaryButton: ButtonStyle;
//     extraLargeIcon: IconStyle;
//     largeIcon: IconStyle;
//     mediumIcon: IconStyle;
//     smallIcon: IconStyle;
//     extraSmallIcon: IconStyle;
//     typography: Typography;
//   }
// }
