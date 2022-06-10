import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigtion() {
    return (
        // 여기가 전체 네비 영역 잡아주는 곳
        <div className="top_nav_area">
            <header className="top_nav_header">
                <nav className="top_nav">
                    <div className="home_logo">
                        <Link className="link_style" to="/">
                            <img className="logoImage" src="img/logo.jpg" />
                        </Link>
                    </div>
                    <div className="top_menu_area">
                        <span>소개</span>
                        <Link className="link_style" to="/memo"><span>메모</span></Link> 
                        <span>메뉴3</span>
                        <span>메뉴4</span>
                        <span>메뉴5</span>
                    </div>
                    
                    <div>
                        <span>로그인버튼</span>
                    </div>
                </nav>
            </header>

        </div>
    );

}

export default Navigtion;