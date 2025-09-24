import { View, SafeAreaViewBase, SafeAreaView, StyleSheet, Text, TouchableHighlight } from "react-native";
import BoutonConnexion from "../components/BoutonConnexion";
import ChampFormulaire from "../components/ChampFormulaire";
import Copyriht from "../components/Copyright";
import LogoLispy from "../components/logoLispy";
import MessageAcceuil from "../components/MessageAcceuil";
import couleur from "../utils/couleurs/couleurs";


const Acceuil = () => {
    return (
        <SafeAreaView style={{padding: 20, flex: 1, marginVertical: "35%" }}>
                <MessageAcceuil />
            <View style={styles.Card}>
                <LogoLispy />
                <ChampFormulaire labelChamp={'Votre email'}/>
                <ChampFormulaire labelChamp={'Mot de passe'}/>
                <BoutonConnexion titre="Se connecter"/>

                <View style={styles.mdpOublier_Inscription}>
                    <TouchableHighlight onPress={()=>{alert("Logique mdp oublier ici")}} style={styles.mdpOublier} underlayColor=''>
                    <Text style={styles.textMdpOublier}>
                        Mot de passe oublier ?
                    </Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>{alert("Logique Inscription ici")}} style={styles.inscription} underlayColor=''>
                    <Text style={styles.textInscription}>
                        Creer un compte
                    </Text>
                    </TouchableHighlight>
                </View>

                <Copyriht nomEntreprise="KJS Groupe" anneeEnCours={2024}/>
            </View>
        </SafeAreaView>
    )
}

export default Acceuil

const styles = StyleSheet.create({
    Card: {
        backgroundColor: couleur.blanc,
        borderRadius: 10,
        marginHorizontal: 'auto',
        padding: 5
    },
    mdpOublier_Inscription: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
        width: '80%',
        padding: 5,
        margin: 25,
        marginVertical: 10,
        // borderWidth: 1,
        width: "100%",
    },
    mdpOublier: {
        marginLeft: 10,
        marginHorizontal: 'auto'
    },
    inscription: {
        marginHorizontal: "auto",

    },
    textMdpOublier: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    textInscription: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})