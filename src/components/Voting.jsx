import React from 'react';
import {compose, map} from 'ramda'

function getPair() {
  return this.props.pair || [];
}

function renderButton(entry) {
  return (
    <button key={entry}>
      <h1>{entry}</h1>
    </button>
  );
}

function render(pair) {
  return (
    <div className="voting">
      {map(renderButton, pair)}
    </div>
  );
}

export default React.createClass({
  getPair: getPair
, render: compose(render, getPair)
});
