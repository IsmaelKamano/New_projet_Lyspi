import { View, TouchableHighlight, Text } from "react-native";
import couleur from "../utils/couleurs/couleurs";


const BoutonConnexion = ({
        hauteur = 30,
        largeur = 'auto',
        _action = (...props)=>{
            alert("Définissez l'action du bouton avec le parametre _action")
        },
        titre = "Votre Bouton",
        arondiDuBordurBouton = 5,
        tailleTitre = 16,
        epaisseurTitre = 'bold',
        couleurDeFond = couleur.vertTransparent
    }) => {
        return (
            <TouchableHighlight
                onPress={_action}
                style={
                    {
                        height: hauteur,
                        width: largeur,
                        borderRadius: arondiDuBordurBouton,
                        backgroundColor: couleurDeFond,
                        margin: 'auto',
                        alignItems: 'center',
                        alignContent: 'center',
                        paddingVertical: 'auto',
                        padding: 10,
                        paddingTop: 3,
                        marginHorizontal: 'auto'
                    }
                }
                underlayColor= {couleur.noirParticulier}
            >
                <Text style = {{fontSize: tailleTitre, fontWeight: epaisseurTitre}}>{titre}</Text>
            </TouchableHighlight>
        )
    }

    export default BoutonConnexion