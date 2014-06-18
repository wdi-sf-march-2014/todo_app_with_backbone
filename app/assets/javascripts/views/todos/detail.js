SpaApp.Views.TodosDetail = Backbone.View.extend({
  id: "todo-detail",
  template: HandlebarsTemplates['todos/detail'],

  events: {
    "click a": "linkClicked",
    "dblclick .editable": "edit",
    "submit form": "submitForm",
    'click input[type="checkbox"]': 'complete'
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },

  edit: function(event){
    var form_id = event.target.attributes["data-edit-form"].value;
    $("#" + form_id).toggleClass("hidden");
    $(event.target).toggleClass("hidden");
  },

  complete: function(event) {
    var checkbox = event.target;

    this.submit({completed: checkbox.checked});
  },
  submitForm: function(event){
    event.preventDefault();
    var field = $(event.target).children()[0];
    var changes = { };
    changes[field.name] = field.value;
    this.submit(changes);
  },
  submit: function(changes){
    $.extend(this.model, changes);
    this.render();
    this.model.save();
  },
  linkClicked: function(event){
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {trigger: true});
  }
});