import { useState, useEffect } from "react";
import MemoBlock from "../component/memo/MemoBlock";
import MemoIntro from '../component/memo/MemoIntro';
import Draggable from "react-draggable";
import "./Memo.css"

function Memo() {
    
    const [memoData, setMemoData] = useState(null);

    //여기서 초기 데이터 세팅
    useEffect(()=>{
        setMemoData((preData) => preData = JSON.parse(localStorage.getItem("memoData")));
        
    },[])

    const dragBox = (data) => {
        console.log(data);
    }

//<MemoBlock memoData={memoData}/>
//memoData? null 
    return (
        <div className="memo">
            {
                memoData 
                ? memoData.map(
                    (memoDataRow, index) =>
                    
                    <Draggable 
                        key={index}
                        handle=".memoBlockHeader"
                        bounds="parent"
                    >
                        <div 
                            className="box"
                            style={{
                                width : memoDataRow.memoWidth,
                                height : memoDataRow.memoHeight,
                            }}
                        >
                            <MemoBlock memoData={memoDataRow} />
                        </div>
                    </Draggable>
                )
                
                : <MemoIntro onClick={addMemoBtn} /> 
            }
            <div className="memoOverlay">
                <div onClick={addMemoBtn}>dasdsadsadsads</div>
            </div>
            
        </div>
    )
    
    

    function addMemoBtn() {
        //신규 메모 정보 세팅
        //추가될 메모 정보 추가
        let memoDataArray = [];
        const addMemoData = {
            "memoIdx": 0,
            "memoWidth": "300px",
            "memoHeight": "300px",
            "memoPositionTop": "50%",
            "memoPositionLeft": "50%",
            "transform": "translate(-50%,-50%)"
        }
        //console.log(memoData);
        if(memoData !== null ){
            console.log(memoData)
            memoDataArray.push(...memoData);
            //memoDataArray.push(localStorage.getItem("memoData"));
        }
        memoDataArray.push(addMemoData);
        setMemoData((preData) => preData = memoDataArray);
        localStorage.setItem("memoData", JSON.stringify(memoDataArray));
        //console.log(JSON.parse(localStorage.getItem("memoData")));
    }

}


export default Memo;