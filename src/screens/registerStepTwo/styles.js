import { colors, fontSize } from '../../constants/theme.js'

export const styles = {
    container: {
        width: '100%',
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    form: {
        width: 300,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formGroup: {
        width: 300,
        marginTop: 10,
        marginBottom: 15,
        alignItems: 'center'
    },
    footer: {
        width: 300,
        position: 'absolute',
        bottom: 0,
        marginBottom: 5,
        marginTop: 15,
        alignItems: 'center'
    },
    footerText: {
        textAlign: 'center',
        color: colors.darkGray,
        fontSize: fontSize.md
    }
};