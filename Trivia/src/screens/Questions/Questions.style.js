import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        justifyContent:'center'
    },
    header_text:{
        color:'white'
    },
    soru_text:{
        color:'white',
        width:Dimensions.get('screen').width/1.3,
        marginTop:20,
        marginBottom:10
    }
})