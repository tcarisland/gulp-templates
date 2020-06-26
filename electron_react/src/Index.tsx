import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Index extends React.Component<{greeting: string}> {
  constructor(props) {
    super(props);
  }
  render() {
    const items = [];
    for(var _i = 0; _i < 10; _i++) {
      items.push(<p> <button onClick={(e) => alert("Hello!")} >{ this.props.greeting + " " + _i } </button> </p>);
    }
    return(
      <div>
        { items }
      </div>
    );
  }
}
