import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useMainContract } from './hooks/useMainContract';
import { fromNano } from '@ton/core';
import { useTonConnect } from './hooks/useTonConnect';

function App() {
  const {
    contract_address,
    counter_value,
    recent_sender,
    owner_address,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawRequest,
  } = useMainContract();

  const { connected } = useTonConnect();

  let temp_cnst = recent_sender;
  temp_cnst = owner_address;
  temp_cnst = temp_cnst;

  return ( 
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>Our contract Address</b>
          <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
          <b>Our contract Balance</b>
          {contract_balance &&
            <div className='Hint'>{fromNano(contract_balance)}</div>
          }
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>

        {connected && (
          <a onClick={() => {
            sendIncrement()
          }}>
            Increment by 5
          </a>
        )}

        <br />

        {connected && (
          <a onClick={() => {
            sendDeposit()
          }}>
            Deposit by 1
          </a>
        )}
        
        <br />

        {connected && (
          <a onClick={() => {
            sendWithdrawRequest()
          }}>
            Withdraw 0.5
          </a>
        )}

      </div>
    </div>
  );
}

export default App
