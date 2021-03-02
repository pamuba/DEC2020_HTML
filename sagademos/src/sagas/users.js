import {takeEvery, takeLatest, call, fork, put, take} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items:result.data.data
        }))
    }
    catch(e){}
}

//generator fns always a value
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}


function* createUser(action){
     console.log(action)
    // yield;

    try{
        yield call(api.createUser, {firstName:action.payload.firstName, lastName:action.payload.lastName})
        yield call(getUsers)
    }
    catch(e){}
}

function* watchCreateUsersRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}){
    try{
        yield call(api.deleteUser, userId)
        yield call(getUsers)
    }
    catch(e){}
}

function* watchDeleteUserRequest(){
    while(true){
        const action = yield take(actions.Types.DELETE_USERS_REQUEST)
        yield call(deleteUser, {
            userId:action.payload.userId
        })
    }
}

const  usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUsersRequest),
    fork(watchDeleteUserRequest)
]

export default usersSagas;