import {Reducer, combineReducers} from 'redux';
import {HomeReducer} from '../screens/home/homeReducer';

type ZippedReducersType<T> = {
  [key in keyof T]: Reducer<T[key]>;
};

export interface RootState {
  HomeReducer: null;
}

const zipedReducer = (): ZippedReducersType<RootState> => ({
  HomeReducer: HomeReducer,
});

export const combainedReducers = () =>
  combineReducers<RootState>(zipedReducer());
