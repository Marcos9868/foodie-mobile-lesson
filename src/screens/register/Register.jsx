import { styles } from "./styles";
import Header from "../../components/header/Header";
import Form from "../../components/form/Form";
import Button from '../../components/button/Button.jsx'
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Register() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header title="Criar sua conta" />
                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <Form
                            label="Nome"
                            placeholder="Digite seu nome"
                        />
                    </View>
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
                        <Form
                            label="Confirme Senha"
                            placeholder="Confirme sua senha"
                            isPassword={true}
                        />
                    </View>
                    <View style={styles.form}>
                        <Button name="Próximo Passo" />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Acessar minha conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}