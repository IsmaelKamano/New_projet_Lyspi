import { FlatList, View } from "react-native"
import startupData_2 from "../utils/donnees/startup.data.2"
import ComposantStartup from "./ComposantStartup"
import Header from "./Header"

const FlatsStartup = ({donnee = startupData_2}) => {
return (
    <View style={{marginVertical: 30, marginBottom: 35}}>
        <Header />
        <FlatList
                data={donnee}
                keyExtractor={(item) => item.id.toString()} // toujours une string
                renderItem={({ item }) => (
                <ComposantStartup
                    nomStartup={item.nomStartup}
                    imageProfil={item.imageProfil}
                    imageStartup={item.imageStartup}
                    descriptions={item.descriptions}
                    _fonctionLike={item.fonctionLIke}
                />
            )}
            contentContainerStyle={{ padding: 8 }} // marge autour
            showsVerticalScrollIndicator={false} // enlève la barre de scroll
        />
    </View>
    
)
}

export default FlatsStartup