import React from 'react'
import AuthProvider from './AuthProvider'

describe('getAccessToken', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('makes a POST request to /login with the given username and password', async () => {
    const wrapper = shallow(<AuthProvider />)

    fetch.mockResponseOnce(JSON.stringify({ accessToken: 'abc123' }))
    const instance = wrapper.instance()

    await instance.getAccessToken('myUsername', 'myPassword')
    expect(fetch.mock.calls.length).toBe(1)
    expect(fetch.mock.calls[0]).toMatchSnapshot()
  })

  it('sets state to hasError=true if the request returns a 401', async () => {
    const wrapper = shallow(<AuthProvider />)

    fetch.mockResponseOnce(JSON.stringify({ error: 'Bad credentials!' }), {
      status: 401
    })
    const instance = wrapper.instance()
    await instance.getAccessToken('myUsername', 'myPassword')
    expect(instance.state.hasError).toBe(true)
    expect(instance.state.accessToken).toBe(null)
  })

  it('stores access token in the state if the request returns a 200', async () => {
    const wrapper = shallow(<AuthProvider />)

    fetch.mockResponseOnce(JSON.stringify({ accessToken: 'abcde1234' }), {
      status: 200
    })
    const instance = wrapper.instance()
    await instance.getAccessToken('myUsername', 'myPassword')
    expect(instance.state.accessToken).toEqual('abcde1234')
  })
})
