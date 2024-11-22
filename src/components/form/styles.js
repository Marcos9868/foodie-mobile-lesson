import { colors, fontSize } from "../../constants/theme";

export const styles = {
    input: {
        display: 'flex',
        width: 300,
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.gray,
        alignItems: 'center'
    },
    label: {
        textAlign: 'start',
        marginLeft: 5,
        color: colors.darkGray,
        fontSize: fontSize.md,
        marginBottom: 4,
        marginTop: 4
    }
};