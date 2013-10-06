Todos.Collections.TodoItems = Backbone.Collection.extend({

  model: Todos.Models.TodoItem,
  url: "/todo_items/",
  comparator: function (todoItem) {
    return todoItem.get("order");
  },

  maxOrder: function () {
    var orders = this.map(function (todoItem) {
      return todoItem.get("order");
    });

    return (orders.length > 0) ? _(orders).max() : 0;
  }

});
