export default {
  namespace: "IndexPage",
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === "/indexpage") {
          dispatch({
            type: "init",
          });
        }
      });
    },
  },
  effects: {
    *init({ payload }, { put, call }) {
      // 要说的就是这里的参数
    },
  },
  reducers: {},
};
