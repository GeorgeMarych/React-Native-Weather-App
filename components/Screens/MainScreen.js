import React from 'react';
import { StatusBar,Dimensions,Image,StyleSheet, Text, View } from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

// this is main page of the weather app, props are being passed
// from App.js

const MainScreen = ({currentCityName,humanDateFormat,apiData,weatherIcon,isLoading}) => {

        if(isLoading) {
            return null
          }else 
          return (
            <View style={styles.container}>
              <StatusBar style="auto" />
              <View style={styles.topDiv}>
                    <View style={styles.cityDate}>
                    <Text style={{...styles.cityText,fontSize: 50}}>{currentCityName}</Text>
                    <Text style={{color:"white",fontFamily: "Quicksand-Light",fontSize:15}}>{humanDateFormat}</Text>
                  </View>
                  <View style={styles.centerDiv}>
                    <View style={styles.tempDiv}>
                      <Text style={styles.tempText}>{Math.round(apiData.current.temp)}°</Text>
                    </View>
                    <View style={styles.centerRightDiv}>
                      <View style={styles.mainDesc}>
                        <Text style={styles.cityText}>{apiData.current.weather[0].main}</Text>
                      </View>
                      <View style={styles.mainDesc}>
                        <Text style={styles.secondaryDesc}>{apiData.current.weather[0].description}</Text>
                      </View>
                      <View style={styles.mainDesc}>
                        <Image style={styles.weatherImg}source= {{ uri : weatherIcon}}/>
                      </View>
                    </View>
                  </View>  
              </View>
               <View style={styles.bottomDiv}>
                {apiData.daily.map((a)=>{
                  let index= Math.floor(Math.random() * 1000)
                  const milliseconds = a.dt * 1000 
                  const dateObject = new Date(milliseconds)
                  const humanDateFormat = dateObject.toLocaleString()
                  return (
                  <View key={index} style={styles.sevenDivs}>
                    <View style={styles.insideSevenDivs}>
                      <Text style={{color:"white",fontSize:18,fontFamily: "Quicksand-Light"}}>{humanDateFormat.substring(0,3)}</Text>
                    </View>
                    <View style={styles.insideSevenDivs}>
                      <Image style={{width:35,height:35}}source={{uri : `http://openweathermap.org/img/w/${a.weather[0].icon}.png`}}/>
                    </View>
                    <View style={styles.insideSevenDivs}>
                      <Text style={{color:"white",fontSize:16,fontFamily: "Quicksand-Light"}}>{Math.round(a.temp.min)}° {Math.round(a.temp.max)}°</Text>
                    </View>
                    <View style={styles.insideSevenDivs}>
                      <Text style={{color:"white",textAlign: "center",fontSize:18,fontFamily: "Quicksand-Light"}}>{a.weather[0].main}</Text>
                    </View>
                  </View>
                )})}
                </View>       
          </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: `white`,
      margin: 0
    },
    topDiv:{
      marginTop: deviceHeight/40,
      width:"80%",
      borderRadius: 20,
      elevation:5,
      height: deviceHeight/2,
      backgroundColor:"#87cefa",
    },
    stackHeader: {
      color:"white",
      paddingLeft: 10,
      height:50,
      width:100,
    },
    cityDate :{
      height: "30%",
      width: "100%",
      display: "flex",
      justifyContent : "center",
      alignItems:"center",
    },
    centerDiv: {
      height: "70%",
      width: "100%",
      flexDirection:"row",
    },
    centerRightDiv:{
      height:"100%",
      width:"50%",
      justifyContent:"center",
    },
    tempDiv:{
        borderColor: "black",
        height: "100%",
        width: "50%",
        justifyContent:"center",
        alignItems:"center",
    },
    mainDesc: {
      justifyContent:"center",
      alignItems:"center",
      width: "100%",
      marginTop:10,
    },
    cityText:{
      fontFamily: "Quicksand-Light",
      color: "white",
      fontSize: 40
    },
    tempText: {
      fontFamily: "Quicksand-Light",
      color:"white",
      fontSize: 80
    },
    secondaryDesc:{
      fontFamily: "Quicksand-Light",
      textAlign: "center",
      color:"white",
      fontSize : 20,
    },
    weatherImg:{
      height:60,
      width:60,
    },
    bottomDiv: {
        alignSelf: "flex-end",
        width:"100%",
        height:"35%",
        marginTop: deviceHeight/26.68,
        flexDirection:"row",
    },
    sevenDivs: {
      width: deviceWidth/7,
      height: "100%",
    },
    insideSevenDivs: {
      backgroundColor:"#87cefa",
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%",
      height: "25%",
      borderColor:"white",
      borderRightWidth:1,
      borderBottomWidth:1
    }
  
  });
  


export default MainScreen
