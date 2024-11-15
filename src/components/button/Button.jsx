import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Button(props) {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.textos}>{props.name}</Text>
        </TouchableOpacity>
    );
}