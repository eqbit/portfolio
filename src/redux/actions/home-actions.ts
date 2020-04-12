import { Dispatch } from 'redux';
import { HOME } from '@constants';

export const homeActions = {
  getTitle: () => (dispatch: Dispatch) => {
    const title = 'Eqbit\'s portfolio';
    
    dispatch({
      type: HOME.SET,
      payload: {
        title
      }
    });
  }
};
