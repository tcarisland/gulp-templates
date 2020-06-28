import React from 'react';
import ArrowKeyProps from '../interfaces/ArrowKeyProps';
import ReactHtmlParser from 'react-html-parser';

class ArrowsKeyButton extends React.Component<ArrowKeyProps> {    
  constructor(props: ArrowKeyProps) {
    super(props);
  }
  
  render() {
    return (<div id={this.props.keyId} className="arrowsKeyPreview" style={Object.assign({ gridArea: this.props.position })}>
      {ReactHtmlParser(this.props.symbol)}
    </div>);
  }
}

export default ArrowsKeyButton;