// criando por Thiago Santos :)


import React, {useState} from "react";
import './Calculator.css';
import background from "../imagens/imagem.jpg";


export default function Calculator() {

    const [num,setNum] = useState(0);
    const [oldnum,setOldNum] = useState(0);
    const [operador,setOperador] = useState();
    
    

    function inputNum(valor){
        var input = valor.target.value;
        if (num == 0){
            setNum(input);
        }else{
            setNum(num+input);
        }
        
        
    }

    function clear(valor){
        setNum(0);
    }

    function porcentagem(){
        setNum(num / 100);
    }

    function operatorHandler(){
        if (num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num))
        }
    }

    function operadores(valor){
        var operator = valor.target.value;
        setOperador(operator);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        if (operador === "/"){
            setNum(oldnum /num);
        }else if (operador === "X"){
            setNum(oldnum * num);

        }else if (operador === "-"){
            setNum(oldnum - num);
        }else if (operador === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }



    return (

        <div>

            <div className="centralizar">
                <div className="wrapper">

                    <div className="interno">

                        <h1 className="result">{num}</h1>

                        <button className="gray" onClick={clear}>AC</button>
                        <button className="gray" onClick={operatorHandler}>+/-</button>
                        <button className="gray" onClick={porcentagem}>%</button>

                        <button className="orange" onClick={operadores} value={"/"}>/</button>

                        <button className="gray" onClick={inputNum} value={7}>7</button>
                        <button className="gray" onClick={inputNum} value={8}>8</button>
                        <button className="gray" onClick={inputNum} value={9}>9</button>

                        <button className="orange" onClick={operadores} value={"X"}>X</button>

                        <button className="gray" onClick={inputNum} value={4}>4</button>
                        <button className="gray" onClick={inputNum} value={5}>5</button>
                        <button className="gray" onClick={inputNum} value={6}>6</button>

                        <button className="orange" onClick={operadores} value={"-"}>-</button>

                        <button className="gray" onClick={inputNum} value={1}>1</button>
                        <button className="gray" onClick={inputNum} value={2}>2</button>
                        <button className="gray" onClick={inputNum} value={3}>3</button>
                        
                        <button className="orange" onClick={operadores} value={"+"}>+</button>
                        
                        <button className="gray" onClick={inputNum} value={0}>0</button>
                        <button className="gray" onClick={inputNum} value={","}>,</button>
                        <button className="grayException">,</button>
                        <button className="orange" onClick={calculate}>=</button>

                    </div>
                            
                </div>
            </div>

        </div>
        
        
          
    );
}