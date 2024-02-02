import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [licName, setLicName] = useState([])
  const [licNum, setLicNum] = useState({})
  const [otherObj, setOtherObj] = useState({})
  const [info, setInfo] = useState([])

  console.log(info, 'infoAfterSubmit')

  const handleCheck = (e) => {
    // console.log(e.target.name, 'nm')
    if (e.target.checked) {
      setLicName([...licName, e.target.value])
    } else {
      const newLicName = licName.filter((val) => val !== e.target.value)
      setLicName([...newLicName])
    }
  }

  const getNum = (e) => {
    setLicNum({ ...licNum, [e.target.name]: e.target.value })
  }

  const handleChangeForOther = (e) => {
    setOtherObj({
      ...otherObj,
      [e.target.name]: e.target.value
    })

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(licNum, 'licNum')
    console.log(licName, 'licName')
    console.log(otherObj, 'otherObj')

    const resp = licName.map((name) => {
      console.log(name, 'name')
      const obj = {}
      if (name === 'others') {
        obj.licType = otherObj.others_lic_name
        obj.licNumber = otherObj.others_lic_num
      } else {
        obj.licType = name
        obj.licNumber = licNum[name]
      }
      return obj
    })

    setInfo(resp)
  }



  return (
    <div className="App">

      <h2><u><mark>Dynamic Checkbox</mark></u></h2>

      <br />

      <form onSubmit={(e) => handleSubmit(e)}>

        <input type="checkbox" id="license1" name="license1" value="license1" onChange={(e) => handleCheck(e)} />
        <label htmlFor="license1"> License 1</label>{"     "}
        {licName.includes('license1') && <input type="text" id="license1" name="license1" onChange={(e) => getNum(e)} required />}
        <br /><br />


        <input type="checkbox" id="license2" name="license2" value="license2" onChange={(e) => handleCheck(e)} />
        <label htmlFor="license2"> License 2</label>{"  "}
        {licName.includes('license2') && <input type="text" id="license2" name="license2" onChange={(e) => getNum(e)} required />}
        <br /><br />



        <input type="checkbox" id="license3" name="license3" value="license3" onChange={(e) => handleCheck(e)} />
        <label htmlFor="license3"> License 3</label>{"  "}
        {licName.includes('license3') && <input type="text" id="license3" name="license3" onChange={(e) => getNum(e)} required />}
        <br /><br />


        <input type="checkbox" id="license4" name="license4" value="license4" onChange={(e) => handleCheck(e)} />
        <label htmlFor="license4"> License 4</label>{"  "}
        {licName.includes('license4') && <input type="text" id="license4" name="license4" onChange={(e) => getNum(e)} required />}
        <br /><br />


        <input type="checkbox" id="license5" name="license5" value="license5" onChange={(e) => handleCheck(e)} />
        <label htmlFor="license5"> License 5</label>{"  "}
        {licName.includes('license5') && <input type="text" id="license5" name="license5" onChange={(e) => getNum(e)} required />}
        <br /><br />



        <input type="checkbox" id="others" name="others" value='others' onChange={(e) => handleCheck(e)} />
        <label htmlFor="others"> Others</label>{"  "}
        {licName.includes('others') && <input type="text" id="others_lic_name" name="others_lic_name" onChange={(e) => handleChangeForOther(e)} required />}{"  "}
        {licName.includes('others') && <input type="text" id="others_lic_num" name="others_lic_num" onChange={(e) => handleChangeForOther(e)} required />}
        <br /><br />

        <div>
          <button className="btn btn-info">Submit</button>{" "}
          <button className="btn btn-danger" onClick={() => window.location.reload()}>Cancle</button>
        </div>
      </form>

    </div>
  );
}

export default App;
