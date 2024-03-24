import {
  ActivityIndicator,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {getCurrentUser, getData, postData} from '../service/appWriteService';
import AppBar from '../components/AppBar';
import {SIZE, FONTS, COLORS} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TodoCard from '../components/TodoCard';
import {colorPalette} from '../constants/constants';
import RBSheet from 'react-native-raw-bottom-sheet';
import TodoFormList from '../components/TodoFormList';
import { Query } from 'appwrite';
import Animated, { FadeOut, LinearTransition, SlideInLeft, SlideInRight } from 'react-native-reanimated';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [userLoading,setUserLoading] = useState(true);
  const [todoData,setTodoData] = useState([]);
  const [goLast,setGoLast] = useState(false);
  const refRBSheet = useRef(null);
  const scrollRef = useRef()

  const getUserData = async () => {
    const value = await getCurrentUser();
    setUserLoading(false);
    getTodoData(value)
    setUser(value);
  };

  const getTodoData = async(value=user)=>{
    
     const queryValue = [
      Query.equal("email",[value?.email])
     ]
     const values = await getData(queryValue,()=>{},(err)=>{console.log('err',err)});
     setTodoData(()=>([...values]))
  }
  useEffect(() => {
    getUserData();
    getTodoData();
    
  }, []);



  const openModal = () => {
    refRBSheet?.current?.open();
  };

  if(userLoading){
    return(
      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"black"}}>
    <ActivityIndicator color={'white'}/>
    </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      {/* appbar */}
      <AppBar user={user}/>
      {/* page title */}
      <View style={styles.pageTitleContaioner}>
        <Animated.View
          entering={SlideInLeft.delay(500).springify().damping(14).stiffness()} style={{flex: 1}}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{...FONTS.title01, color: 'white', width: '80%'}}>
            👋 Daily Routine Checklists ✔
          </Text>
        </Animated.View>
       <Animated.View
          entering={SlideInRight.delay(500).springify().damping(14).stiffness()}>
       <TouchableOpacity onPress={openModal} style={styles.addButton}>
          <Text style={{...FONTS.title01, color: 'white'}}>+</Text>
        </TouchableOpacity>
       </Animated.View>
      </View>

      {/* content */}
      <View
        style={{
          width: '100%',
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: SIZE.padding,
        }}>
        <KeyboardAwareScrollView 
        onContentSizeChange={()=>{
          if(goLast){
            scrollRef?.current?.scrollToEnd();
            setGoLast(false);
          }
        }}
        ref={scrollRef}
         style={{width: '100%', height: '100%'}}>
          {todoData?.map((element, index) => {
            return (
              <Animated.View
              layout={LinearTransition}
              entering={SlideInRight.delay(300 +( 50* index)).springify().damping(14).stiffness()}
              exiting={FadeOut.delay(300)}
              >
              <TodoCard key={element?.$id} index={index} data={{...element,bgColor: element?.bg_color}} user={user} getTodoData={getTodoData}/>
              </Animated.View>
            );
          })}
        </KeyboardAwareScrollView>
      </View>

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
          type={'POST'}
          onCloseCallback={() => {
            refRBSheet?.current?.close();
            getTodoData();
            setGoLast(true)
          }}
          initialData={{}}
          userData={user}
        />
      </RBSheet>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    width: SIZE.width,
    height: SIZE.height,
    backgroundColor: 'black',
  },
  pageTitleContaioner: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: SIZE.padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    width: 50,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: SIZE.radius,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
});
