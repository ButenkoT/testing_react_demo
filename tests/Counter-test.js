const test = require('tape');
import { shallow } from 'enzyme';
const React = require('react');
const Counter = require('../scripts/Counter');


test('Counter', function (t) {
  const wrapper = shallow(<Counter />);

  t.equal(wrapper.find('h1').text(), 'Count: 0', 'should start with count 0');

  wrapper.find('button').simulate('click');

  t.equal(wrapper.find('h1').text(), 'Count: 1', 'should increment count on click');
  t.end();
});
