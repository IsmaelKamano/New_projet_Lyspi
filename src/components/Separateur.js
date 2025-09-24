import { Text, View } from "react-native";

// Ce composant sert de séparateur entre deux composants distincts
const Separateur = (
    {
        hauteur = 3,
        largeur = 100,
        couleur = 'black',
        espaceDuBas = 30,
        espaceDuHaut = 20
    }
) => {
    return(
        <View style={
            {
                height: hauteur,
                backgroundColor: couleur,
                width: largeur,
                margin: 'auto',
                // marginVertical: 30,
                marginBottom: espaceDuBas,
                marginTop: espaceDuHaut
            }
        }>
        </View>
    )
}

export default Separateur

