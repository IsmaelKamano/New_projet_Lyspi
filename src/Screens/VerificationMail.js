import { View } from "react-native";
import MessageAcceuil from "../components/MessageAcceuil";
import ChampFormulaire from "../components/ChampFormulaire";
import BoutonConnexion from "../components/BoutonConnexion";
import couleur from "../utils/couleurs/couleurs";


const VerificationMail = ({}) => {
    return (
        <View style={{padding: 20}}>
            <MessageAcceuil />
            <ChampFormulaire labelChamp="Code de vérification"/>
            <View style={{flexDirection: 'row'}}>
                <BoutonConnexion titre="Valider"/>
                <BoutonConnexion titre="Annuler" couleurDeFond={couleur.rougeTranparent}/>
            </View>
            
        </View>
        
    )
}

export default VerificationMail