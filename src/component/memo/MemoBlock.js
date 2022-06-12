import './MemoBlock.css'


function MemoBlock(props) {
    const memoBlockBoxStyle = {
        // "top": props.memoData.memoPositionTop,
        // "left": props.memoData.memoPositionLeft,
        "width": props.memoData.memoWidth,
        "height": props.memoData.memoHeight,
        // "transform": props.memoData.transform,
    }
    console.log(props.memoData);
    return (
        <div className="memoBlockBox" >
            <div className="memoBlockHeader">
                
                <button>닫기</button>
            </div>
            <div className="memoBlockBody">
                <textarea></textarea>
            </div>

        </div>
    )

}

export default MemoBlock;