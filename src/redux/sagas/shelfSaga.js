import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getShelf(action) {
    console.log('In getShelf of shelfSaga', action);
    try {
        const response = yield call(axios.get, '/api/shelf');
        console.log('getShelf in shelfSaga response', response);
        yield put( { type: 'SET_SHELF', payload: response.data} );
    }
    catch (error) {
        alert('Why do you always ruin everything', error);
    }
}

function* shelfSaga() {
    yield takeEvery('GET_SHELF', getShelf);
  }
  
  export default shelfSaga;