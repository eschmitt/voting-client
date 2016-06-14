import jsdom from 'jsdom';
import {merge, identity} from 'ramda';

const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

global = mergeWith(identity, global, window);
