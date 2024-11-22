import { styles } from "./styles.js";
import Header from "../../components/header/Header.jsx";
import Form from "../../components/form/Form.jsx";
import Button from '../../components/button/Button.jsx'
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function RegisterStepTwo() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header title="Informe seu endereço" />
                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <Form
                            label="Endereço"
                            placeholder="Digite o endereço"
                        />
                    </View>
                    <View style={styles.form}>
                        <Form
                            label="Complemento"
                            placeholder="Ex: Apto 123"
                        />
                    </View>
                    <View style={styles.form}>
                        <Form
                            label="Bairro"
                            placeholder="Digite seu bairro"
                        />
                    </View>
                    <View style={styles.form}>
                        <Form
                            label="Cidade"
                            placeholder="Digite sua cidade"
                        />
                    </View>
                    <View style={styles.form}>
                        <Form
                            label="UF"
                            placeholder="Ex.: SC"
                        />
                    </View>
                    <View style={styles.form}>
                        <Form
                            label="CEP"
                            placeholder="Digite seu CEP"
                        />
                    </View>
                    <View style={styles.form}>
                        <Button name="Criar minha conta" />
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