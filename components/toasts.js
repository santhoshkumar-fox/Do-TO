import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {COLORS, FONTS, SIZE} from '../constants';
import {Text, View} from 'react-native';
import Animated, {
  FadeInUp,
  FadeOutUp,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
export const TOAST_STATUS = {
  success: 'success',
  error: 'error',
  info: 'info',
};

export function showToast(type, title, des) {
  Toast.show({
    type,
    text1: title,
    text2: des,
  });
}

export const toastConfig = {
  success: ({text1, text2, props}) => {
    return (
      <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={{
          minWidth: 100,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primarColor,
          paddingHorizontal:10,
          borderRadius: 20,
          flexDirection: 'row',
        }}>
        <Animated.View
          entering={ZoomIn.springify()}
          exiting={ZoomOut.springify()}
          style={{
            width: 15,
            height: 15,
            marginRight: 10,
            backgroundColor: 'black',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={'check'} size={10} color={COLORS.primarColor} />
        </Animated.View>
        <View style={{flexDirection:'row'}}>
        <Text style={{...FONTS.lable01}}>{text1}</Text>
        {text2 && <Text style={{...FONTS.lable03}}>{text2}</Text>}

        </View>
      </Animated.View>
    );
  },
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: ({text1, text2, props}) => {
    return (
      <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={{
          minWidth: 100,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.alertRed,
          paddingHorizontal:10,
          borderRadius: 20,
          flexDirection: 'row',
        }}>
        <Animated.View
          entering={ZoomIn.springify()}
          exiting={ZoomOut.springify()}
          style={{
            width: 15,
            height: 15,
            marginRight: 10,
            backgroundColor: 'black',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={'x'} size={10} color={COLORS.alertRed} />
        </Animated.View>
        <View style={{flexDirection:'row'}}>
        <Text style={{...FONTS.lable01}}>{text1}</Text>
        {text2 && <Text style={{...FONTS.lable03}}>{text2}</Text>}

        </View>
      </Animated.View>
    );
  },
  info: ({text1, text2, props}) => {
    return (
      <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={{
          minWidth: 100,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'orange',
          paddingHorizontal:10,
          borderRadius: 20,
          flexDirection: 'row',
        }}>
        <Animated.View
          entering={ZoomIn.springify()}
          exiting={ZoomOut.springify()}
          style={{
            width: 15,
            height: 15,
            marginRight: 10,
            // backgroundColor: 'black',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name={'info'} size={15} color={'black'} />
        </Animated.View>
        <View style={{flexDirection:'row'}}>
        <Text style={{...FONTS.lable01}}>{text1}</Text>
        {text2 && <Text style={{...FONTS.lable03}}>{text2}</Text>}

        </View>
      </Animated.View>
    );
  },
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
  tomatoToast: ({text1, props}) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      {/* <Text>{props.uuid}</Text> */}
    </View>
  ),
};
