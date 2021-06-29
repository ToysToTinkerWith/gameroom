import React from "react"

import firebase from "firebase/app"
import "firebase/firestore"

import { Typography, Button } from "@material-ui/core"



export default class Table extends React.Component {
    constructor() {
        super()
        this.state = {
            tableState: ""
        }
        this.sit = this.sit.bind(this);
      }

      componentDidMount() {
          console.log(this.props.tableId)
          firebase.firestore().collection("BlackjackTables").doc(this.props.tableId)
          .onSnapshot((doc) => {
              console.log(doc.data())
            this.setState({
                tableState: doc.data()
            })
          })
      }

      sit(seat) {
        firebase.firestore().collection("BlackjackTables").doc(this.props.tableId)
        .update({
            [seat]: this.props.username
        })
      }

      render() {

          if (this.state.tableState) {
            return (
                <div>
                      {this.state.tableState.seat1 ? 
                      <Typography variant="h6"> {this.state.tableState.seat1} </Typography>
                      :
                      <Button onClick={() => this.sit("seat1")}> Seat 1 </Button>
                      }
                    
                </div>
            )  
          }
          else {
            return (
                <div>
                    
                </div>
              )
          }
          
      }
}