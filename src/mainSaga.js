import { takeEvery, put, call } from "redux-saga/effects";
import actionTypes from "./redux/actionTypes";
import { loadReposByPage } from "./api";
import { loadReposSuccess } from "./redux/actionCreator";

function* loadRepos(action) {
  console.log({ action });
  const payload = yield call(loadReposByPage, action.payload);
  yield put(loadReposSuccess(payload));
}

export function* watchRepoActions() {
  yield takeEvery(actionTypes.LOAD_REPOS, loadRepos);
}
