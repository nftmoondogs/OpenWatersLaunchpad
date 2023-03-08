import React from 'react';
import './App.css';
import { apple, bill, google, collage } from '../assets';
import styles, { layout } from '../style';

function App() {
  // Function to redirect to google form
  const handleClick = () => {
    window.location.href = "https://forms.gle/nM4ksK1Yg37QoTDK7";
  };

  return (
    <div className="App">

        {/* Logo image */}
        <img src="https://i.ibb.co/j6Jc9nn/logo-text.png" alt="OpenWaters" className="logo"/> 
   
      {/* Button to redirect to google form */}
      <div class="flex mt-4 space-x-3 md:mt-6 content-center justify-center">
       


        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-500">OpenWaters NFT Launchpad</h1>
      <p class="mb-8 leading-relaxed text-white">OpenWaters NFT Launchpad is a white-glove experience for artists and community builders who are interested in launching their NFT on CoreDAO Blockchain.

We work with you to generate your NFTs and create your minting contract and feature your collection on our Launchpad page where users can mint your NFT collection seamlessly so you can focus on what's important - art, utility, and community.

OpenWaters NFT Launchpad page will allows collectors to discover new and upcoming NFT art drops on  CoreDAO Blockchain.</p>
      <div class="flex justify-center">
      <a href="https://forms.gle/nM4ksK1Yg37QoTDK7" target="_blank" rel="noreferrer" class=" w-[240px] items-center py-2 px-4 text-sm font-medium text-center text-white bg-white-700 rounded-lg hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Apply for Launchpad Listing</a>
      </div>
    </div>
  </div>
        </div>
    </div>







    
  );
}

export default App;