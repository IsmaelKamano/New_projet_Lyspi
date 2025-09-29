import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

/**
 * Composant Radio générique
 * @param {Array} options - Liste des options à afficher (ex: ["Etudiant", "Diplômé"])
 * @param {string|null} defaultValue - Valeur sélectionnée par défaut
 * @param {function} onChange - Fonction appelée quand une option est sélectionnée
 */
const SelectionRadio = ({
  options = [],
  defaultValue = null,
  onChange = () => {}
}) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleSelect = (value) => {
    setSelected(value);
    onChange(value); // on informe le parent de la sélection
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => handleSelect(option)}
        >
          <Text style={styles.label}>{option} </Text>
          <View
            style={[
              styles.radioCircle,
              selected === option && styles.radioSelected,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SelectionRadio;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: {
    backgroundColor: "black",
  },
  label: {
    fontSize: 14,
  },
});


