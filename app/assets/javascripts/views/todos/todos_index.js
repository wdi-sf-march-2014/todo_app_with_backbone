SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'submit #addTodo':                'add'
  },

  render: function() {
    $(this.el).html(this.template());

    var todoView;
    this.collection.each(function (someTodo) {
      todoView = new SpaApp.Views.TodosShow({ model: someTodo} );
      this.$el.append(todoView.render().el);
    }, this);

    return this;
  },

  add: function(event) {
    event.preventDefault();
    
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };

    var _this = this;

    SpaApp.todos.create(newTodo, {
      wait : true,
      success: function (todoModel) {
        var todoView = new SpaApp.Views.TodosShow({ model: todoModel });
        _this.$el.append(todoView.render().el);
      }
    });
  }
});
