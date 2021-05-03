import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    card: {
        width: '80%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#939393',
        marginTop: 10,
        marginBottom:10,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    cardHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
    },
    cardContentText: {
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 16,
        color: '#939393'
    },
})

export default styles