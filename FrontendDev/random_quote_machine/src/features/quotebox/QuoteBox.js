import React from "react";
import styles from "./QuoteBox.css"
import { quotes } from "../../quotes";

export class QuoteBox extends React.Component {
    constructor (props) {
        super(props);

        const quote = this.getRandomQuote();
        this.state = {
            quote: quote.quote,
            author: quote.author,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    getRandomQuote() {
        const quoteIndex = Math.floor((Math.random() * quotes.length))
        return quotes[quoteIndex];
    }

    handleClick() {
        const quote = this.getRandomQuote();
        this.setState({
            quote: quote.quote,
            author: quote.author,
        });
        this.props.clickHandler();
    }

    render() {
        
        return (
            <div className="quote-box" style={{color: this.props.color}}>
                <span className="quote">{this.state.quote}</span>
                <span className="author">{this.state.author}</span>
                <button onClick={this.handleClick}>Derp</button>
            </div>
        );
    }
};