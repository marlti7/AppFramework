import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    // blacklist: [], // reducer keys that you do NOT want stored to persistence here
    whitelist: ['chatSum'], // Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
  },
};

export default REDUX_PERSIST;