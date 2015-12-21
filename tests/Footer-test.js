const test = require('tape');
import { shallow } from 'enzyme';
const React = require('react');
const Footer = require('../scripts/Footer');


test('Footer', function (t) {
  const wrapper = shallow(<Footer />);
  t.equal(wrapper.text(), 'Tanya Butenko 2015', 'should render Tanya Butenko 2015 in footer');
  t.end();
});
