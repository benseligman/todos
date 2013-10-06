Todos.Views.TodoItemsEdit = Backbone.View.extend({

  el: "<li class='todo-item todo_item_edit'>",

  template: JST['todo_items/edit'],

  events: {
    "submit form": "save"
  },

  render: function () {
    this.$el.attr("data-id", this.model.id);
    this.$el.html(this.template({model: this.model}));
    return this;
  },

  save: function (event) {
    event.preventDefault();
    var newBody = $(event.currentTarget).find("input").val();

    this.model.save({ body: newBody });
    Todos.Store.router.navigate("#", { trigger: true });
  }

});
