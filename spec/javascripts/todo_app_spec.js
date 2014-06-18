describe('Todo App', function() {
  var todos, createdTodo;
  beforeEach(function (){
    // load data fixture
    todos = getJSONFixture('todos.json');
    createdTodo = getJSONFixture('todo_create_result.json');

    // load container html fixture
    appendSetFixtures('<div id="container"></div>');

    // create the view
    var view = new SpaApp.Views.TodosIndex({ collection: todos });

    // render the view
    $('#container').html(view.render().el);
  });

  it('should show seeded items', function(){
    spyOn($, 'ajax').and.callFake(function (req) {
        var d = $.Deferred();
        d.resolve(todos);
        return d.promise();
    });

    // check for the rendered todos
    expect($('#todos')).toContainText(todos[0].title);
    expect($('#todos')).toContainText(todos[1].title);
    expect($('#todos')).toContainText(todos[2].title);
  });

  describe('adding a new todo', function() {
    it('should show up in the list of todos', function() {
      spyOn($, 'ajax').and.callFake(function (req) {
          var d = $.Deferred();
          d.resolve(createdTodo);
          return d.promise();
      });

      $('#todo_title').val('new todo item');
      $('#addTodo').submit();

      expect($('#todos')).toContainText('new todo item');
    });
  });

  describe('removing an existing todo', function() {
    it('should remove the item from the list of todos', function () {
      pending();
    });
  });

  describe('checking off a todo item', function() {
    it('should mark that item as completed', function() {
      pending();
    });
  });
});
