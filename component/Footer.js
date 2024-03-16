import React from 'react';
// import styles from "./Footer.module.css";
import "./Footer.css"

function Footer(props) {
  return (
    <div>
      <footer>
        <div className='FooterBox'>
            <h1>푸터</h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer; //다른 JS파일에서 불러올 수 있도록 내보내주기