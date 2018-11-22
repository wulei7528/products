export default {
  namespace: 'products',
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'getList' })
    }
  },
  effects: {
    * getList({ payload }, { call, put, select }) {
      yield put({
        type: 'setList',
        payload: {
          list: [
            {
              'id': 1001,
              'name': '第一个商品'
            },
            {
              'id': 1002,
              'name': '第二个商品'
            },
            {
              'id': 1003,
              'name': '第三个商品'
            }
          ]
        }
      })
    }
  },
  reducers: {
    setList(state, { payload: products }) {
      return {
        ...state,
        ...products
      }
    }
  },
  state: {
    list: []
  }
}
