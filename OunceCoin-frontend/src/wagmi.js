import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  anvil,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "ERC20-Frontend",
  projectId: "33fa488190a8231c49e09467ae5bc1e7",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    anvil,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
