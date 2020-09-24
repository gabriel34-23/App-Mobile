import React,{useState} from 'react';
import styled from 'styled-components/native';

const Pagina = styled.SafeAreaView`
  flex:1;
  align-items: center;
  
`;

const Input = styled.TextInput `
  width: 90%;
  height: 50px;
  font-size: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`;

const Calcular = styled.Button `
  margin-top: 10px;  
  `;

const Size = styled.View `
  height:  ${(props)=>props.size};  
  width: 20%;
`;




const AreaResult = styled.View` 
  background-color: ${(props)=>props.cor};
  width:100%;
  margin-top:30px;
  padding:20px;
  justify-content: center;
  align-items:center;
`;


const TituloResultado = styled.Text `
  font-size: 16px;
  margin-bottom: 10px;
`;


const App = () => {
  const [pesoValue, peso] = useState('');
  const [alturaValue, altura] = useState('');
  const [mudarCor, cor] = useState('#BBBBBB');
  const [mudarTexto, texto] = useState('Calculadora IMC');
  const [mudarTextoIMC, textoIMC] = useState('0.0');
 
 
  const calcularIMC = () =>{
     let imc = pesoValue / (alturaValue*alturaValue);
     if(imc<=18.5){
       texto("MAGREZA");
       textoIMC(imc);
       cor("#FAFF18");
 
     }else if(imc>=18.5 && imc<=24.9){
       texto("NORMAL");
       textoIMC(imc);
       cor("#54E013");
     }else if(imc>=25.0 && imc<=29.9){
       texto("SOBREPESO");
       textoIMC(imc);
       cor("#13A2E0");
     }else if(imc>=30.0 && imc<=39.9){
       texto("OBESIDADE");
       textoIMC(imc);
       cor("#FF9900");
     }else if(imc>=40.0){
       texto("OBESIDADE GRAVE");    
       textoIMC(imc);  
       cor("#DB1717");
 
     } 
     peso('');
     altura('');
  };

  return (
    <Pagina> 
      <Size size = "30px"></Size>
      <Input 
        placeholder = "Peso" 
        keyboardType = "numeric"
        value = {pesoValue}
        onChangeText = {(valor)=>peso(valor)}
      ></Input>
      <Size size = "25px"></Size>
      <Input 
        placeholder = "Altura" 
        keyboardType = "numeric"
        value = {alturaValue}
        onChangeText = {(valor)=>altura(valor)}
      ></Input>
      <Size size = "20px"></Size>
      <Calcular title = "Calcula" onPress={calcularIMC} ></Calcular>
      <AreaResult cor= {mudarCor}>
        <TituloResultado size = "30px" color = "#000000">{mudarTexto}</TituloResultado>
        <TituloResultado size = "15px" color = "#000000">IMC: {parseFloat(mudarTextoIMC).toFixed(2)} </TituloResultado>
      </AreaResult>
    </Pagina>
  );
};

export default App;