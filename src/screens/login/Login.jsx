import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/header/Header";
import Form from "../../components/form/Form";
import Button from '../../components/button/Button.jsx'

export default function Login() {
    return (
        <View style={styles.container}>
            <Header title="Acesse sua conta" />
            <View style={styles.formGroup}>
                <View style={styles.form}>
                    <Form
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                    />
                </View>
                <View style={styles.form}>
                    <Form
                        label="Senha"
                        placeholder="Digite sua senha"
                        isPassword={true}
                    />
                </View>
                <View style={styles.form}>
                    <Button name="Acessar"/>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Criar minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}