import { View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/header/Header";

export default function Login() {
    return (
        <View style={styles.container}>
            <Header title="Acesse sua conta" />
        </View>
    );
}