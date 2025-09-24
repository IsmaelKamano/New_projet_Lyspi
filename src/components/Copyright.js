import { getDefaultOptions } from "date-fns";
import { View, Text } from "react-native";

const Copyriht = ({nomEntreprise = "(Votre entreprise ici)", anneeEnCours = 2025, espaceHaut = 20, espaceBas = 10}) => {
    return (
        <View style = {{alignItems: 'center', marginTop: espaceHaut, marginBottom: espaceBas}}>
            <Text style = {{alignContent: 'center', alignItems: 'center', textAlign: 'justify'}}>
                Copyrigh {(nomEntreprise)}@{anneeEnCours}
            </Text>
        </View>
    )
}

export default Copyriht