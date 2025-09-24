import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Importer ton vrai StartupScreen depuis le fichier dédié
import StartupScreen from '../screens/StartupScreen';  // <-- ajuste le chemin si besoin

// Écrans simulés
function StageScreen() { return <View style={styles.screen}><Text>Stage Screen</Text></View>; }
function EmploiScreen() { return <View style={styles.screen}><Text>Emploi Screen</Text></View>; }
function FormationScreen() { return <View style={styles.screen}><Text>Formation Screen</Text></View>; }
function SuccessScreen() { return <View style={styles.screen}><Text>Success Screen</Text></View>; }

function OrientationScreen() { return <View style={styles.screen}><Text>Orientation Screen</Text></View>; }
function MentoratScreen() { return <View style={styles.screen}><Text>Mentorat Screen</Text></View>; }
function EvenementScreen() { return <View style={styles.screen}><Text>Événements Screen</Text></View>; }
function DashboardScreen() { return <View style={styles.screen}><Text>Tableau de bord</Text></View>; }

export default function MainScreen() {
  const [activeTab, setActiveTab] = React.useState({ type: 'bottom', name: 'Startup' });

  const renderContent = () => {
    switch (activeTab.name) {
      case 'Startup': return <StartupScreen />;       // Utilise le vrai StartupScreen importé
      case 'Stage': return <StageScreen />;
      case 'Emploi': return <EmploiScreen />;
      case 'Formation': return <FormationScreen />;
      case 'Success': return <SuccessScreen />;
      case 'Orientation': return <OrientationScreen />;
      case 'Mentorat': return <MentoratScreen />;
      case 'Événements': return <EvenementScreen />;
      case 'Tableau': return <DashboardScreen />;
      default: return null;
    }
  };

  const bottomTabs = [
    { name: 'Startup', icon: 'rocket-outline' },
    { name: 'Stage', icon: 'school-outline' },
    { name: 'Emploi', icon: 'briefcase-outline' },
    { name: 'Formation', icon: 'book-outline' },
    { name: 'Success', icon: 'trophy-outline' },
  ];

  const sidebarTabs = [
    { name: 'Orientation', icon: 'compass-outline' },
    { name: 'Mentorat', icon: 'people-outline' },
    { name: 'Événements', icon: 'calendar-outline' },
    { name: 'Tableau', icon: 'analytics-outline' },
  ];

  return (
    <View style={styles.container}>
      {/* Contenu principal */}
      <View style={styles.content}>
        {renderContent()}
      </View>

      {/* Bloc vertical compact (sidebar) */}
      <View style={styles.sidebarCompact}>
        {sidebarTabs.map(tab => {
          const focused = activeTab.type === 'sidebar' && activeTab.name === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              style={[styles.sidebarButtonCompact, focused && styles.sidebarButtonFocused]}
              onPress={() => setActiveTab({ type: 'sidebar', name: tab.name })}
              activeOpacity={0.7}
            >
              <Icon name={tab.icon} size={22} color={focused ? '#2F80ED' : '#999'} />
              <Text style={[styles.sidebarLabel, focused && styles.sidebarLabelFocused]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabs}>
        {bottomTabs.map(tab => {
          const focused = activeTab.type === 'bottom' && activeTab.name === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              style={[styles.bottomTabButton, focused && styles.bottomTabButtonFocused]}
              onPress={() => setActiveTab({ type: 'bottom', name: tab.name })}
              activeOpacity={0.7}
            >
              <Icon name={tab.icon} size={24} color={focused ? '#2F80ED' : 'gray'} />
              <Text style={[styles.bottomTabLabel, focused && { color: '#2F80ED' }]}>{tab.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  bottomTabs: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  bottomTabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  bottomTabButtonFocused: {
    borderTopWidth: 2,
    borderTopColor: '#2F80ED',
  },
  bottomTabLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
    fontWeight: '600',
  },

  sidebarCompact: {
    position: 'absolute',
    right: 10,
    bottom: 100,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 0,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: 'transparent',
  },
  sidebarButtonCompact: {
    alignItems: 'center',
    marginVertical: 6,
    width: 60,
  },
  sidebarButtonFocused: {
    borderRadius: 8,
    paddingVertical: 4,
    width: '100%',
  },
  sidebarLabel: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
    marginTop: 2,
  },
  sidebarLabelFocused: {
    color: '#2F80ED',
    fontWeight: '600',
  },
});
