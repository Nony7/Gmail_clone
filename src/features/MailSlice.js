import { createSlice } from '@reduxjs/toolkit';


export const MailSlice = createSlice({

  name: 'Mail',
  initialState:{
    selectedMail:null,
    sendMessageIsOpen: false
  },

  reducers: {

    selectMail: ( state,action ) =>{state.selectedMail = action.payload;
    },

    openSendMessage:  (state) => { state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },

  },

});
 


export const {selectMail,  openSendMessage, closeSendMessage } = MailSlice.actions;


export const selectOpenMail = (state) => state.Mail.selectedMail;


export const selectSendMessageIsOpen = (state) => state.Mail.sendMessageIsOpen;


export default MailSlice.reducer;
 