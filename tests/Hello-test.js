const test = require('tape');
import { shallow } from 'enzyme';
const React = require('react');
const Hello = require('../scripts/Hello');
const Header = require('../scripts/Header');
const Main = require('../scripts/Main');
const Footer = require('../scripts/Footer');

test('Hello', function(t){
  const wrapper = shallow(<Hello />);
  t.ok(wrapper.contains(<Header name="SydJS"/>), 'should render Header');
  t.ok(wrapper.contains(<Main />), 'should render Main');
  t.ok(wrapper.contains(<Footer />), 'should render Footer');
  t.end();
});