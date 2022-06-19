import "./Home.css";

function Home() {
    return (
        <div className="Home">
            {/* 네비 메뉴 들어감 */}
            <div className="mainTopArea">
                <div className="mainTop_textArea">
                    <h1>개발자입니다</h1>
                    <div>대충 인사말 들어갈 자리!</div>
                    <div>대충 소개 들어갈 자리 입니다.</div>
                </div>
            </div>
            <div className="mainArea2">
                <div className="item">
                    여기에 이미지
                </div>
                <div className="item">
                    여기에는 대충 내 소개 들어감 이름 등등등
                </div>
            </div>
        </div>
        
    );
}
export default Home;