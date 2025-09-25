import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import LogoLispy from "../components/logoLispy";
import images from "../assets/index";
import Header from "../components/Header";
import couleur from "../utils/couleurs/couleurs";
const { width } = Dimensions.get("window");

const ComposantStartup = ({
    imageStartup = images.ginhoSong,
    imageProfil = images.profilHomme,
    nomStartup = "Nom Startup",
    tempsEcouler = "Il y a 2 h",
    _fonctionLike = () => {alert('Vous avez Liké')},
    _fonctionComment = () => {alert('Vous avez Commenté')},
    _fonctionPartage = () => {alert('Vous avez Partagé')},
    descriptions = "Voici une petite description comme dans une publication Facebook. 🚀"
}) => {
  return (
    <SafeAreaView style={[styles.container, {padding: 15}]}>
      {/* En-tête de la publication */}
      <View style={styles.header}>
        <Image style={{ width: 40, height: 40, borderRadius: 40 }} source={imageProfil} />
        
        <View style={styles.headerText}>
          <Text style={styles.nom}>{nomStartup}</Text>
          <Text style={styles.date}>{tempsEcouler}</Text>
        </View>
      </View>

      {/* Texte de la publication */}
      <View style={styles.postText}>
        <Text style={styles.description}>
          {descriptions}
        </Text>
      </View>

      {/* Image principale */}
      <Image
        source={imageStartup}
        style={styles.imagePost}
        resizeMode="cover"
      />

      {/* Boutons d'interaction */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={_fonctionLike}>
          <Text style={styles.actionText}>👍 Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={_fonctionComment}>
          <Text style={styles.actionText}>💬 Commentaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={_fonctionPartage}>
          <Text style={styles.actionText}>🤝 Partager</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ComposantStartup;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    elevation: 3,
    margin: 10,
    shadowOffset: 30,
    shadowColor: 'black',
    borderRadius: 10,
    outlineColor: "#0001",
    outlineWidth: 3.5
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  headerText: {
    marginLeft: 10,
  },
  nom: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  postText: {
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
  imagePost: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
  },
});
