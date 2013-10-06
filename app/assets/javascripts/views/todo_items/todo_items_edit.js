Todos.Views.TodoItemsEdit = Backbone.View.extend({


  el: "<li class='todo-item'>",

  template: JST['todo_items/edit'],

  events: {
    "submit form": "save"
  },

  render: function () {
    this.$el.addClass("todo_item_edit");
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
