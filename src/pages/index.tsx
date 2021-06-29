import React, { useState } from "react";

import firebase from "firebase/app"
import "firebase/firestore"

import Head from "next/head"

import algosdk from 'algosdk';
import MyAlgo from '@randlabs/myalgo-connect';

import Gameroom from "../components/Gameroom"

import { Button } from "@material-ui/core"


export default function Index() {

  const [activeAddress, setActiveAddress] = useState(null)
  
  const myAlgoWallet = new MyAlgo()

  const connectToMyAlgo = async() => {
    try {

      const accounts = await myAlgoWallet.connect();
  
      const addresses = accounts.map(account => account.address);

      setActiveAddress(addresses[0])

      console.log(addresses)
      
    } catch (err) {
      console.error(err);
    }
  }

  const sendToBanker = async(amount) => {
    try {
      const algodClient = new algosdk.Algodv2('Algos', 'https://api.testnet.algoexplorer.io', '');
      const params = await algodClient.getTransactionParams().do();
        
      const txn = {
          ...params,
          type: 'pay',
          from: activeAddress,
          to:  'Z3W4BTN5JQQ76AFQX2B2TGU3NPKGXF7TA7OJ4BYS4BK5FAITCED7AFRZXI',
          amount: amount * 1000000, // 1 algo * amount
          note: new Uint8Array(Buffer.from('...')),
      };
    
      const signedTxn = await myAlgoWallet.signTransaction(txn);
      console.log(signedTxn);
  
      await algodClient.sendRawTransaction(signedTxn.blob).do();

      firebase.firestore().collection("accounts").where("wallet", "==", activeAddress)
      .get()
      .then((query) => {
        console.log(query)
        query.forEach((doc) => {
          firebase.firestore().collection("accounts").doc(doc.id)
          .update({
            credits: firebase.firestore.FieldValue.increment(amount)
          })
        })
      })

    }
    catch(err) {
      console.error(err); 
    }
  }

  const sendFromBanker = async(amount) => {
    try {
      const algodClient = new algosdk.Algodv2('Algos', 'https://api.testnet.algoexplorer.io', '');
      const params = await algodClient.getTransactionParams().do();
        
      const txn = {
          ...params,
          type: 'pay',
          from: 'Z3W4BTN5JQQ76AFQX2B2TGU3NPKGXF7TA7OJ4BYS4BK5FAITCED7AFRZXI',
          to:  activeAddress,
          amount: amount * 1000000, // 1 algo * amount
          note: new Uint8Array(Buffer.from('...')),
      };
      console.log(txn)

      const passphrase = process.env.bankerAddress
      console.log(passphrase)

      const bankerAccount = algosdk.mnemonicToSecretKey(passphrase)
    
      const signedTxn = algosdk.signTransaction(txn, bankerAccount.sk);
      console.log(signedTxn);
  
      await algodClient.sendRawTransaction(signedTxn.blob).do();

      firebase.firestore().collection("accounts").where("wallet", "==", activeAddress)
      .get()
      .then((query) => {
        console.log(query)
        query.forEach((doc) => {
          firebase.firestore().collection("accounts").doc(doc.id)
          .update({
            credits: firebase.firestore.FieldValue.increment(-amount)
          })
        })
      })
      

    }
    catch(err) {
      console.error(err); 
    }
  }

  return (
    <main>
    <Head>
      <title>GameRoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    {activeAddress ? 
    <Gameroom activeAddress={activeAddress} sendToBanker={sendToBanker} sendFromBanker={sendFromBanker}/>
    :
    <Button onClick={() => connectToMyAlgo()}> Connect Wallet </Button>
    }

    </main>
  )
  }



