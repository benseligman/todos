Todos.Routers.TodoItems = Backbone.Router.extend({
  initialize: function (options) {
    this.todos = options.todos;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "todo_items/:id/edit": "edit",
    "todo_items/new": "create"
  },

  index: function () {
    this._showTodos();
  },

  edit: function (id) {
    this._showTodos(id);
  },

  new: function () {
    this.todos.add({ order: this.todos.length }, { silent: true });
  },

  _showTodos: function (todoId) {
    var indexView = new Todos.Views.TodoItemsIndex({
      collection: this.todos,
      editingItemId: todoId
    });

    this.$rootEl.html(indexView.render().$el);
  }
});
