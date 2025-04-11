"use client";
import React, { useEffect, useState } from "react";
import main from "../../public/assets/main.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { config } from "@/wagmi";
import AlterDemo from "./AlertDemo";
import OunceCoin from "../../OunceCoin.json";
import { formatEther, parseEther } from "viem";
import { motion } from "framer-motion";

const Mint = () => {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const ownerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  const [amount, setAmount] = useState("");
  const account = useAccount(config);

  const { error, isPending, isSuccess, writeContractAsync } =
    useWriteContract(config);

  const { data: balance, refetch } = useReadContract({
    abi: OunceCoin.abi,
    address: contractAddress,
    functionName: "balanceOf",
    args: [ownerAddress],
  });

  useEffect(() => {
    refetch();
    return () => {};
  }, [account.status, isSuccess]);

  const toMint = async () => {
    try {
      if (amount) {
        await writeContractAsync(
          {
            abi: OunceCoin.abi,
            address: contractAddress,
            functionName: "mint",
            args: [parseEther(amount)],
          },
          {
            onSuccess: () => {
              toast("Mint succeed", {
                description: "Congratulations!",
                action: {
                  label: "Got It!",
                  onClick: () => {},
                },
              });
            },
            onError: () => {
              toast("Something went wrong", {
                description: error.message,
                action: {
                  label: "Got It!",
                  onClick: () => {},
                },
              });
            },
          }
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const slideUp = (delay) => {
    return {
      initial: {
        y: 50,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };

  return (
    <div className="container mx-auto md:my-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-3xl font-bold py-5"
          >
            Mint your OunceCoin now!
          </motion.h1>
          <motion.p
            variants={slideUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-lg font-light line-clamp-3 my-10 mx-3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            perferendis, officia cum laborum quo mollitia fugiat, magni
            laboriosam maiores eum aliquid veritatis suscipit expedita saepe
            harum nulla corporis a libero.
          </motion.p>
          {account.status === "connected" ? (
            <div className="flex flex-col w-full items-center">
              <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                animate="animate"
                className="flex w-full max-w-sm items-center space-x-10 mb-10"
              >
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder="Type the amount you want to mint"
                />
                <Button type="submit" onClick={toMint} disabled={isPending}>
                  {isPending ? "confirming" : "Mint"}
                </Button>
              </motion.div>
              <motion.p
                variants={slideUp(0.8)}
                initial="initial"
                animate="animate"
                className="text-lg font-light"
              >
                Your balance is: {balance && formatEther(balance)} ether
              </motion.p>
              {/* {error && <div>error: {error.message}</div>} */}
            </div>
          ) : (
            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              animate="animate"
              className="w-full"
            >
              <AlterDemo></AlterDemo>
            </motion.div>
          )}
        </div>
        <motion.div variants={slideUp(0.4)} initial="initial" animate="animate">
          <Image
            priority={true}
            src={main}
            alt="pic"
            className="w-[488px] h-[302px]"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default Mint;
