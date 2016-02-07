
(() => {
  Polymer({
    is: 'login-signup',

    listeners: {
      'account.tap': 'addNewAccount'
    },

    addNewAccount: function(e){
      this.$.container.style.visibility="hidden";
      this.$.addAccount.open();
    },

    closeModal:function(e){
      if(this.$.addAccount.opened){
        this.$.addAccount.close();
      }
      this.$.container.style.visibility="visible";
    },

    properties: {
      foo: {
        type: String,
        value: 'login-signup',
        notify: true
      }
    }
  });
})()
