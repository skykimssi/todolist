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
                <input maxLength={50}  />
                <div className='close close1'></div>
            </div>
            <div className="memoBlockBody">
                <textarea />
            </div>

        </div>
    )

}

export default MemoBlock;