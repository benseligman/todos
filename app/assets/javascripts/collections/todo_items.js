Todos.Collections.TodoItems = Backbone.Collection.extend({

  model: Todos.Models.TodoItem,
  url: "/todo_items/",
  comparator: function (todoItem) {
    return todoItem.get("order");
  },

  maxOrder: function () {
    return _(this.map(function (todoItem) {
      return todoItem.get("order");
    })).max();
  }

});
