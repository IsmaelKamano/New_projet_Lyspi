import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableHighlight, Alert } from "react-native";
import startupData from '../../donnees/startup.data'
import design from './Startup.design'


const Startup = ({nom, slogan, description, besoin, objectif_general, objectif_long_terme, image}) => (
    <View style={design.statelessContainer}>
        <ScrollView>
            <View style={design.nomImageStateless}>
                <View style={design.conatainerNomStateless}>
                    <Text style={design.flagsStateless}>Startup </Text>
                    <Text>{nom}</Text>
                </View>
                <TouchableHighlight onPress={()=>{alert('image du titulaire')}} style={design.imageTouchable} underlayColor='white'>
                    <Image style={design.logoStateless} source={image}/>
                </TouchableHighlight>
                
            </View>

            <View style={design.sloganStateless}>
                <View style={design.conatainerSloganStateless}>
                    <Text style={design.flagsStateless}>Slogan </Text>
                    <Text>{slogan}</Text>
                </View>
            </View>

            <View style={design.descriptionStateless}>
                <View style={design.containerDescriptionSloganStateless}>
                    <Text style={design.flagsStateless}>Description </Text>
                    <Text>{description}</Text>
                </View>
            </View>

            <View style={design.besoinStateless}>
                <View style={design.containerBesoinStateless}>
                    <Text style={design.flagsStateless}>Besoins </Text>
                    <Text>{besoin}</Text>
                </View>
            </View>

            <View style={design.objectifGeneralStateless}>
                <View style={design.containerObjectifGeneralStateless}>
                    <Text style={design.flagsStateless}>Objectif General </Text>
                    <Text>{objectif_general}</Text>
                </View>
            </View>

            <View style={design.objectifLongTermeStateless}>
                <View style={design.containerObjectifLongTerStateless}>
                    <Text style={design.flagsStateless}>Objectif à Long Terme </Text>
                    <Text>{objectif_long_terme}</Text>
                </View>
            </View>

            <View style={design.ContainerBoutonActionStateless}>

                <View style={design.grouperBoutonStateless}>
                    <TouchableHighlight onPress={()=> {alert("Vous avez aimé")}} style={design.boutonTouchable} underlayColor='grey'>
                        <View style={design.textBoutonStatelee}>
                            <Image style={design.iconeBoutonStateless} source={image}/>
                            <Text style={design.textBoutonStateless}>Aimer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=> {alert("Vous avez commenté")}} style={design.boutonTouchable} underlayColor='grey'>
                        <View style={design.textBoutonStatelee}>
                            <Image style={design.iconeBoutonStateless} source={image}/>
                            <Text style={design.textBoutonStateless}>Commenter</Text>
                        </View>
                    </TouchableHighlight>
                
                    <TouchableHighlight onPress={()=> {alert("Vous avez partager")}} style={design.boutonTouchable} underlayColor='grey'>
                        <View style={design.textBoutonStatelee}>
                            <Image style={design.iconeBoutonStateless} source={image}/>
                            <Text style={design.textBoutonStateless}>Partager</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={design.grouperBoutonStateless}>
                    <TouchableHighlight onPress={()=> {alert("Vous avez accompagner")}} style={design.boutonTouchable} underlayColor='grey'>
                        <View style={design.textBoutonStatelee}>
                            <Image style={design.iconeBoutonStateless} source={image}/>
                            <Text style={design.textBoutonStateless}>Accompagner</Text>
                        </View>
                    </TouchableHighlight>
                
                    <TouchableHighlight onPress={()=> {alert("Vous avez sponsorisé")}} style={design.boutonTouchable} underlayColor='grey'>
                        <View style={design.textBoutonStatelee}>
                            <Image style={design.iconeBoutonStateless} source={image}/>
                            <Text style={design.textBoutonStateless}>Sponsoriser</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=> {Alert.alert("Vous êtes partenaires maintenant")}} style={design.boutonTouchable} underlayColor='grey'>
                        <View style={design.textBoutonStatelee}>
                            <Image style={design.iconeBoutonStateless} source={image}/>
                            <Text style={design.textBoutonStateless}>Partenaria</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        </ScrollView>
    </View>
    
)


export default Startup