Todos.Routers.TodoItems = Backbone.Router.extend({
  initialize: function (options) {
    this.todos = options.todos;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "todo_items/:id/edit": "edit",
    "todo_items/create": "create"
  },

  index: function () {
    this._showTodos();
  },

  edit: function (id) {
    this._showTodos(id);
  },

  create: function () {
    var that = this;

    this.todos.create({ order: this.todos.maxOrder() + 1 }, {
      success: function (todoItem) {
        that.navigate("#/todo_items/" + todoItem.id + "/edit");
      }
    });
  },

  _showTodos: function (todoId) {
    var indexView = new Todos.Views.TodoItemsIndex({
      collection: this.todos,
      editingItemId: todoId
    });

    this.$rootEl.html(indexView.render().$el);
  }
});
