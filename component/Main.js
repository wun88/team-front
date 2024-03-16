import React from 'react';
// import styles from "./Main.module.css";
import "./Main.css"

function Main(props) {
  return (
    <div>
      <main>
        <div className='MainBox'>
            <h1>테마 부분</h1>
        </div>
      </main>
    </div>
  );
}

export default Main; //다른 JS파일에서 불러올 수 있도록 내보내주기