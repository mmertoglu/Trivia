import React from 'react'
import {View,Text,StatusBar, TouchableOpacity} from 'react-native'
import styles from './Welcome.style'
import LinearGradient from 'react-native-linear-gradient'
const Welcome = ({navigation}) => {
    const goQuestions = () => {
        navigation.navigate('QuestionsScreen')
    }
    return(
        <LinearGradient colors={['#000428','#004e92']}  style={styles.container} >
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <Text style={styles.text} >Trivia'ya Hoşgeldin</Text>
            <TouchableOpacity onPress={goQuestions} style={styles.basla_buton} >
                <Text style={styles.basla_text} >Oyuna Başla</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Welcome