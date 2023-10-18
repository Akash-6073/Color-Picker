import React from 'react'
import '../style/style.css'
export default function CP(props) {
    
  return (
    <>
    <h1 style={{textAlign:"center"}}>Task - III</h1>
    <div className='mw1'>
        <h1>Color Picker</h1>
        <div className="container mw2">
            <div id="boxes">
                <div className="box">
                    <div className="boxnum" onClick={props.select}     style={{backgroundColor:"red"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"rgba(0, 164, 10, 0.705)"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"blue"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"yellow"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"violet"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"cyan"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"orange"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"purple"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"pink"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"green"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"rgb(255, 132, 0)"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"rgb(23, 198, 198)"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"rgb(234, 159, 10)"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"brown"}}>
                        
                    </div>
                </div>
                <div className="box">
                    <div className="boxnum" onClick={props.select}   style={{backgroundColor:"gold"}}>
                        
                    </div>
                </div>
              
            </div>
            <div className='cp'>
                <h3 id='h3'>Double Click !! on the button to display the list of colors</h3>
               <button onClick={props.onclick} id='btn'>  Pick a Color</button>
            </div>

        </div>
    </div>
    <div className="foot">
        Copyright &copy; All Rights Reserved - Akash 21BCE5812
    </div>
    </>
  )
}
