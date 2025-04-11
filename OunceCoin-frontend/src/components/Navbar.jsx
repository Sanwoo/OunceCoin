"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

const Navbar = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="flex flex-row items-center justify-between py-7 px-15"
    >
      <h1 className="text-3xl font-bold">OunceCoin</h1>
      <ConnectButton showBalance={false}></ConnectButton>
    </motion.div>
  );
};

export default Navbar;
