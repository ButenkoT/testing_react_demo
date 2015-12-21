const test = require('tape');
const sinon = require('sinon');
import { shallow } from 'enzyme';
const React = require('react');
const Form = require('../scripts/Form');


test('Form / Controllable input', function (t) {
  const wrapper = shallow(<Form />);

  t.equal(wrapper.find('input').prop('value'), '', 'should start with empty value');

  wrapper.find('input').simulate('change', {target: {value: 'OMG!'}});

  t.equal(wrapper.find('input').prop('value'), 'OMG!', 'should change value');

  t.end();
});


test('Form / Add comment on submit', function (t) {
  const wrapper = shallow(<Form />);

  t.deepEqual(wrapper.state('comments'),
    ['hello', 'world'],
    'should init with two comments');


  wrapper.find('input').simulate('change', {target: {value: 'OMG!'}});

  const preventDefault = sinon.spy();
  wrapper.find('form').simulate('submit', {preventDefault});

  t.ok(preventDefault.calledOnce, 'should prevent page reload');

  t.deepEqual(wrapper.state('comments'),
    ['hello', 'world', 'OMG!'],
    'should add comment');

  t.equal(wrapper.find('input').prop('value'), '', 'should empty value');
  t.end();
});
