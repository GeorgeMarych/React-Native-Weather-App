import React from 'react'
import { Text, View,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'


// this is a details screen here are no functions whatesoever
// it just renders basic tags, props are being passed from App.js


const DetailsScreen = (data) => {
    let DATA = data.route.params.data;
    return (
        <View style={styles.container}>
            <View style={styles.detailsDiv}>
               <View style={styles.upperDiv}>
                   <Text style={styles.detailsText}>Details</Text>
                   <View style={styles.lineDiv}></View>
               </View>
               <View style={styles.bottomDiv}>
                    <View style={styles.bottomDivUpper}>
                        <View style={styles.innerBottomDiv}>
                           <View style={styles.doubleInnerBottomDiv}>
                                <Icon size={60} name="temperature-celsius" type="material-community" color="white" />
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"20%"}}>
                                <Text style={styles.iconDescText}>Temperature</Text>
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"30%"}}>
                                <Text style={styles.iconText}>{Math.round(DATA.temp)}°</Text>
                            </View>
                        </View>
                        <View style={styles.innerBottomDiv}>
                            <View style={styles.doubleInnerBottomDiv}>
                            <Icon size={60} name="wind" type="feather" color="white" />
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"20%"}}>
                                <Text style={styles.iconDescText}>Wind</Text>
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"30%"}}>
                                <Text style={styles.iconText}>{DATA.wind_speed} km/h</Text>
                            </View>
                        </View>
                        <View style={styles.innerBottomDiv}>
                            <View style={styles.doubleInnerBottomDiv}>
                                <Icon size={60} name="water" type="entypo" color="white" />
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"20%"}}>
                                <Text style={styles.iconDescText}>Humidity</Text>
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"30%"}}>
                                <Text style={styles.iconText}>{DATA.humidity}%</Text>
                            </View>
                        </View>
                    </View> 
                    <View style={styles.bottomDivUpper}>
                        <View style={styles.innerBottomDiv}>
                            <View style={styles.doubleInnerBottomDiv}>
                                <Icon size={60} name="speedometer-sharp" type="ionicon" color="white" />
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"20%"}}>
                                <Text style={styles.iconDescText}>Pressure</Text>
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"30%"}}>
                                <Text style={styles.iconText}>{DATA.pressure} Pa</Text>
                            </View>
                        </View>
                        <View style={styles.innerBottomDiv}>
                            <View style={styles.doubleInnerBottomDiv}>
                                <Icon size={60} name="eye" type="font-awesome" color="white" />

                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"20%"}}>
                                <Text style={styles.iconDescText}>Visibility</Text>
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"30%"}}>
                                <Text style={styles.iconText}>{DATA.visibility} ft</Text>
                            </View>
                        </View>
                        <View style={styles.innerBottomDiv}>
                            <View style={styles.doubleInnerBottomDiv}>
                                <Icon size={60} name="water" type="ionicon" color="white" />
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"20%"}}>
                                <Text style={styles.iconDescText}>Dew Point</Text>
                            </View>
                            <View style={{...styles.doubleInnerBottomDiv,height:"30%"}}>
                                <Text style={styles.iconText}>{Math.round(DATA.dew_point)}°</Text>
                            </View>
                        </View>
                    </View> 
               </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: `white`,
        margin: 0
      },
    detailsDiv: {
        height: "80%",
        width:"90%",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor:"#87cefa"
    },
    upperDiv:{
        flexDirection:"row",
        height: "15%",
        width: "100%",
        alignItems: 'center',
    },
    detailsText: {
        width: "30%",
        paddingLeft : 22,
        fontSize: 20,
        fontWeight:"bold",
        fontFamily: "Quicksand-Light",
        color: "white"
    },
    lineDiv: {
        marginLeft: 18,
        height:"10%",
        width: "60%",
        borderBottomWidth:1,
        borderColor: "white"
    },
    bottomDiv: {
        height: "85%",
        width: "100%",
    },
    bottomDivUpper: {
        justifyContent:"center",
        alignItems: 'center',
        flexDirection:"row",
        height:"50%",
        width:"100%",
    },
    innerBottomDiv: {
        margin:5,
        width: "29%",
        height:"80%",
        borderWidth:1,
        borderColor: "white",
        backgroundColor:"#87cefa"
    },
    doubleInnerBottomDiv:{
        height:"50%",
        width:"100%",
        justifyContent:"center",
        alignItems: 'center',
    },
    iconDescText: {
        fontFamily: "Quicksand-Light",
        opacity: 0.9,
        color: "white"
    },
    iconText: {
        fontFamily: "Quicksand-Light",
        fontSize: 19,
        color: "white",
    }
})

export default DetailsScreen
