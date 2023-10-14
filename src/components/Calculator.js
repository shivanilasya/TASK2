// src/Calculator.js
import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '0',
            equation: '',
        };
    }

    handleButtonClick = (value) => {
        if (value === '.' && this.state.display.includes('.')) {
            return; // Prevent adding multiple decimal points
        }

        if (this.state.display === '0' || this.state.display === 'Error') {
            this.setState({ display: value });
        } else {
            this.setState((prevState) => ({
                display: prevState.display + value,
            }));
        }
    };

    handleClear = () => {
        this.setState({ display: '0', equation: '' });
    };

    handleEvaluate = () => {
        try {
            const result = eval(this.state.display);
            this.setState({ display: result, equation: result });
        } catch (error) {
            this.setState({ display: 'Error' });
        }
    };

    handleBackspace = () => {
        const currentDisplay = this.state.display;
        if (currentDisplay.length > 1) {
            const newDisplay = currentDisplay.slice(0, -1);
            this.setState({ display: newDisplay });
        } else {
            this.setState({ display: '0' });
        }
    };

    render() {
        return (
            <div className="calculator card position-absolute top-50 start-50 translate-middle " style={{ width: "18rem", backgroundColor: "#040c2c",borderRadius:"5%" }}>
                <br></br>
                <br></br>
                    
                <div className="display" style={{ width: "18rem",height:"10rem" ,backgroundColor: "#172d67",borderColor:"#172d67",color:"white" }}>{this.state.display}</div>
                <center>
                <div >
                    <div className='row g-2'>
                        <div className="buttons col-8 ms-3">
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('7')}><h3>7</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('8')}><h3>8</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('9')}><h3>9</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('4')}><h3>4</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('5')}><h3>5</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('6')}><h3>6</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('1')}><h3>1</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('2')}><h3>2</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('3')}><h3>3</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={this.handleClear}><h3>C</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('0')}><h3>0</h3></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('.')}><h3>.</h3></button>

                        </div>
                        <div className='col-2 buttonss' style={{ backgroundColor: "#040c2c" }}>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={this.handleBackspace}><h5>B</h5></button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('/')}>/</button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('*')}>x</button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('-')}>-</button>
                            <button type="button" style={{ color: "white" }} class="btn" onClick={() => this.handleButtonClick('+')}>+</button>
                            <button type="button" style={{ color: "white" }} class="btn " onClick={this.handleEvaluate}><h4>=</h4></button>

                        </div>

                    </div>
                </div>
                <br></br>
                </center>
                
            </div>
        );
    }
}

export default Calculator;