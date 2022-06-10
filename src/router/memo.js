import { useState, useEffect } from "react";
import MemoIntro from '../component/memo/MemoIntro';



function Memo() {
    const [memoCnt, setMemoCnt] = useState(0);
    const [memoData, setMemoData] = useState(null);

    useEffect(()=>{
        console.log("첫실행~")
    },[])

    return (
        <div className="Memo">
            {memoCnt === 0?<MemoIntro onClick={addMemoBtn} />:""}
            
            
                
            
            
        </div>
    )

    
    function addMemoBtn() {
        //신규 메모 정보 세팅
        //추가될 메모 정보 추가
        const memoIdx = 0;
        localStorage.getItem("memoData");
        localStorage.setItem("memoData",memoData);
        
        setMemoCnt((precnt)=>precnt+1);
        
    }

}


export default Memo;