import { colors, fontSize } from "../../constants/theme";

export const styles = {
    input: {
        width: 300,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.lightGreen
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