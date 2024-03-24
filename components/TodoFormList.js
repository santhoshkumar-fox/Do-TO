import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from '@react-native-community/blur'
import { SIZE,FONTS, COLORS } from '../constants'
import Feather from 'react-native-vector-icons/Feather'
import InputText from './InputText'
import { colorPalette } from '../constants/constants'
import Animated, { FadeInLeft, LinearTransition } from 'react-native-reanimated'
import { DeleteData, postData, putData } from '../service/appWriteService'
import { TOAST_STATUS, showToast } from './toasts'
const TodoFormList = ({type,initialData,userData,onCloseCallback}) => {
    const [data,setData] = useState(initialData);
    const [isLoading,setisLoading] = useState(false);


    const postCallback = async()=>{
      
        setisLoading(true);
        const value = {
            email:userData.email,
            user:userData.name,
            title:data.title,
            description:data.description,
            bg_color:data.bgColor,
            
        }
       if(type === 'POST'){
        await postData(value,()=>{
          setisLoading(false);
          onCloseCallback();
          showToast(TOAST_STATUS.success,'Todo Created',null);
      },(error)=>{
          console.log(error);
          showToast(TOAST_STATUS.error,'Failed',null);
      })
       }else{
        await putData(value,data?.$id ?? null,()=>{
          setisLoading(false);
          onCloseCallback();
          showToast(TOAST_STATUS.success,'Updated',null);
      },(error)=>{
          console.log(error);
          showToast(TOAST_STATUS.error,'Failed',null);
      })
        
       }
    }


    const deleteCallback = async()=>{
       await DeleteData(data?.$id,(res)=>{
        onCloseCallback();
        showToast(TOAST_STATUS.success,'Deleted',null)
       },(err)=>{console.log(err)})
    }

  return (
    <Animated.View style={styles.mainContainer}>
      <View style={[StyleSheet.absoluteFill]}>
      <BlurView  style={{flex:1,borderRadius:10,margin:3}}/>
      </View>

      {/* title */}
      <Text style={{...FONTS.lable01,color:"white"}}>Add Your Todo</Text>
    
        {/* Title Text */}
        <InputText
          initialvalue={data.title ?? ''}
          secureTextEntry={false}
          leftIcon={<Feather name={'hash'} size={15} color={'white'} />}
          containerStyle={{marginBottom: 23}}
          onChangeCallback={(text, i) => {
           setData((el)=>{return({...el,title:text})})
          }}
          inputContainerStyle={{margin:0,borderWidth:0,borderBottomWidth:1}}
          textFieldContainerStyle={{...FONTS.body01,color:"white"}}
          placeholder={'Title'}
          placeholderTextColor={'white'}
          autoCapitalize="words"
        />

<InputText
          initialvalue={data.description ?? ''}
          secureTextEntry={false}
          leftIcon={<View style={{flex:1,minHeight:80,marginTop:20}}>
            <Feather name={'edit'} size={15} color={'white'} />
          </View>}
          containerStyle={{marginBottom: 12,minHeight:100}}
          onChangeCallback={(text, i) => {
           setData((el)=>{return({...el,description:text})})
          }}
          inputContainerStyle={{margin:0,minHeight:100}}
          
          textFieldContainerStyle={{...FONTS.lable01,color:"white",minHeight:100,textAlignVertical:"top",paddingTop:17}}
          placeholder={'Descritpion'}
          placeholderTextColor={'white'}
          multiline={true}
        />


{/* color palates */}

<View style={{width:'100%',marginTop:10}}>
<View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
<Feather name={'disc'} color={'white'} size={18}/>
<Text style={{...FONTS.lable01,color:'white',marginLeft:10}}>Color Pallets</Text>
</View>

<ScrollView showsHorizontalScrollIndicator={false} horizontal style={{width:"100%",height:30,marginTop:5}}>
   {
    colorPalette?.map((color,index)=>{
        return(
            <Animated.View  layout={LinearTransition} style={[{width:30,height:30,borderWidth:2,borderColor:"transparent",marginLeft:1,padding:3,},data.bgColor == color &&{borderColor:"white",borderRadius:10,marginLeft:5,marginRight:5}]}>
            <TouchableOpacity
            onPress={()=>{
                setData((el)=>({...el,bgColor:color}))
            }}
             style={{flex:1,backgroundColor:color,borderRadius:5}}>

            </TouchableOpacity>

            </Animated.View>
        )
    })
   }
</ScrollView>



</View>
<View style={{flex:1,alignItems:"flex-end",justifyContent:"space-between",flexDirection:"row"}}>
   
   
   <TouchableOpacity 
   onPress={postCallback}
    style={[{width:'100%',height:40,backgroundColor:COLORS.primarColor,borderRadius:SIZE.radius,alignItems:"center",justifyContent:"center"},type != 'POST' && {flex:1,marginRight:10}]}>
     <Text style={{...FONTS.lable01}}>{
      type === 'POST' ? "Add" :'Edit'
     }</Text>
   </TouchableOpacity>
   {type != 'POST' && <TouchableOpacity onPress={deleteCallback} style={{width:50,height:40,alignItems:"center",justifyContent:"center"}}>
     <Feather name={'delete'} size={20} color={COLORS.alertRed}/>
   </TouchableOpacity>}

</View>


    </Animated.View>
  )
}

export default TodoFormList

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        padding:20,

        borderRadius:SIZE.radius,
        // backgroundColor:"rgba(0,0,0,.1)"
    }
})