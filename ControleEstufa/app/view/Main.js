Ext.define('ControleEstufa.view.Main', {
   extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',


        items: [
            {
                title: 'Amb. Externo',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,
                 layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox',
                    docked: 'bottom'
                },

                    
                    items: [ 

                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Ambiente Externo'

                    },

                    { 
                        xtype: 'panel',
                        layout: {
                        align: 'center',
                        pack: 'center',
                        type: 'hbox',
                        docked: 'bottom'
                    },

                        items:[
                        {                        
                         xtype: 'label',   
                         html: 'Número',
                         
                        },
                        {
                         xtype: 'textfield', 
                         itemId: 'numero',  
                         style:'margin:10px;',  
                       },]
                   },

                     { 
                         xtype: 'button',   
                         text: 'Temperatura',                                                
                         width: 300,
                         height: 40,
                         itemId: 'temp',                
                         action: 'temp',                       
                         style:'margin:10px;',
                       },
                       {                        
                         xtype: 'button',   
                         text: 'Luminosidade',                           
                         width: 300,
                         height: 40,
                         itemId: 'lum',                
                         action: 'lum',
                         style:'margin:10px;',
                        },
                        {                        
                         xtype: 'button',   
                         text: 'Estado da Bateria',                         
                        width: 300,
                         height: 40,
                         itemId: 'statbat',                
                         action: 'statbat',
                         style:'margin:10px;',
                        },
                       
                        {                        
                         xtype: 'label',   
                         html: '',
                         itemId: 'result',                
                         action: 'result',
                         id: 'result'
                        },]
            },

            {
                title: 'Porta',
                iconCls: 'home',

                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox',
                    docked: 'bottom'
                },
                items: [ 

                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Porta'
                    },
                     {                        
                         xtype: 'button',   
                         text: 'Estado',                        
                        width: 300,
                         height: 40,
                         itemId: 'statporta',                
                         action: 'statporta',
                         style:'margin:10px;',

                        },
                        {                        
                         xtype: 'button',   
                         text: 'Ativ/Desativ Monitoramento',                        
                         width: 300,
                         height: 40,
                         itemId: 'ativporta',                
                         action: 'ativporta',
                         style:'margin:10px;',
                        },
                        


                    ]

            },

            {
                title: 'Cortina de Vento',
                iconCls: 'home',
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox',
                    docked: 'bottom'
                },

                items: [ 

                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Cortina de Vento'
                    },

                    {                        
                         xtype: 'button',   
                         text: 'Habi/Desabi Monitoramento',                        
                         width: 270,
                         height: 40,
                         itemId: 'habvento',                
                         action: 'habvento',
                         style:'margin:10px;',
                        },
                        {                        
                         xtype: 'button',   
                         text: 'Liga/Desliga',                        
                         width: 270,
                         height: 40,
                         itemId: 'ligvento',                
                         action: 'ligvento',
                         style:'margin:10px;',
                        },
                        {                        
                         xtype: 'button',   
                         text: 'Estado ',                        
                         width: 270,
                         height: 40,
                         itemId: 'statvento',                
                         action: 'statvento',
                         style:'margin:10px;',
                        },
                    ]
            }
           
        ]
    }
});





                   