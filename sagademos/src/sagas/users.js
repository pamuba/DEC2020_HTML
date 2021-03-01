import {takeEvery, call, fork, put} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items:result.data.data
        }))
        // console.log(result);

        //
        //
        //
    }
    catch(e){}
}

//generator fns always a value
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const  usersSagas = [
    fork(watchGetUsersRequest)
]

export default usersSagas;