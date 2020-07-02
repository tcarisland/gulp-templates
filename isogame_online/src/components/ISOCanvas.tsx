import React from 'react';

class ISOCanvas extends React.Component {
    render() {
        return(
            <div> ISO Canvas
                <br></br>
                <canvas 
                    width={500}
                    height={500}
                    style={Object.assign({backgroundColor: "white"}, {display: "block"})}>                
                </canvas>
            </div>
        );
    }
};

export default ISOCanvas;