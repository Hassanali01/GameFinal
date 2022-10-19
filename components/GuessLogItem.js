import { StyleSheet, Text,View } from "react-native";
import Colors from "../constants/Colors";


function GuessLogItem({roundNumber,guess}) {
    return(
        <View style={styles.listItems}>
            <Text style={styles.listText}>#{roundNumber}</Text>
            <Text style={styles.listText}>Opponent's Guess{guess}</Text>
        </View>

    )
     
}
export default GuessLogItem;

const styles=StyleSheet.create({
    listItems:{
        borderColor:Colors.primary700,
        borderWidth:1,
        padding:16,
        marginVertical:8,
        borderRadius:40,
        backgroundColor:Colors.accent500,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.75,
        shadowRadius:3

    },
    listText:{
        fontFamily:'open-sans'
    }
})