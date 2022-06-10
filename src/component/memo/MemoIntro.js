import "./MemoIntro.css";

function MemoIntro(props) {
    return (
        <div className="memoIntro">
            <div>메모를 추가해보세요</div>
            <button onClick={props.onClick}>추가버튼</button>
        </div>
    )
}



export default MemoIntro;
