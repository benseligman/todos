Todos.Collections.TodoItems = Backbone.Collection.extend({

  model: Todos.Models.TodoItem,
  url: "/todo_items/",
  comparator: function (todoItem) {
    return todoItem.get("order");
  },

  maxOrder: function () {
    return this.reduce(function (tempMax, todoItem) {
      var order = todoItem.get("order");
      return order > tempMax ? order : tempMax;
    }, 0);
  }
});
