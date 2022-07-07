import React from 'react'
import Pref from './Pref';

const Main = (props) => {
  return (
    <main className='container'>
        <h2>都道府県</h2>

        {/* 都道府県別チェックボックス */}
        <div className="pref-grid">
            {console.log(props)}
            {/* {props.pref.map((value,index) =>
                <Pref
                    prefName={value.prefName}
                    prefId={index}
                    key={index.toString()}
                    btnState={this.setState({btnState: false})}
                    onClick={this.changeButtonState}
                />
            )} */}
        </div>

        <h2>人口推移グラフ</h2>
        <div id="container"></div>
    </main>
  )
}

export default Main