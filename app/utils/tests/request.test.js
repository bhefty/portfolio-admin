/* global Response */
import request from '../request'

describe('request', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    window.fetch = jest.fn()
  })

  describe('stubbing successful response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('{ "hello": "world" }', {
        status: 200,
        headers: {
          'Content-type': 'application/json'
        }
      })

      window.fetch.mockReturnValue(Promise.resolve(res))
    })

    it('should format the response correctly', async () => {
      const data = await request('/thisurliscorrect')
      expect(data.hello).toEqual('world')
    })
  })

  describe('stubbing error response', () => {
    // Before each test, pretend we got got unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json'
        }
      })

      window.fetch.mockReturnValue(Promise.resolve(res))
    })

    it('should catch errors', async () => {
      const data = await request('/thisdoesnotexist')
      expect(data.response.status).toBe(404)
      expect(data.response.statusText).toBe('Not Found')
    })
  })
})
