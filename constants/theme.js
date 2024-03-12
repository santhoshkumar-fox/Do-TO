import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const COLORS = {
  primarColor:   "rgba(212, 251, 84, 1)",
  primarColor90: "rgba(212, 251, 84, .9)",
  primarColor80: "rgba(212, 251, 84, .8)",
  primarColor70: "rgba(212, 251, 84, .7)",
  primarColor60: "rgba(212, 251, 84, .6)",
  primarColor50: "rgba(212, 251, 84, .5)",
  primarColor30: "rgba(212, 251, 84, .3)",
  primarColor20: "rgba(212, 251, 84, .2)",
  primarColor15: "rgba(212, 251, 84, .15)",
  primarColor10: "rgba(212, 251, 84, .1)",
  primarColor05: "rgba(212, 251, 84, .05)",
   
  

  greyColor:   "rgba(100,100,100,1)",
  greyColor90: "rgba(100,100,100,.9)",
  greyColor80: "rgba(100,100,100,.8)",
  greyColor70: "rgba(100,100,100,.7)",
  greyColor60: "rgba(100,100,100,.6)",
  greyColor50: "rgba(100,100,100,.5)",
  greyColor40: "rgba(100,100,100,.4)",
  greyColor30: "rgba(100,100,100,.3)",
  greyColor15: "rgba(100,100,100,.15)",
  greyColor05: "rgba(100,100,100,.05)",
  greyColor03: "rgba(100,100,100,.03)",

  textColor:'rgba(255,255,255,.5)',
  
  alertRed:"rgba(255,59,48,1)",
  alertRed08:"rgba(255,59,48,.8)",
  alertRed05:"rgba(255,59,48,.5)",
  alertRed01:"rgba(255,59,48,.1)",
  alertRed005:"rgba(255,59,48,.05)",
  
};

export const SIZE = {
  radius: 10,
  padding: 20,
  margin: 20,
  width,
  height,
};

export const FONTS = {
  title01:{
    fontFamily: 'GT-Super-Text-Regular-Trial',
    fontWeight: "400",
    fontSize: 28,
    color:"#2C2C2C",
    lineHeight:42,
  },
  title02:{
    fontFamily: 'GT-Super-Text-Black-Trial',
    fontWeight: "400",
    color:"#2C2C2C",
    fontSize: 24,
  },
  body01:{
    fontFamily: 'GT-Super-Text-Regular-Trial',
    fontWeight: "400",
    color:"#2C2C2C",
    fontSize: 18,
    lineHeight:26,
  },
  body02:{
    fontFamily: 'Inter-Regular',
    fontWeight: "500",
    color:"#2C2C2C",
    fontSize: 16,
  },
  lable01:{
    fontFamily: 'Inter-SemiBold',
    fontWeight: "500",
    fontSize: 14,
    color:"#2C2C2C"
  },
  lable02:{
    fontFamily: 'Inter-Regular',
    fontWeight: "400",
    fontSize: 14,
    color:"#2C2C2C"
  },
  lable03:{
    fontFamily: 'Inter-Regular',
    fontWeight:"400",
    fontSize: 12,
    color:"#2C2C2C"
  },
  lable04:{   
    fontFamily: 'Inter-Black',
    fontWeight:"400",
    fontSize: 10,
    color:"#2C2C2C"
  },

}; 

export default apptheam = { COLORS, SIZE ,FONTS};
