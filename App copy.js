import React, {Component} from "react";
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, TouchableHighlight } from "react-native";
import ChampFormulaire from './src/components/ChampFormulaire'
import LogoLispy from './src/components/logoLispy'
import logos from './src/assets/index'
import Separateur from "./src/components/Separateur";
import couleur from "./src/utils/couleurs/couleurs";
import BoutonConnexion from "./src/components/BoutonConnexion";
import Copyriht from "./src/components/Copyright";
import MessageAcceuil from "./src/components/MessageAcceuil";
import Acceuil from "./src/Screens/Acceuil";
import Inscription from "./src/Screens/Inscriptions";
import VerificationMail from "./src/Screens/VerificationMail";
import ReinitialisationMDP from "./src/Screens/ReinitialisationMDP";

const App = () => {
  return (
    
    <SafeAreaView style = {{flex: 1}}>
      <ScrollView style = {{flex: 1}}>
        {/* <View style= {styles.container}>
          <MessageAcceuil />
          <LogoLispy style={styles.logoTop}/>
          <ChampFormulaire labelChamp = "Nom : "/>
          <ChampFormulaire labelChamp = "Prenom : "/>
          <BoutonConnexion titre="Envoyer"/>

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

          <Copyriht espaceHaut={50}/>
        </View> */}

        <Acceuil />
        {/* <Inscription/> */}
        {/* <VerificationMail /> */}
        {/* <ReinitialisationMDP /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  mdpOublier_Inscription: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
    width: '80%',
    padding: 5,
    margin: 5,
    marginTop: 30,
    // borderWidth: 1,
  },
  mdpOublier: {
    marginLeft: 10
  },
  inscription: {
    marginLeft: "15%"
  }
})

export default App;