import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //Dark green button
    darkButton: {
        backgroundColor: '#00cc00',
        color: '#e5eedb',
        width: '20',
        flexDirection: 'row',
        padding: '2',
        marginHorizontal: '8',
        borderRadius: '2',
        fontSize: '2',
        fontWeight: 'light',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        alignItems: 'center'
      },

    //Light green button
    lightButton: {
        backgroundColor: '#e5eedb',
        color: '#00cc00',
        width: '55',  
        flexDirection: 'row',
        padding: '2',
        margin: '2',
        borderRadius: '2',
        fontSize: '2',
        fontWeight: 'light',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        alignItems: 'center'
    },

    lightIcon: {
        color: '#e5eedb',
        marginRight: '2',
        alignItems: 'flex-start'
    },

    darkIcon: {
        color: '#00cc00',
        marginRight: '2',
        alignItems: 'flex-start'
    }

});

export { styles } 