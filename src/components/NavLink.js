import React from 'react';
import {Text,TouchableOpacity,StyleSheet,View} from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text,routeName}) =>{
    return (
        
        <TouchableOpacity 
        style={styles.buttonContainers}
        onPress={ ()=> navigation.navigate({routeName})}
        >
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    link: {

        color: 'blue',
        
    },
    buttonContainers:
  {
    
  
  }
});

export default withNavigation(NavLink);