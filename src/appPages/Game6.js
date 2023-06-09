import React from 'react';

class UnityGame extends React.Component {
  componentDidMount() {
    this.getIframeDimensions();
  }

  getIframeDimensions() {
    const iframe = document.getElementById('gameIframe');
    const width = iframe.offsetWidth;
    const height = iframe.offsetHeight;

    console.log('Iframe width:', width, 'height:', height);
  }

  render() {
    const gamePath = '/Game2/index.html';

    return (
      <div>
        <iframe id="gameIframe" src={gamePath} title="Unity Game" width="1000" height="800" frameborder="0"></iframe>
      </div>
    );
  }
}

export default UnityGame;
