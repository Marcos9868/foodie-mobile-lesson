import { colors, fontSize } from '../../constants/theme.js'

export const styles = {
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: 300,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formGroup: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center'
    },
    footer: {
        width: 300,
        position: 'absolute',
        bottom: 0,
        marginBottom: 40,
        alignItems: 'center'
    },
    footerText: {
        textAlign: 'center',
        color: colors.darkGray,
        fontSize: fontSize.md
    }
};