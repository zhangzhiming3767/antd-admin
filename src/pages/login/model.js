import { router, pathMatchRegexp } from 'utils'
import api from 'api'

const { loginUser } = api

export default {
  namespace: 'login',

  state: {},

  effects: {
    *login({ payload,callback }, { put, call, select }) {
      const data = yield call(loginUser, payload)
      if (callback && typeof callback === 'function') {
        callback(data)
      }
      // const { locationQuery } = yield select(_ => _.app)
      // if (data.code=='1') {
      //   debugger
      //   // const { from } = locationQuery
      //   // yield put({ type: 'app/query' })
      //   // if (!pathMatchRegexp('/login', from)) {
      //   //   if (['', '/'].includes(from)) router.push('/dashboard')
      //   //   else router.push(from)
      //   // } else {
      //     router.push('/dashboard')
      //   // }
      // } else {
      //   throw data
      // }
    },

    // *initOSS({ payload, callback }, { call }) {
    //   const { region, bucketName, response } = yield call(initOSS)
    //   if (callback && typeof callback === 'function') {
    //     callback(region, bucketName, response)
    //   }
    // },
  },
}
