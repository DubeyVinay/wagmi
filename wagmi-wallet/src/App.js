
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { bscTestnet } from '@wagmi/chains';
import Profile from './Profile';
const chains = [bscTestnet];
const projectId = "f91d9600f4a92e6a160c420ce85a6737";

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,

})
const ethereumClient = new EthereumClient(wagmiClient, chains);
// const web3Mmodal =new Web3Modal({ projectId }, ethereumClient);
function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Profile/>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;