import React from 'react';
// import styles from "./Header.module.css";
import "./Header.css"
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <header>
        <div className='TopBox'>
            <h1 className='MainText'>공유 갤러리</h1>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li> {/* 로그인 페이지로 이동하는 링크 */}
                </ul>
            </nav>
        </div>
      </header>
    </div>
  );
}

export default Header; //다른 JS파일에서 불러올 수 있도록 내보내주기