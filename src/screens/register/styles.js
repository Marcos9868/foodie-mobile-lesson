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
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formGroup: {
        width: 300,
        marginTop: 25,
        marginBottom: 15,
        alignItems: 'center'
    },
    footer: {
        width: 300,
        position: 'absolute',
        bottom: 0,
        marginBottom: 25,
        alignItems: 'center'
    },
    footerText: {
        textAlign: 'center',
        color: colors.darkGray,
        fontSize: fontSize.md
    }
};