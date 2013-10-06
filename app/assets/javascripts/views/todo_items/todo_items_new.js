Todos.Views.TodoItemsNew = Backbone.View.extend({
  template: JST['todo_items/new'],

  events: {
    "click button": "createNote"
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  createNote: function (event) {
    event.preventDefault();
    Todos.Store.router.navigate("#/todo_items/new", { trigger: true });
  }
});
