Todos.Views.TodoItemsShow = Backbone.View.extend({

  template: JST['todo_items/show'],

  events: {
    "click": "edit"
  },

  render: function () {
    this.$el.addClass("todo_item");
    this.$el.attr("data-id", this.model.id);
    this.$el.html(this.template({model: this.model}));
    return this;
  },

  edit: function (event) {
    var todoId = $(event.currentTarget).data("id");
    Todos.Store.router.navigate("#/todo_items/" + todoId + "/edit", {trigger: true});
  }

});
