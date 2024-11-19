import { Image, Text, View } from "react-native";
import icons from '../../constants/icons.js'
import { styles } from "./styles.js";

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Image source={icons.logo} style={styles.logo} />
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}