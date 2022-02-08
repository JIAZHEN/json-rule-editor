import * as ActionTypes from "./action-types";
import { updateState } from "./app";
import { getRulesets } from "../apis/ruleset";

export const uploadRuleset = ruleset => dispatch => {
  dispatch(updateState("open"));
  return dispatch({
    type: ActionTypes.UPLOAD_RULESET,
    payload: { ruleset }
  });
};

export const addRuleset = name => dispatch => {
  dispatch(updateState("open"));
  return dispatch({
    type: ActionTypes.ADD_RULESET,
    payload: { name }
  });
};

export const updateRulesetIndex = name => {
  return {
    type: ActionTypes.UPDATE_RULESET_INDEX,
    payload: { name }
  };
};

export const fetchRuleset = () => dispatch => {
  dispatch(updateState("open"));
  getRulesets().then(ruleSets =>
    dispatch({
      type: ActionTypes.ADD_RULESET,
      payload: { ruleSets }
    })
  );
};
