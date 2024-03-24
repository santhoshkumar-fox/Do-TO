import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useRef, useState } from 'react'
import Animated, { LinearTransition, SlideInDown, SlideInLeft } from 'react-native-reanimated'
import { COLORS,SIZE,FONTS } from '../constants'
import Feather from "react-native-vector-icons/Feather"
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import RBSheet from 'react-native-raw-bottom-sheet'
import TodoFormList from './TodoFormList'
import { putData } from '../service/appWriteService'
const TodoCard = ({data,user,getTodoData,index}) => {
  const [isCheck,setIsCheck] = useState(data?.check ?? false)
  const refRBSheet = useRef(null);
 
  const onCheckCallback = async()=>{
    setIsCheck(!isCheck);
    await putData({check:!isCheck},data?.$id,()=>{
      getTodoData();
    },(err)=>{console.log(err)})
    
  }


  const onEditCallback = ()=>{

    refRBSheet?.current?.open();
  }

  return (
    <Animated.View    
     layout={LinearTransition} style={[styles.mainContainer,{backgroundColor:data.bgColor},isCheck && {opacity:.9}]}>
      <TouchableOpacity 
      onPress={onEditCallback}
       activeOpacity={.8} style={{flex:1}}>
        {/* title */}
      <View style={{width:"100%",height:40,alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={[{...FONTS.lable01,fontSize:20},isCheck && {textDecorationLine: 'line-through'}]}>{data?.title ?? ''}</Text>

      </View>
      <Text numberOfLines={2} ellipsizeMode="tail" style={{...FONTS.lable03}}>{data?.description ?? ''}</Text>

      <TouchableOpacity 
       onPress={onCheckCallback}
       style={{width:40,height:40,position:"absolute",top:0,right:0,padding:10,alignItems:"flex-end"}}>
        <View style={{width:20,height:20,backgroundColor:"black",borderWidth:1,borderColor:"white",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
       {isCheck && <View>
        <Feather name={'check'} color={'white'} size={14}/>
        </View>}
        </View>
      </TouchableOpacity>
      </TouchableOpacity>
      
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,.4)',
          },
          draggableIcon: {
            // backgroundColor: 'rgba(25,255,0,1)',
          },
          container: {
            width: SIZE.width - 2,
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0)',
          },
        }}>
        <TodoFormList
          type={'PUT'}
          onCloseCallback={() => {
            refRBSheet?.current?.close();
            getTodoData()
          }}
          initialData={data}
          userData={user}
        />
      </RBSheet>

    </Animated.View>
  )
}

export default TodoCard

const styles = StyleSheet.create({

    mainContainer:{
        width:'100%',
        minHeight:100,
        borderRadius:10,
        backgroundColor:COLORS.primarColor,
        marginBottom:10,
        padding:10,
        borderWidth:1,
        borderColor:"white"

    }
})