import axios from 'axios';
import { takeEvery, call, put} from 'redux-saga/effects';


function* addItemSaga(action) {
    try{
        yield call(axios.post, '/api/shelf', {data: action.payload});
        yield put({type: 'GET_SHELF'})
        console.log(action.payload, 'I AM PAYLOAD')
    }
    catch (error) {
        console.log('I AM', error);
    }
}




function* itemSaga() {
    yield takeEvery('ADD_ITEM', addItemSaga);
  }
  
  export default itemSaga;