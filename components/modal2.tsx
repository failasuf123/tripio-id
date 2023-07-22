'use client'
import React from 'react'
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";


function modal2() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

  return (
    <Button  className="bg-opacity-50 bg-black p-2 rounded-lg mt-10 text-cyan-100 border-2 hover:bg-opacity-20 active:bg-opacity-100 hover:px-3">
        Get Started
    </Button>
  )
}

export default modal2
