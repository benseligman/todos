window.Todos = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},
  initialize: function(todosJSON, $rootEl) {
    var todos = new Todos.Collections.TodoItems(todosJSON);
    var indexView = new Todos.Views.TodoItemsIndex({ collection: todos });

    Todos.Store.router = new Todos.Routers.TodoItems({
      todos: todos,
      $rootEl: $rootEl
    });

    Backbone.history.start();
  }
};
