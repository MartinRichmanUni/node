import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //Dark green button
    darkButton: {
        backgroundColor: '#00cc00',
        color: '#e5eedb',
        width: '20vh',
        flexDirection: 'row',
        padding: '2vh',
        marginHorizontal: '8vh',
        borderRadius: '2vh',
        fontSize: '2vh',
        fontWeight: 'light',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        alignItems: 'center'
      },

    //Light green button
    lightButton: {
        backgroundColor: '#e5eedb',
        color: '#00cc00',
        width: '55vh',  
        flexDirection: 'row',
        padding: '2vh',
        margin: '2vh',
        borderRadius: '2vh',
        fontSize: '2vh',
        fontWeight: 'light',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        alignItems: 'center'
    },

    lightIcon: {
        color: '#e5eedb',
        marginRight: '2vh',
        alignItems: 'flex-start'
    },

    darkIcon: {
        color: '#00cc00',
        marginRight: '2vh',
        alignItems: 'flex-start'
    }

});

export { styles } 