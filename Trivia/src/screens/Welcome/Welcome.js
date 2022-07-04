import React from 'react'
import {View,Text,StatusBar} from 'react-native'
import styles from './Welcome.style'
import LinearGradient from 'react-native-linear-gradient'
const Welcome = () => {
    return(
        <LinearGradient colors={['#000428','#004e92']}  style={styles.container} >
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <Text style={styles.text} >Welcome to Trivia</Text>
        </LinearGradient>
    )
}

export default Welcome