import React , {useEffect,useState} from 'react';
import { StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import axios from "axios";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

import { Picker} from '@react-native-picker/picker';

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';

import DetailsScreen from "./components/Screens/DetailsScreen";
import MainScreen from "./components/Screens/MainScreen";

const Stack = createStackNavigator();

//all code above is just imports needed for project


export default function App () {

  const [apiData,setApiData] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [lat,setLat] = useState("41.7151");
  const [lon,setLon] = useState("44.8271");
  const [currentCityName,setCurrentCityName] = useState("Tbilisi");
  const [isLoading,setIsLoading] = useState(true);

  

  // useFonts hook to require for the desired font.
  let [fontsLoaded] = useFonts({
    "Quicksand-Light" : require('./assets/fonts/Quicksand-Light.ttf')
  });

  // basic async fetching function using axios
  const fetchData = async () =>{
    try{
      const response = await axios.get(API)
      setApiData(response.data);
      setIsLoading(false);
    }catch(error){
      console.info(error.config)
    }
  }
  
  // below are three useEffect hooks they are making sure data is set
  // right place right time.
useEffect(()=>{
    fetchData();
},[])

useEffect(()=>{
    if(lat === "42.2662" ){
      setCurrentCityName("Kutaisi")
    }
    if(lat === "41.6168" ){
      setCurrentCityName("Batumi")
    }
    if(lat === "41.7151" ){
      setCurrentCityName("Tbilisi")
    }
},[lat])

useEffect(()=>{
  fetchData();
  selectedCity && setLat(selectedCity.substring(0,7))
  selectedCity && setLon(selectedCity.substring(7,14)) 
},[selectedCity])

//changeable API url, that changes depending on coordinates of the city.
let API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=22a3c9128dcfadb3bc1d366ecef407de`

const weatherIcon = `http://openweathermap.org/img/w/${!isLoading && apiData.current.weather[0].icon}.png`

//here I am turning unix code into usable date
 const unixTimestamp = !isLoading && apiData.current.dt
 const milliseconds = unixTimestamp * 1000 
 const dateObject = new Date(milliseconds)
 const humanDateFormat = dateObject.toLocaleString() 

 // this is a component MainScreen that I will later pass into Stack.Screen
const myScreenComponent = () => (
    <MainScreen currentCityName={currentCityName} humanDateFormat={humanDateFormat} apiData={apiData} weatherIcon={weatherIcon}isLoading={isLoading} />
  );

  //basic NavigationContainer with stack screens
  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main Page"
          component={myScreenComponent}
          options={{
            headerStyle: {elevation: 0, backgroundColor: '#87cefa' },
            title: " ",
            headerLeft: ()=>{
              const navigation = useNavigation(); 
              return(
              <TouchableOpacity onPress={()=> navigation.navigate('detailsScreen',{data : apiData.current})
              }>
              <Icon
                size={50}
                iconStyle={styles.stackHeader}
                type="ionicon"
                name="md-menu"
              />
              </TouchableOpacity>
            )},
              headerRight: () =>(
                <Picker
                style={{height:100,width:140,color:"white",fontFamily:"Quicksand-Light"}}
                selectedValue={selectedCity}
                onValueChange={(itemValue) =>{
                setSelectedCity(itemValue)
                
                }
                }>
                  <Picker.Item label="Tbilisi" value="41.715144.8271" />
                  <Picker.Item label="Batumi" value="41.616841.6367" />
                  <Picker.Item label="Kutaisi" value="42.266242.7180" />
                </Picker>
              )
          }}
        >
        </Stack.Screen>
        <Stack.Screen
        options={{
          headerStyle:{elevation: 0, backgroundColor: '#87cefa'},
          title: " ",
          headerTintColor: "white"
        }}
        name="detailsScreen"
        component={DetailsScreen}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  stackHeader: {
    color:"white",
    paddingLeft: 10,
    height:50,
    width:100,
  },
});
