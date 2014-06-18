window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.todos = new this.Collections.Todos();

    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});

  }
};
SpaApp.Routers.Main = Backbone.Router.extend({
  routes: {
    "todos/:id": "detail",
    "(/)": "index",
  },

  index: function(){
    SpaApp.todos.fetch({success: function (allData) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({collection: allData});
      $('#container').html(view.render().el);
    }});
  },
  detail: function(id){
    var todo = new SpaApp.Models.Todo({id : id});
    todo.fetch({success: function (serverTodo) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosDetail({model: serverTodo});
      $('#container').html(view.render().el);
    }});
  }
});
$(document).ready(function(){
  SpaApp.initialize();
});
