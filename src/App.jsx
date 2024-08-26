import { TextField, Stack, Button } from '@mui/material';
import './App.css'
import { useState } from 'react';

function App() {

  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)

  const [year, setYear] = useState(0)
  const [interest, setInterset] = useState(0)
  const [isPrincipleInvalid, setPrincipleInvalid] = useState(false)
  const [isRateInvalid, setisRateInvalid] = useState(false)
  const [isYearInavalid, setIsYearInavalid] = useState(false)

  //input validation function
  const validateInput = (inputTag) => {
    //object destructuring,const {key1,key2...}=object-name
    const { name, value } = inputTag
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));

    if (name == "principle") {
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setPrincipleInvalid(false) : setPrincipleInvalid(true)
    } else if (name == "rate") {
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setisRateInvalid(false) : setisRateInvalid(true)
    } else if (name == "year") {
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearInavalid(false) : setIsYearInavalid(true)
    }


  }

  const handleCalculate = (e) => {
    e.preventDefault()//to prevent unneccesary refreshing
    console.log("inside hhandleCalculate function");
    if (principle && rate && year) {
      setInterset(principle * rate * year / 100)
    } else {
      alert("plaese fill the form completly")
    }
  }
  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterset(0)
    setPrincipleInvalid(false)
    setisRateInvalid(false)
    setIsYearInavalid(false)

  }
  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center  bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h1>simple interest calculator </h1>
        <p>calculate your simple interset easily</p>
        <div style={{ backgroundColor: 'greenyellow' }} className='d-flex flex-column text-light justify-content-center align-items-center   shadow p-3 rounded'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5">
          <div className="mb-3">
            <TextField value={principle || ""} onChange={e => validateInput(e.target)} name='principle' id="outlined-basic" className='w-100' label="Principle amount" variant="outlined" />
          </div>
          {
            isPrincipleInvalid &&
            <div className="mb-3 text-danger fw-bolder">invalid principle amount</div>
          }
          <div className="mb-3">

            <TextField value={rate || ""} onChange={e => validateInput(e.target)} name='rate' id="outlined-basic1" className='w-100' label="Rate of interest (p.a)%" variant="outlined" />
          </div>
          {
            isRateInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Rate</div>
          }
          <div className="mb-3">
            <TextField value={year||""} onChange={e => validateInput(e.target)} name='year' id="outlined-basic2" className='w-100' label="time period" variant="outlined" />
          </div>
          {
            isYearInavalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid year</div>
          }
          <Stack direction="row" spacing={2}>
            <Button  disabled={isPrincipleInvalid || isRateInvalid || isYearInavalid} type='submit' onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">Outlined</Button></Stack>
        </form>
      </div>

    </div>
  )
}

export default App
