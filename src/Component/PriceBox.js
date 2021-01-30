import React from 'react'
import './PriceBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '/Users/quan0402/Desktop/UI Practicing/my-app/src/App.css'

class PriceBox extends React.PureComponent {
    constructor({price}){
        super(price)
        this.state = {
            isChoosed : false,
            price : price
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState(prevState => 
            {
                return {
                    isChoosed : !prevState.isChoosed
                }
                
            }
        )

        
    }

    render(){

        return (
            <div className={this.state.isChoosed ? "price-box-isChoosed" : "price-box"} >
                <h3 className="price-box--title">{this.state.price.title}</h3>
                <hr/>
                <div className="price-box--content">
                    <div className="price-box--price">
                        <h1 className="price">{this.state.price.price}</h1>
                        
                        <h3 className={"unit" + (this.state.isChoosed ? " choosed" : "")}> / {this.state.price.unit}</h3>
                    </div>
                    <p>{this.state.price.description}</p>

                    <div className="price-box--package">

                        {this.state.price.package.map(pack => {
                            return (
                                <div className="price-box--package--pack">
                                    <FontAwesomeIcon icon={faCheck} className="FontAwesomeIcon" style={pack.available ? ( this.state.isChoosed ? {color: '#face01'}:{color: '#4ca7a8'})  : {color: ' #cdcfd1'}} />
                                    <p style={pack.available ? ( this.state.isChoosed ? {color: 'white'} : {color: 'black'}): {color: ' #cdcfd1'}}>{pack.content}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>

                <button className={"price-button" + (this.state.isChoosed ? " price-button__choosed": "")} onClick={this.handleChange}>
                    <h1>Choose plan</h1>
                </button>

            </div>
        )
    }
    
}

export default PriceBox