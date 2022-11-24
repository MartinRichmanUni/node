import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //Dark green button
    darkButton: {
        backgroundColor: '#00cc00',
        color: '#e5eedb',
        flexDirection: 'row',
        padding: '10%',
        borderRadius: 50,
        fontSize: 2,
        fontWeight: 'light',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:200
      },

    //Light green button
    lightButton: {
        backgroundColor: '#e5eedb',
        color: '#00cc00', 
        flexDirection: 'row',
        padding: '10%',
        borderRadius: 50,
        fontSize: 2,
        fontWeight: 'light',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:200
    },

    lightIcon: {
        color: '#e5eedb',
        marginRight: 2,
        alignItems: 'flex-start'
    },

    darkIcon: {
        color: '#00cc00',
        marginRight: 2,
        alignItems: 'flex-start'
    }

});

export { styles } 