/*Ext.define('Myapp6.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
      xtype: 'container', 
      style: 'background:white', 
      html: '<div style="padding:10px;font-size:24px;">detailview</div>'
    }
  ]
}) */

Ext.define('Myapp6.view.main.detail.DetailView', {
  extend: 'Ext.grid.Grid',
  title: 'Reykjavik Flight Departures',
  items: [{
      docked: 'top',
      xtype: 'toolbar',
      items: [{
          text: 'Sort on destination',
          handler: function(button){
              // Sort under program control
              button.up('grid').getStore().sort('to');
          }
      }]
  }],
  store: {
   
      // Sort via store configuration
      sorters: [{
          property: 'airline'
      }],
   
      type: 'store',
      autoLoad: true,
      fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
      proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
  },
   
  columns: [{
      xtype: 'datecolumn',
      text: 'Date',
      dataIndex: 'date',
      format: 'M j',
      width: 60
  }, {
      xtype: 'column', // This is the default column xtype
      text: 'Airline',
      dataIndex: 'airline'
  }, {
      text: 'To',
      dataIndex: 'to'
  }, {
      text: 'Scheduled',
      dataIndex: 'plannedDeparture',
      align: 'center'
  }, {
      text: 'Status',
      dataIndex: 'realDeparture',
      flex: 1
  }],
   
  });
