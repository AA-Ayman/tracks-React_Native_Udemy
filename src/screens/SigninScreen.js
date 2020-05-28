import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {

    const {state,signin,clearErrorMessage} = useContext(Context);


    return (
        <View style={styles.container}>
        <NavigationEvents 
             onWillFocus={clearErrorMessage} 
        />
            <AuthForm 
            headerText="Sign in to your Account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Sign in"
            />
            <NavLink 
            text="Don't have an account? Sign up Instead!"
            routeName="Signup"
            />
        </View>

    )
};


SigninScreen.navigationOptions = () => {
    return {
      headerShown: false
    };
  };

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        marginBottom: 250,
        top:100
    }
    
});

export default SigninScreen;