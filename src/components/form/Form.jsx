import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Form(props) {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                keyboardType="default" 
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.isPassword}
            />
        </View>
    );
}