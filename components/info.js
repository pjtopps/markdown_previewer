import React from 'react';

const explanation =
      <div id="info">
        Heading<br/>
        =======<br/><br/>
        Sub-heading<br/>
        -----------<br/><br/>
        ### Another deeper heading<br/><br/>
        Paragraphs are separated<br/>
        by a blank line.<br/><br/>
        Leave 2 spaces at the end of a line to do a  <br/>
        line break<br/><br/>
        Text attributes *italic*, **bold**, <br/>
        `monospace`, ~~strikethrough~~ .<br/><br/>
        Shopping list:<br/><br/>
          * apples<br/>
          * oranges<br/>
          * pears<br/><br/>
        Numbered list:<br/><br/>
          1. apples<br/>
          2. oranges<br/>
          3. pears<br/><br/>
        The rain---not the reign---in Spain.<br/><br/>
         *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
      </div>;

function Info(props) {
  if (props.show) return explanation;
  else return <div></div>;
}


export default Info;
