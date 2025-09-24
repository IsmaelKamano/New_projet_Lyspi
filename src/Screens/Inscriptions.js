import { View, SafeAreaView, StyleSheet, TouchableHighlight, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import MessageAcceuil from "../components/MessageAcceuil";
import couleur from "../utils/couleurs/couleurs";
import LogoLispy from "../components/logoLispy";
import ChampFormulaire from "../components/ChampFormulaire";
import BoutonConnexion from "../components/BoutonConnexion";
import SelectionRadio from "../components/SelectionRadios"
import Copyright from "../components/Copyright";
import { useState } from "react";
import Header from "../components/Header";

const {width, height} = Dimensions.get('window')

const Inscription = () => {
    const [selectionner, setSelectionner] = useState(false)
    return (
        <SafeAreaView style={{backgroundColor: couleur.noirParticulier, height: "100%", flex: 1, justifyContent: 'center'}}>
            {/* <Header/> */}
            <MessageAcceuil
                message="Création de compte LYSPI"
                tailleMessage={30}
            />
            <View style={styles.card}>
                <LogoLispy />
                <ChampFormulaire labelChamp={'Nom'} />
                <ChampFormulaire labelChamp={'Prenom'} />
                <ChampFormulaire labelChamp={'Université'} />
                <ChampFormulaire labelChamp={'Mot de passe'} />
                <ChampFormulaire labelChamp={'Email'} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <SelectionRadio etiquette="Etudiant"/>
                    <SelectionRadio etiquette="Diplome"/>
                </View>

                <View style={styles.bouttons}>
                    <BoutonConnexion />
                    <BoutonConnexion couleurDeFond={couleur.rougeTranparent} titre="Annuler"/>
                </View>
                
            </View>
            <Copyright nomEntreprise="KJS Groupe"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 'auto',
        height: 'auto',
        backgroundColor: couleur.blanc,
        margin: 25,
        marginBottom: -5,
        borderRadius: 20,
        padding: 10
    },
    bouttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    
})

export default Inscription