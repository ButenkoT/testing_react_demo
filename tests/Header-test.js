const test = require('tape');
import { shallow } from 'enzyme';
const React = require('react');
const Header = require('../scripts/Header');


test('Header', function (t) {
  const wrapper = shallow(<Header name="SydJS"/>);
  t.equal(wrapper.text(), 'Hello SydJS', 'should render SydJS name');
  t.end();
});

test('Header 2', function (t) {
  const wrapper = shallow(<Header name="World"/>);
  t.equal(wrapper.text(), 'Hello World', 'should render World name');
  t.end();
});
