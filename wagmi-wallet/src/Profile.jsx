import React, {useState,useEffect} from 'react'
import { useDisconnect, useAccount } from "wagmi";
const Profile = () => {
    const { disconnect } = useDisconnect();
    const { address, isConnected } = useAccount();
    useEffect(() => {
        if (isConnected) {
          getConnect();
        }
      }, [isConnected]);

      const getConnect = async () => {
       try {
        
       } catch (error) {
        
       }
      };
      //For disconnect wallet
      const handleDisconnect = () => {
        disconnect();
        window.location.replace("http://localhost:3000/");
      };
  
  return (
    <div>

        <button onClick={getConnect}>Connect </button>
        <button onClick={handleDisconnect}>Disconnect </button>

    </div>
  )
}

export default Profile

    //States for wallet connectivity.
   
   
   