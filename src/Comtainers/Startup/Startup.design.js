import { StyleSheet } from "react-native"
import couleur from "../../couleurs/couleurs"

const design = StyleSheet.create({
    statelessContainer: {
        flex: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        marginVertical: 7,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    ContainerBoutonActionStateless: {
        
    },
    conatainerNomStateless: {
        width: 250
    },
    imageTouchable: {
        marginLeft: 30
    },
    flagsStateless: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'grey',
    },
    iconeBoutonStateless: {
        height: 30,
        width: 30
    },

    grouperBoutonStateless: {
        flex: 1,
        flexDirection: 'row',
        // padding: 10,
        marginVertical: 7,
        // borderWidth: 1,
    },

    textBoutonStateless: {
        marginLeft: 5,
    },
    textBoutonStatelee: {
        alignItems: 'center',
        alignContent: 'center',
        // flexDirection: 'row'
    },
    boutonTouchable: {
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 10,
        padding: 2,
        backgroundColor: couleur.vertTransparent,
        width: 110
    },
    logoStateless: {
        borderRadius: 35,
        height: 70,
        width: 70,
        // marginLeft: 100
    },
    nomImageStateless: {
        flexDirection: 'row',
        marginBottom: 10,
        // flexWrap: 'wrap'
    },
    sloganStateless: {
        marginBottom: 10
    },
    descriptionStateless: {
        marginBottom: 10
    },
    besoinStateless: {
        marginBottom: 10
    },
    objectifGeneralStateless: {
        marginBottom: 10
    },
    objectifLongTermeStateless: {
        marginBottom: 10
    },
})

export default design