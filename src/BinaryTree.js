import React, { Component } from 'react';
import * as d3 from 'd3';

class BinaryTree extends Component {
    
    constructor()  {
        super();

        this.state = {
            root: undefined,
            disabled: true
        };

        this.insertValue = this.insertValue.bind(this);
        this.cambio = this.cambio.bind(this);
    }

    componentDidMount() {
        this.setup();
    }

    cambio(evt) {
        if(evt) {
            let v = evt.target.value;
            if(v.length > 0) {
                this.setState({ disabled: false });
            }
            else {
                this.setState({ disabled: true });
            }
        }
        else {
            this.setState({ disabled: true });
        }
    }

    setup() {
        const canvas = d3.select(this.refs.canvas)
        
        const svg = canvas.append("svg");
        svg.attr("width", "100vw");
        svg.attr("height", "80vh");


    }



    insertValue(evt) {
        evt.preventDefault();
        let val = evt.target.nuevo.value;
        evt.target.nuevo.value = null;
        this.cambio();
        console.log(val);


    }

    render() { 
        return ( 
            <div>
                <div ref="canvas" id="canvas"></div>
                <div className="card mx-auto my-3">
                    <div className="card-body">
                        <form onSubmit={this.insertValue}>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <label htmlFor="nuevo" className="mb-0 mr-3">Ingrese un nuevo valor al árbol</label>
                                <input type="number" id="nuevo" name="nuevo" className="form-control" onChange={this.cambio}/>
                                <input type="submit" className="btn btn-success ml-2" value="Ingresar" disabled={this.state.disabled}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BinaryTree;