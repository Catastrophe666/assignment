import { useRef, useState }  from "react";
import ButtonAppBar from './AppBar';
import React from "react";
import {TempTracker} from "../tempTrackerClass/TempTracker"
var temp = new TempTracker(); 

//temperature tracker
export const TempTrack = () => {
    const [show, setShow] = useState<boolean>(false)
    const [clear, setclear] = useState<boolean>(false)
    const [result, setResult] = useState<number[]>([])
    const [max, setMax] = useState<number>()
    const [min, setMin] = useState<number>()
    const [mean, setMean] = useState<number>()
    const [mode, setMode] = useState<number>()
    const newtemp = useRef<HTMLInputElement>(null);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        temp.insert(Number(newtemp.current?.value));   
        setResult(temp.get_temps());
        setMax(temp.get_max());
        setMin(temp.get_min());
        setMean(temp.get_mean());
        setMode(temp.get_mode());
        setShow(true)
    }
   
    return(
        <React.Fragment>
            <ButtonAppBar />
            <div style={{textAlign:"center", backgroundColor:"white", width: "300px" ,  borderRadius: "10px", margin: "auto", marginTop: "100px", padding: "20px"}}>
            <button style={{marginTop:"10px"}} onClick={()=>{window.location.reload()}}>Clear</button>
            <form onSubmit={submit}>
                <div style={{marginTop:"10px"}}>
                    <label htmlFor="first">Insert new temp</label>
                </div>
                <div>
                    <input type="number" id="first" ref={newtemp}></input>
                </div>
                <button style={{marginTop:"10px"}} >Insert</button>
            </form>
            {show ? (
                <div>
                    <div style={{marginTop:"20px"}} >Temperature inserted</div>
            
                    <div style={{marginTop:"10px"}}>
                        {result.join(", ")}
                    </div>
                    <div style={{marginTop:"20px"}} >Max Temperature recorded</div>
                
                    <div style={{marginTop:"10px"}}>
                        {max}
                    </div>
        
                    <div style={{marginTop:"20px"}} >Min Temperature recorded</div>
                
                    <div style={{marginTop:"10px"}}>
                        {min}
                    </div>
        
                    <div style={{marginTop:"20px"}} >Mean Temperature recorded</div>
                
                    <div style={{marginTop:"10px"}}>
                        {mean?.toFixed(2)}
                    </div>
                    <div style={{marginTop:"20px"}} >Mode Temperature recorded</div>
                
                    <div style={{marginTop:"10px"}}>
                        {mode?.toFixed(2)}
                    </div>
                </div>
            ) :''}
            
            
            </div>
        </React.Fragment>
    )
}