import React, { useState } from "react";

import firebase from "firebase/app"
import "firebase/firestore"

import Blackjack from "./Games/Blackjack"

import { Typography, Button } from "@material-ui/core"

export default class Gameroom extends React.Component {

    constructor() {
        super()
        this.state = {
            game: null,
            username: null,
            credits: null,
            uid: null,

            exchangeCredits: 0
        }
        this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {
        firebase.firestore().collection("accounts").where("wallet", "==", this.props.activeAddress)
        .onSnapshot((snapshot) => {
            if (snapshot.size > 0) {
                snapshot.forEach((doc) => {
                    this.setState({
                        username: doc.data().username,
                        credits: doc.data().credits,
                        uid: doc.id
                    })
                })
                
            }
            else {
                firebase.firestore().collection("accounts").add({
                    wallet: this.props.activeAddress,
                    username: "player",
                    credits: 0
                })
                .then((doc) => {
                    firebase.firestore().collection("accounts").doc(doc.id)
                    .onSnapshot((doc) => {
                        this.setState({
                            username: doc.data().username,
                            credits: doc.data().credits,
                            uid: doc.id
                        })
                    }) 
                })
            }
        })
      }

      handleChange(event) {
        this.setState({exchangeCredits: event.target.value});
      }

    render() {
        return (
            <div>
                <Typography variant="h6"> Connected Wallet: {this.props.activeAddress} </Typography>
                <Typography variant="h6"> Profile: {this.state.username} </Typography>
                <Typography variant="h6"> Credits: {this.state.credits} </Typography>
                <Button onClick={() => this.props.sendToBanker(this.state.exchangeCredits)}> Buy Credits </Button>
                <Button onClick={() => this.props.sendFromBanker(this.state.exchangeCredits)}> Sell Credits </Button>
                <input type="number" value={this.state.exchangeCredits} onChange={this.handleChange} />
                
                <br />
        
                <Button onClick={() => this.setState({game: "Blackjack"})}> Blackjack </Button>
        
                {this.state.game === "Blackjack" ? 
                <Blackjack username={this.state.username} />
                :
                null
                }
        
            </div>
          )
    }

  
  }



