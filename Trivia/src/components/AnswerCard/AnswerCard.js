import React from "react";
import {Text,View,TouchableOpacity} from 'react-native'
import styles from './AnswerCard.style'
const AnswerCard = ({answer,handleAnswer}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={()=>handleAnswer(answer)} >
            <Text style={styles.text} >{answer.id}</Text>
        </TouchableOpacity>
    )
}

export default AnswerCard