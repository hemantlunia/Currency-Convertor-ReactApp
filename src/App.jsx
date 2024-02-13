
import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const curencyInfo = useCurrencyInfo(from)

  const options = Object.keys(curencyInfo);


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * curencyInfo[to])
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{ backgroundImage: `url('https://www.bing.com/th/id/OGC.d00264ef6d1a85fc168fa6bb6bd989c4?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fwFuGEg8jzK8TK%2fgiphy.gif&ehk=OkNrbMI8bJkp1KAdxEkv3AXbSMunFrcT4dJ9mzW%2bHT0%3d')` }}
      >
        <div className='w-full'>
          <div className=' w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-[red]'>
            <form onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox label='From'
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-700 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                />
              </div>
              <button type='submit'
                className='w-full bg-blue-700 text-white px-4 py-3 rounded-lg'
              >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
