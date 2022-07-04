import React, { useEffect, useState } from "react";
import {View,Text,FlatList, Alert} from 'react-native'
import database from '@react-native-firebase/database'
import styles from './Questions.style'
import LinearGradient from "react-native-linear-gradient";
import ParseContent from '../../utils/ParseContent'
import AnswerCard from "../../components/AnswerCard/AnswerCard";
const Questions = () => {
    const [cikmislar,setCikmislar] = useState([])
    const [questionText,setquestionText] = useState(1)
    const [question,setQuestion] = useState('')
    const [skor,setSkor] = useState(0)
    const [questionNumber,setQuestionNumber] = useState(Math.floor(Math.random()*10))
    const [questionData,setQuestionData] = useState([])
    useEffect(()=>{
        database().ref('Sorular/Basit secmeli/'+questionNumber+'/soru').on('value',snapshot => {
            setQuestion(snapshot.val())
            
        })
        database().ref('Sorular/Basit secmeli/'+questionNumber+'/cevap').on('value',snapshot => {
            const newData = snapshot.val()
            const ParsedData = ParseContent(newData)
            setQuestionData(ParsedData)
            
        })

    },[questionNumber])
    
    const renderAnswers = ({item}) => <AnswerCard answer={item} handleAnswer={isTrue} />
    const isTrue = (answer) => {
        answer.isTrue == true ? yesItIsTrue() : Alert.alert('Yanlış')
    }
    const yesItIsTrue = () => {
        setSkor(skor+1)
        setQuestionNumber(Math.floor(Math.random()*10))
        setquestionText(questionText+1)
        
    }
    
    return(
        <LinearGradient colors={['#000428','#004e92']}  style={styles.container} >
           { questionText==11 ? <Text style={{color:'white',fontSize:20}} >Skorunuz - {skor}</Text> :
           <>
           <Text style={{position:'absolute',top:100,color:'white',fontSize:20}} >Skor = {skor}</Text>
            <Text style={styles.header_text} >Soru - {questionText}</Text>
            <Text style={styles.soru_text} >{question}</Text>
            <FlatList
            inverted
            style={{flexGrow:0}}
            data={questionData}
            renderItem={renderAnswers}
            /></>}
        </LinearGradient>
    )
}

export default Questions;