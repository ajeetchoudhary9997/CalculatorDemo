import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    SCREEN_WIDTH:width,
    SCREEN_HEIGHT:height,
    MIN_DIMENSIONS:width<height?width:height,
}