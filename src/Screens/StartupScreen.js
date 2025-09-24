import React from "react";
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, SafeAreaView 
} from "react-native";
import Header from "../components/Header";
const { width } = Dimensions.get("window");

export default function StartupDesign() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Entête fixe */}
      <View style={styles.customHeader}>
        <Header />
      </View>

      {/* Contenu scrollable */}
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
        
        {/* Header de la startup */}
        <View style={styles.header}>
          <Image 
            source={{ uri: "https://via.placeholder.com/80x80.png?text=Logo" }}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>TechWave</Text>
            <Text style={styles.slogan}>Innover avec l’intelligence artificielle</Text>
          </View>
        </View>

        {/* Image principale */}
        <Image 
          source={{ uri: "https://via.placeholder.com/600x300.png?text=Startup+Image" }}
          style={styles.mainImage}
        />

        {/* Carte d’informations */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>À propos</Text>
          <Text style={styles.description}>
            TechWave est une startup spécialisée dans l’intelligence artificielle et les solutions 
            numériques innovantes. Fondée en 2021, elle aide les entreprises à intégrer des systèmes intelligents.
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Domaine :</Text>
            <Text style={styles.value}>Intelligence Artificielle</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Date de création :</Text>
            <Text style={styles.value}>12 Avril 2021</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Site Web :</Text>
            <Text style={[styles.value, styles.link]}>https://techwave.com</Text>
          </View>
        </View>

        {/* Boutons d’action */}
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#3B82F6" }]}>
            <Text style={styles.actionText}>👍 Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#10B981" }]}>
            <Text style={styles.actionText}>💬 Commentaire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.actionText}>🤝 Partenariat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  customHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  createButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  slogan: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  mainImage: {
    width: width,
    height: 200,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "600",
    marginRight: 8,
    color: "#111827",
  },
  value: {
    color: "#374151",
  },
  link: {
    color: "#2563EB",
    textDecorationLine: "underline",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
