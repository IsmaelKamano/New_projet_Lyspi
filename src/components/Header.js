import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import images from "../assets/index"; // si tu veux utiliser ton image profil locale

const { width } = Dimensions.get("window");

const Header = ({utiliserBoutonCreer = true}) => {
  let afficher = ''

  if(utiliserBoutonCreer)
    afficher = 'visible'
  else
    afficher = 'none'
  return (
    <View style={styles.container}>
      {/* Photo de profil */}
      <TouchableOpacity>
        <Image
          source={images.profilHomme} // ton image locale
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="#888" />
        <TextInput
          placeholder="Rechercher..."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* Icônes à droite */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications-outline" size={22} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="chatbubble-ellipses-outline" size={22} color="#333" />
        </TouchableOpacity>

        {/* Bouton Créer */}
        <TouchableOpacity style={[styles.createButton, {display: afficher}]}>
          <Text style={styles.createText}>Créer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%", // même marge que ton Start.js (padding:12)
    marginHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
    marginHorizontal: 'auto'
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 8,
    height: 36,
  },
  searchInput: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
    color: "#333",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 6,
  },
  iconButton: {
    marginHorizontal: 4,
  },
  createButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 6,
  },
  createText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});
