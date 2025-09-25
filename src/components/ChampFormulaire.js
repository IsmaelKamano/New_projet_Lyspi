import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import couleur from "../utils/couleurs/couleurs"
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const {width} = Dimensions.get('window')


const ChampFormulaire = ({
    labelChamp = 'Saisie ici',
    obligatoire = true,
    _recupererValeurChamp = () => {},
    valeurs = "bonjour"
}) => {
    
    var obliger = 'none'

    if(obligatoire){
        obliger = 'display'
    }

    return (
        <View style={styles.champFormulaire}>
            {/* Définition du champ de saisie */}
            <Text style={{margin:5}}>{labelChamp}</Text>
            
            <View style={styles.containerChampInput}>
                {/* <Ionicons name="flag"/> */}
                <TextInput
                    style={styles.inputChamp}
                    placeholder= {labelChamp}
                    onChangeText={_recupererValeurChamp}
                    value= {valeurs}
                />

                <Text style={{fontSize: 16, color: 'red', margin: 5, display: obliger}}>*</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    champFormulaire: {
        flexDirection: 'column',
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
    },
    containerChampInput: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default ChampFormulaire;

