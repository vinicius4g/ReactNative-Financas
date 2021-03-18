import React, { useState, useContext } from 'react'
import { Platform, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/auth'

import { 
    Background,
    Container,
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
} from './styles'

export default function SignUp(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    
    const { signUp, loadingAuth } = useContext(AuthContext)
   

    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [endereco, setEndereco] = useState('')

    function handleSignUp(){
        signUp(email, password, name)
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                
                <AreaInput>
                    <Input 
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </AreaInput>

                {/* <AreaInput>
                    <Input 
                        placeholder="Telefone"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={telefone}
                        onChangeText={(text) => setTelefone(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Data de nascimento"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={dataNascimento}
                        onChangeText={(text) => setDataNascimento(text)}
                    />
                </AreaInput>


                <AreaInput>
                    <Input 
                        placeholder="Estado"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={estado}
                        onChangeText={(text) => setEstado(text)}
                    />
                </AreaInput>


                <AreaInput>
                    <Input 
                        placeholder="Cidade"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={cidade}
                        onChangeText={(text) => setCidade(text)}
                    />
                </AreaInput>


                <AreaInput>
                    <Input 
                        placeholder="Endereço"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={endereco}
                        onChangeText={(text) => setEndereco(text)}
                    />
                </AreaInput> */}           

                <AreaInput>
                    <Input 
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? 
                        (
                            <ActivityIndicator size={20} color="#FFF" />
                        )
                        :
                        (
                            <SubmitText>Cadastrar</SubmitText>  
                        )
                    }    
                </SubmitButton>              
                
            </Container>
        </Background>
    )
}