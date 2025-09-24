import { useState } from "react";
import { StyleSheet, TouchableHighlight, View, Text} from "react-native";
import couleur from "../utils/couleurs/couleurs";

const SelectionRadio = ({etiquette = "Label"}) => {
    const [selected, setSelected] = useState(false);
    const [fontRadio, setFontRadio] = useState('white');
    const [valeur, setValeur] = useState("");
    const [bordure, setBordure] = useState('black');
    return (
        <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: -5,
                    marginVertical: 10,
                    marginBottom: 20,
                    marginHorizontal: 'auto'
                }}>
            <Text style={{fontSize: 14}}>
                {etiquette} | {valeur}
            </Text>
            
            <TouchableHighlight
                onPress={() => {
                    setSelected(!selected);
                    setFontRadio(selected ? 'white' : 'black');
                    setValeur(valeur)
                    if (fontRadio === 'black') {
                        setFontRadio('white');
                    }
                }}
                style={{
                    backgroundColor: fontRadio,
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: 'black',
                    marginHorizontal: 10
                }}
                underlayColor='white'
            >
                <View />
            </TouchableHighlight>
        </View>
    )
}

export default SelectionRadio

const styles = StyleSheet.create({
    etiquette: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10
    }
})