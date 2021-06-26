import React, { useState } from "react";

import Blackjack from "./Games/Blackjack"

import { Typography, Button } from "@material-ui/core"

export default function Gameroom(props) {

    const [game, setGame] = useState(null)

  return (
    <div>
        <Typography variant="h6"> Connected Wallet: {props.activeAddress} </Typography>
        <Button onClick={() => props.sendToBanker()}> Send to Bank </Button>
        <Button onClick={() => props.sendFromBanker()}> Send From Bank </Button>
        <br />

        <Button onClick={() => setGame("Blackjack")}> Blackjack </Button>

        {game === "Blackjack" ? 
        <Blackjack />
        :
        null
        }

    </div>
  )
  }



