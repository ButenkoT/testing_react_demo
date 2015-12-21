const test = require('tape');
import { shallow } from 'enzyme';
const React = require('react');
const Main = require('../scripts/Main');
const Counter = require('../scripts/Counter');
const Form = require('../scripts/Form');


test('Main', function (t) {
  const wrapper = shallow(<Main />);
  t.ok(wrapper.hasClass('main'), 'should have class main');
  t.ok(wrapper.contains(<Counter />), 'should render Counter');
  t.ok(wrapper.contains(<Form />), 'should render Form');
  t.end();
});
