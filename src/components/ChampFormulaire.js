import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import couleur from "../utils/couleurs/couleurs"

const {width} = Dimensions.get('window')


const ChampFormulaire = ({labelChamp}) => {
    return (
        <View style={styles.champFormulaire}>
            {/* Définition du champ de saisie */}
            <View style={styles.containerChampInput}>
                <TextInput style={styles.inputChamp} placeholder= {labelChamp}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    champFormulaire: {
        flexDirection: 'row',
        marginVertical: 20,
        marginTop: 'auto',
        marginHorizontal: 'auto',
        marginHorizontal: 'auto'
    },

    inputChamp: {
        width: width * 0.5899,
        height: 35,
        backgroundColor: couleur.bleuTransparentBoutton,
        padding: 7,
        borderRadius: 5
    },

    containerLabel: {
        width: 75,
        padding: 1,
    },
    labelFormulaire: {
        marginTop: 7
    }
})

export default ChampFormulaire;

