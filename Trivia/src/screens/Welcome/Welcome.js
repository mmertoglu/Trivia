import React from 'react'
import {View,Text,StatusBar, TouchableOpacity} from 'react-native'
import styles from './Welcome.style'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Welcome = ({navigation}) => {
    const goQuestions = () => {
        navigation.navigate('QuestionsScreen')
    }
    
    return(
        <LinearGradient colors={['#000428','#004e92']}  style={styles.container} >
            <FontAwesome name='cog' color={'white'} size={28} style={styles.cog_icon}  />
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <Text style={styles.text} >Trivia'ya Hoşgeldin</Text>
            <TouchableOpacity onPress={goQuestions} style={styles.basla_buton} >
                <Text style={styles.basla_text} >Oyuna Başla</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Welcome