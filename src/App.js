import './App.css';
import { useState , useEffect } from 'react'

function App() {
  const[ num , setNum ] = useState()
  const[ min , setMin ] = useState('-')
  const[ max , setMax ] = useState('-')
  const[ ans , setAns ] = useState('')


  const handleNumber = (e) =>{
    if(num>0){
      if(ans.length<2){
        setAns(ans+e.target.dataset.number)
      }else{
        setAns(ans)
      }
    }else{
      setAns('')   
    }
  }
  const handleStart = () =>{
    setNum(Math.floor(Math.random() * (101)) + 0)
    setMin(0)
    setMax(100)
    setAns('')
  }
  const handleClear = () =>{
    setAns('')
  }
  const handleEnter = () =>{
    if(ans>num){
      if(max>ans){
        setMax(ans)
      }else{
        setMax(max)
        setAns('')
      }
    }else if (ans<num){
      if(ans>min){
        setMin(ans)
        }else{
          setMin(min)
          setAns('')
        }
    }else{
      setNum()
      setMin('-')
      setMax('-')
      setAns('')
      alert('過關')
    }
    setAns('')
  }
  
  const handleKeyDown = (e) => {
    let {key}=e
    if(/\d/.test(key)){
      if(num>0){
        if(ans.length<2){
          setAns(ans+key)
        }else{
          setAns(ans)
        }
      }else{
        setAns('')
      }
    }else{
      setAns('')
    }
    if(key ==="Enter"){
      handleEnter()
    }
  }

  console.log(num)

  return (
    <div className="App">
      <div className="wrapper" onKeyDown={handleKeyDown} tabIndex={-1}>
        <div className="Ans">終極密碼：{min}-{max}</div>
        <div className="text">請輸入答案：</div>
          <input className="input_number" maxlength="2" value={ans} onChange={(e)=>setAns(e.target.value)}></input>
        <div className="input">
          <button className="number_btn" onClick={handleNumber} data-number="1">1</button>
          <button className="number_btn" onClick={handleNumber} data-number="2">2</button>
          <button className="number_btn" onClick={handleNumber} data-number="3">3</button>
          <button className="number_btn" onClick={handleNumber} data-number="4">4</button>
          <button className="number_btn" onClick={handleNumber} data-number="5">5</button>
          <button className="number_btn" onClick={handleNumber} data-number="6">6</button>
          <button className="number_btn" onClick={handleNumber} data-number="7">7</button>
          <button className="number_btn" onClick={handleNumber} data-number="8">8</button>
          <button className="number_btn" onClick={handleNumber} data-number="9">9</button>
          <button className="number_btn" onClick={handleNumber} data-number="0">0</button>
          <div className="text_wrapper">
            <button className="start_btn text" onClick={handleStart}>開始</button>
            <button className="clear_btn text" onClick={handleClear}>清除</button>
            <button className="enter_btn text" onClick={handleEnter}>輸入</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
