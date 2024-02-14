import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    /**
     * @param {state} state defines the current state for the component
     * @param {action} action defines the action for which reducer is called.
     * here addNote accepts a state which will be our task list state (it will
     * hold all the tasks) and action which will hold different parameters such
     * as id and name for the note.
     * then push the newNote to current state which will now hold updated data.
     */
    addCounter: (state, action) => {
      state = action.payload.count;
      return state;
    },

    /**
     * @param {state} state defines the current state for the component
     * @param {action} action defines the action for which reducer is called.
     * here deleteNote accepts a state which will be our task list state (it will
     * hold all the tasks) and action which will hold different parameters such
     * as id for the note.
     * @returns filtered list from which item with id will be removed that is clicked for deletion.
     */
    // deleteNote: (state, action) => {
    //   return state.filter(item => item.id != action.payload.id);
    // },
  },
});

export const {addCounter} = counterSlice.actions;
export default counterSlice.reducer;
