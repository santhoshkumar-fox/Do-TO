import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONTS} from "../constants";

const InputText = ({title, onChangeCallback, containerStyle,initialvalue,disable,inputContainerStyle,leftIcon,rightIcon,textFieldContainerStyle,...props}) => {
    return (
      <View
        style={[{width: '100%',alignItems:'center'},disable && {opacity:.5},containerStyle]}>
        {/* {String(title).trim() != '' && <Text style={{paddingHorizontal: 5, marginBottom: 5, ...FONTS.lable01,width:'100%'}}>
          {title}
        </Text>} */}
        <View
          style={[
            styles.inputContainer,
            {flexDirection: 'row', alignItems: 'center'},
            inputContainerStyle,
          ]}>
            {
            leftIcon != null && 
            <View style={{width:20,height:20,alignItems:"center",justifyContent:'center'}}>
              {leftIcon}
            </View>}
          <TextInput
            {...props}
            editable={!disable}
            placeholderTextColor={COLORS.greyColor}
            value={initialvalue}
            onChangeText={e => {
              onChangeCallback(e, title);
            }}
            style={{
              flex:1,
              paddingHorizontal: 10,
              ...FONTS.lable02,
              color:"white",
              ...textFieldContainerStyle
            }}
          />
        {rightIcon != null && 
            rightIcon
        }
        </View>
      </View>
    );
  };
  

export default InputText

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        
        height: 48,
        paddingHorizontal: 10,
        borderRadius: 12,
        borderWidth:1,
        borderColor: 'white',
      },
})