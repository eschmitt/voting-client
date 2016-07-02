import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument
, scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {assert} from 'chai'
import Voting from '../../src/components/Voting';

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    assert.equal(buttons.length, 2);
    assert.equal(buttons[0].textContent, 'Trainspotting');
    assert.equal(buttons[1].textContent, '28 Days Later');
  });
});
