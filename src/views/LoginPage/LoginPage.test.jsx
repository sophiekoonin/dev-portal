import React from 'react'
jest.mock('react-router-dom/Redirect')

beforeEach(() => {
  jest.resetModules()
})

const getLoginPageWithContext = (
  context = { accessToken: null, hasError: false, username: null }
) => {
  jest.doMock('../../utils/AuthContext', () => ({
    Consumer: props => props.children(context)
  }))
  return require('./LoginPage').default
}

test('renders a login form correctly when there is no access token in the state', () => {
  const LoginPage = getLoginPageWithContext()
  const wrapper = mount(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})

test('redirects to dashboard when access token is not null or undefined', () => {
  const LoginPage = getLoginPageWithContext({
    accessToken: 'abc123',
    hasError: false,
    username: null
  })
  const wrapper = mount(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})
