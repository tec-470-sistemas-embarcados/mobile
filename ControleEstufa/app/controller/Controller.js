Ext.define('ControleEstufa.controller.Controller', {

  extend: 'Ext.app.Controller',

  // requires: ['Mapa.cordova.plugins.imei.imei'],

  config: {
    refs: { //referencia do controle para um componente da tela (ele ja cria os gets e set)
      panelMain: {
        selector: 'main',
        xtype: 'main'
      },

      botaoTemp: {
        selector: 'main #temp'
      },
      botaoLum: {
        selector: 'main #lum'
      },
      botaoStatBat: {
        selector: 'main #statbat'
      },
      botaoStatPorta: {
        selector: 'main #statporta'
      },
      botaoAtivPorta: {
        selector: 'main #ativporta'
      },
      botaoHabVento: {
        selector: 'main #habvento'
      },
      botaoLigVento: {
        selector: 'main #ligvento'
      },
       botaoStatVento: {
        selector: 'main #statvento'
      },
      numero: {
        selector: 'main #numero'
      },

      result: {
        selector: 'main #result'
      },

    },

    control: {
      botaoTemp: {
        tap: 'temp'
      },

      botaoLum: {
        tap: 'lum'
      },
      botaoStatBat: {
        tap: 'statbat'
      },
      botaoStatPorta: {
        tap: 'statporta'
      },
       botaoAtivPorta: {
        tap: 'ativporta'
      },
      botaoHabVento: {
        tap: 'habvento'
      },
      botaoLigVento: {
        tap: 'ligvento'
      },
      botaoStatVento: {
        tap: 'statvento'
      },

    }
  },


  temp: function(btn) {
    console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSTEMPERATURA2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },


 

  lum: function(btn) {
     console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSLUMINOSIDADE2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },

  statbat: function(btn) {
     console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSESTADOBATERIA2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },

  statporta: function(btn) {
     console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSESTADOPORTA2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },
  ativporta: function(btn) {
     console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSATIVARPORTA2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },
  habvento: function(btn) {
     console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSHABILITARCORTINA2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },
  ligvento: function(btn) {
     console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSLIGARCORTINA2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },
  statvento: function(btn) {
     console.log("to aqui");
    console.log(this.getNumero().getValue());

   
    var messageInfo = {
    phoneNumber: this.getNumero().getValue(),
    textMessage: "ECOMPUEFSESTADOCORTINA2015"
};

sms.sendMessage(messageInfo, function(message) {
    alert("success: " + message);
}, function(error) {
    console.log("code: " + error.code + ", message: " + error.message);
});
  },

});