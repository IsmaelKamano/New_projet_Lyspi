import { View, SafeAreaView, StyleSheet, Text, TouchableHighlight } from "react-native";
import BoutonConnexion from "../components/BoutonConnexion";
import ChampFormulaire from "../components/ChampFormulaire";
import Copyright from "../components/Copyright";
import LogoLispy from "../components/logoLispy";
import MessageAcceuil from "../components/MessageAcceuil";
import couleur from "../utils/couleurs/couleurs";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react'
import App from "../../App";


const Acceuil = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

    return (
        <SafeAreaView style={{padding: 20, flex: 1, justifyContent: "center" }}>
                <MessageAcceuil />
            <View style={styles.Card}>
                <LogoLispy />
                <ChampFormulaire
                    labelChamp={'Votre email'}
                    valeurs={email}
                    _recupererValeurChamp={setEmail}
                    typeClavier="email-address"
                />
                <ChampFormulaire
                    labelChamp={'Mot de passe'}
                    valeurs={motDePasse}
                    _recupererValeurChamp={setMotDePasse}
                    typeClavier="defpault"
                    securise= {true}
                />
                <BoutonConnexion
                    titre="Se connecter"
                    _action={() => {
                        // alert(`Email: ${email} \n Mot de passe: ${motDePasse}`);
                        navigation.navigate("MainTabs");
                    }}
                />

                <View style={styles.mdpOublier_Inscription}>
                    <TouchableHighlight onPress={()=>{alert("Logique mdp oublier ici")}} style={styles.mdpOublier} underlayColor=''>
                        <Text style={styles.textMdpOublier}>
                            Mot de passe oublier ?
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>{navigation.navigate("Inscription")}} style={styles.inscription} underlayColor=''>
                        <Text style={styles.textInscription}>
                            Creer un compte
                        </Text>
                    </TouchableHighlight>
                </View>

                <Copyright nomEntreprise="KJS Groupe" anneeEnCours={2024}/>
            </View>
        </SafeAreaView>
    )
}

export default Acceuil

const styles = StyleSheet.create({
    Card: {
        backgroundColor: couleur.blanc,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 5,
    },
    mdpOublier_Inscription: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%',
        padding: 5,
        margin: 25,
        marginVertical: 10,
        width: "100%",
        justifyContent: "space-between"
    },
    mdpOublier: {
        alignSelf: 'center'
    },
    inscription: {
        alignSelf: "center",

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
