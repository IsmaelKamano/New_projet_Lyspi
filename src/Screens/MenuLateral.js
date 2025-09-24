import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const width = Dimensions.get('window').width;

const MenuLateral= ({ navigation }) => {
  const sections = [
    { label: 'Profil', icon: 'account' },
    { label: 'Orientation', icon: 'compass' },
    { label: 'Mentorat', icon: 'account-group' },
    { label: 'Événements', icon: 'calendar' },
    { label: 'Notification', icon: 'bell' },
    { label: 'Apropos', icon: 'star' },
    { label: 'Nous contacter', icon: 'star' },
    // { label: 'Vos commentaires', icon: 'star' },
  ];

  return (
    <SafeAreaView style={styles.containerRow}>
      <View style={styles.content}>
        <Text style={styles.text}>Choisis un onglet à droite</Text>
      </View>
      <View style={styles.rightMenu}>
        {sections.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.menuButton}
            onPress={() => navigation.navigate(item.label)}
          >
            <MaterialCommunityIcons name={item.icon} size={24} color="#333" />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default MenuLateral


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  rightMenu: {
    width: width * 0.50,
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 20,
    
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});
