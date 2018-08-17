import React from 'react'
import LoginPage from './LoginPage'

test('renders a login form', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})
