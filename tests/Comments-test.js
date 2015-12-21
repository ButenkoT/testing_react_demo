const test = require('tape');
import { shallow } from 'enzyme';
const React = require('react');
const Comments = require('../scripts/Comments');


test('Comments list', function (t) {
  const comments = ['hello', 'world'];
  const wrapper = shallow(<Comments comments={comments}/>);
  t.equal(wrapper.find('li').length, comments.length, 'should return same amount of li elements as the length of the comments');
  t.equal(wrapper.find('li').at(0).text(), 'hello', 'first li should contain "hello"');
  t.equal(wrapper.find('li').at(1).text(), 'world', 'second li should contain "world"');
  t.end();
});
