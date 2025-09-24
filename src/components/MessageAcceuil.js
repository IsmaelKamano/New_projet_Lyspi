import { View, Text } from "react-native";

const MessageAcceuil = ({message = "Bienvenu à l'acceuil", tailleMessage = 24, couleurMessage = 'black', poidsMessage = 'bold'}) => {
    return (
        <View style={{alignContent: 'center', alignItems: 'justify', marginVertical: 10}}>
            <Text style={
                {
                    fontSize: tailleMessage,
                    color: couleurMessage,
                    fontWeight: poidsMessage,
                    textAlign: 'center'
                }
            }>
                {message}
            </Text>
            
        </View>
        
    )
}

export default MessageAcceuil