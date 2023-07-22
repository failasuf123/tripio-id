import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function popup() {
    return(
        <div className="text-cyan-400">
            <h4>NextJs Popup - GeeksforGeeks</h4>
            <Popup trigger={<button> Click to open popup </button>} 
                position="right center">
                <div className="text-cyan-300">GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
        </div>
    )
  
}

export default popup
