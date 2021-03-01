import usersSagas from './users';
import {all} from 'redux-saga/effects'

export default function* rootSagas(){
    //promise all 
    yield all([
        ...usersSagas
    ]);
};