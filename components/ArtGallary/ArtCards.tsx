import React, { useEffect, useState } from "react";
import { locationstype } from "./GalleryCards";
import Image from "next/image";
import Carousel from "./Carousel";
import { useAccount } from "wagmi";
import Web3 from "web3";




const companyWalletAddress = "0x9dEAb59c4Ba74d49458ea74Ff615Ff3b43393203";

interface Props {
  type: locationstype;
}

interface CarouselItemData {
  id: number;
  text: string;
}

interface CarouselItemProps {
  title: string;
  description: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-1 mr-6 ml-6 px-5 py-4 bg-[#100a18]  rounded-2xl">
      <div className="h-[157px] w-[406px] bg-gray-400 my-4 rounded-2xl">
        <div className="mt-2 mx-3">
          <div className="bg-purple-500 py-2 px-2 rounded-2xl w-32 ">
            <h3 className="text-black font-bold text-xs">3.5k Donations</h3>
          </div>
        </div>
      </div>
      <h3 className="text-white font-bold mt-2">{title}</h3>
      <p className="text-gray-300 text-sm py-4">{description}</p>

      <div>
        <div className="flex gap-2">
          <div>
            <Image alt={"sol"} height={20} width={20} src={"/solana.svg"} />
          </div>
          <div>
            <p className="text-purple-600 font-medium text-sm ">
              $20000(0.3ETH)
            </p>
          </div>
        </div>
      </div>

      <div className={`mt-2  transition-opacity duration-[1500ms]`}>
        <button
          // onClick={() => setModalOpen(true)}
          className="text-white text-sm bg-[#9747FF] px-8 py-3  rounded-3xl"
        >
          Donate NFT Here
        </button>
      </div>
    </div>
  );
};

// Define the modal component with TypeScript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userBalance: string;
  walletAddress: string | undefined;
  onDonate: (amount: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  userBalance,
  walletAddress,
  onDonate,
}) => {
  const [donationAmount, setDonationAmount] = useState<string>("");

  if (!isOpen) return null;

  // const handleDonationSubmit = () => {
  //   // Handle the donation logic here
  //   console.log("Donation submitted:", donationAmount);
  //   onClose();
  // };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-PrimaryColor rounded-lg p-5 shadow-lg">
        <h2 className="text-lg text-white font-bold">Make a Donation</h2>
        {walletAddress ? (
          <div>
            <p className="text-white">Your Balance: {userBalance} ETH</p>
            <p className="text-white"> 
              Your Address: {walletAddress.slice(0, 6)}...
              {walletAddress.slice(-4)}
            </p>
            <input
              type="number"
              placeholder="Enter donation amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="border rounded p-2 w-full mt-2"
            />
            <button
              onClick={() => {
                onDonate(donationAmount); // Call the onDonate function with the donation amount
                onClose(); // Close the modal after donation
              }}
              className="mt-4 text-white bg-[#9747FF] px-4 py-2 rounded"
            >
              Send Donation
            </button>
          </div>
        ) : (
          <div>
            <div>
              <p className="text-white">Connecting Metamask</p>
            </div>

            <div className='flex flex-col gap-3'>
                <div className="grid place-content-center place-items-center">
                  <Image
                    alt="#"
                    src={'/MetaMask.svg'}
                    height={90}
                    width={90}
                  />
                </div>

                <div>
                  <h3 className="text-white tet-xs text-center">Solflare Wallet</h3>
                </div>
                <div>
                  <h3 className="text-white tet-xs text-center">Approve Connection </h3>
                </div>

                <div>
                  <h3 className="text-white tet-xs text-center">Please approve connection in your wallet and authorize access to continue </h3>
                </div>
            </div>
          </div>
        )}
        <button onClick={onClose} className="mt-4 text-gray-600">
          Close
        </button>
      </div>
    </div>
  );
};

const ArtCards = ({ type }: Props) => {
  const { isConnected, address } = useAccount(); // Get user's connection status and address
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [userBalance, setUserBalance] = useState<string>("0.0"); // Default balance
  const web3 = new Web3(window.ethereum); // Initialize web3 with the injected provider

  useEffect(() => {
    const fetchBalance = async () => {
      if (isConnected && address) {
        const balance = await web3.eth.getBalance(address);
        setUserBalance(web3.utils.fromWei(balance, "ether")); // Convert balance from Wei to ETH
      }
    };

    fetchBalance();
  }, [isConnected, address, web3]);

  const carouselItemsData: CarouselItemData[] = [
    { id: 1, text: "Innercity Mission" },
    { id: 2, text: "Innercity Mission" },
    { id: 3, text: "Innercity Mission" },
    { id: 4, text: "Innercity Mission" },
    { id: 5, text: "Innercity Mission" },
  ];

  const sendPayment = async (amount: string) => {
    if (!address) return;

    const paymentAmount = web3.utils.toWei(amount, "ether"); // Convert donation amount to Wei

    const transaction = {
      from: address,
      to: companyWalletAddress,
      value: paymentAmount,
      gas: 21000, // Standard gas limit for ETH transfer
    };

    try {
      const txHash = await web3.eth.sendTransaction(transaction);
      console.log("Transaction sent! Hash:", txHash.transactionHash);
      alert("Transaction successful! Hash: " + txHash.transactionHash);
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: ");
    }
  };
  return (
    <div>
      <div className="bg-[#100a18] mt-5 rounded-2xl">
        <div className="flex justify-center gap-7 mx-4 ">
          <div className="h-[357px] w-[606px] bg-gray-400 my-4 rounded-2xl">
            <div className="mt-2 mx-3">
              <div className="bg-purple-500 py-2 px-2 rounded-2xl w-32 ">
                <h3 className="text-black font-bold text-xs">3.5k Donations</h3>
              </div>
            </div>
          </div>

          <div className="flex w-[602px] flex-col gap-5 my-4">
            <div>
              <h3 className="text-white text-sm font-bold">
                Innercity Missions
              </h3>
            </div>

            <div>
              <h3 className="text-white text-xs font-normal opacity-70 leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                enim voluptate magni, deserunt animi nesciunt rem illo possimus
                quas ipsum, cum culpa placeat. Quas ratione, libero adipisci
                dolorum rerum consequatur, modi hic vero iusto velit obcaecati
                earum ducimus? Repellat numquam minus quidem quas officiis,
                quisquam veritatis quam deleniti impedit pariatur ullam beatae
                aut est quis quasi aperiam ducimus, magnam quod sint eum autem
                placeat voluptate quae. Alias in expedita assumenda earum
                suscipit. Quidem voluptas similique iste quo, autem excepturi
                eius quis provident vel. Nemo voluptates magni officiis, quasi
                quisquam consequuntur, alias accusantium tempora, ullam
                excepturi itaque quae id ipsa aliquid?
              </h3>
            </div>

            <div>
              <h3 className="text-white text-xs font-normal opacity-20 leading-5">
                {type}
              </h3>
            </div>

            <div>
              <div className="flex gap-2">
                <div>
                  <Image
                    alt={"sol"}
                    height={20}
                    width={20}
                    src={"/solana.svg"}
                  />
                </div>
                <div>
                  <p className="text-purple-600 font-medium text-sm ">
                    $20000(0.3ETH)
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-2  transition-opacity duration-[1500ms]`}>
              <button
                onClick={() => setModalOpen(true)}
                className="text-white text-sm bg-[#9747FF] px-8 py-3  rounded-3xl"
              >
                Donate NFT Here
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-scroll scrollbar-hide mt-8">
        <div className="flex w-[200%] flex-col ">
          <Carousel items={carouselItemsData} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        userBalance={userBalance}
        walletAddress={address}
        onDonate={sendPayment}
      />
    </div>
  );
};

export default ArtCards;
