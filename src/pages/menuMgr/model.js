import api from 'api'
const {
  getMenuList,
} = api

export default {
  namespace: 'menuMgr',

  state: {
  },


  effects: {
    *getMenuList({ payload,callback }, { call, put }) {
      const result = yield call(getMenuList, payload);
      if(callback && typeof callback=='function'){
        callback(result)
      }
    },

  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
