import { View, Text, Image, StyleSheet, TouchableHighlight, Alert } from "react-native";
import couleur from "../utils/couleurs/couleurs";
import photos from '../assets/index'
const LogoLispy = (
    {
        logo = photos.profilHomme,
        hauteurLogo = 100,
        largeurLogo = 100,
        espaceGaucheDroite = 20
    }
) => {
    return (
        <View style={styles.containerLogo}>
            {/* Définition de touchableHighLight pour que le logo soit cliquable et qu'on puis l'afficher */}

            <TouchableHighlight
                onPress={
                    ()=> {
                        alert('vous avez cliqué sur le logo')
                    }
                }
                style={
                    // styles.cliqueLogo
                    {
                        backgroundColor: couleur.bleuTransparentBoutton,
                        width: largeurLogo,
                        height: hauteurLogo,
                        borderRadius: largeurLogo,
                        // margin: 10
                    }
                }
                    underlayColor={couleur.noirParticulier}>

                <Image
                    style={
                        {
                            width: largeurLogo,
                            height: hauteurLogo,
                            borderRadius: largeurLogo
                        }
                    }
                    source={logo}
                />

            </TouchableHighlight>
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerLogo: {
        marginHorizontal: 'auto'
    },
})

export default LogoLispy
