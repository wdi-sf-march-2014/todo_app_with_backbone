SpaApp.Models.Todo = Backbone.Model.extend({
  defaults : {
    title : '',
    description : '',
    completed : false
  },

  urlRoot : '/todos'
});