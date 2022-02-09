import { useRef, useState }  from "react";




export const AnagramCalculator = () => {
    const [result, setResult] = useState<String>("")
    const [showResult, setShowResult] = useState<Boolean>(true) 
    const firstWord = useRef<HTMLInputElement>(null);
    const secondWord = useRef<HTMLInputElement>(null);
    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        const w1 = firstWord.current?.value;
        const w2 = secondWord.current?.value;
        const y = w1?.split("").sort().join("");
        const  z = w2?.split("").sort().join("");
            if(z === y){
               
                setResult("True")
               
            }else{
               
                setResult("False")
                
            }
                
    }
   
    return(
        <div style={{textAlign:"center", marginTop:"20px"}}>
        <form onSubmit={submit}>
            <div style={{marginTop:"10px"}}>
                <label htmlFor="first">Enter First Word</label>
            </div>
            <div>
                <input type="text" id="first" ref={firstWord}></input>
            </div>
            <div style={{marginTop:"10px"}}>
                <label htmlFor="second">Enter Second Word</label>
            </div>
            <div>
                <input type="text" id="second" ref={secondWord}></input>
            </div>
            <button style={{marginTop:"10px"}} >Show result</button>
        </form>
       
        <div style={{marginTop:"10px"}}>{result}</div>
        
        </div>
    )
}