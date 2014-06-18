SpaApp.Views.TodosShow = Backbone.View.extend({
  className: function() {
    if (this.model.get('completed')) {
      return 'done done-true';
    } else {
      return 'done';
    }
  },
  
  template: HandlebarsTemplates['todos/show'],

  events: {
    'click input[type="checkbox"]': 'complete',
    'click .removeTodo':            'removeTodo',
    'click a':                      "linkClicked"
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));

    return this;
  },

  complete: function(event) {
    var checkbox = event.target;

    var _this = this;
    this.model.set('completed', checkbox.checked);
    this.model.save('completed', checkbox.checked, {success: function(data) {
      $(_this.el).toggleClass("done-true");
    }});
  },

  removeTodo: function(event) {
    var _this = this;
    this.model.destroy({context: this, success: function (data) {
      _this.remove();
    }});
  },

  linkClicked: function(event){
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {trigger: true});
  }

});
