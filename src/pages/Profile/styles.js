import styled from 'styled-components/native';


export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    background-color: #131313;
`;

export const Nome = styled.Text` 
    text-align: center;
    font-size: 28px;
    margin-top: 25px;
    margin-bottom: 25px;
    color: #fff;
`;
export const NewLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const NewText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
   justify-content: center;
   align-items: center;
   background-color: #c62c36;
   width: 90%;
   height: 45px;
   border-radius: 10px;
`;

export const LogoutText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;

