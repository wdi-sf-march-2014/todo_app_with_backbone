SpaApp.Collections.Todos = Backbone.Collection.extend({
  model : SpaApp.Models.Todo,

  url : '/todos'

});