Todos.Views.TodoItemsShow = Backbone.View.extend({

  el: "<li class='todo-item'>",

  initialize: function () {
    var renderCallback = this.render.bind(this);
    this.listenTo(this.model, "change", renderCallback);
  },

  template: JST['todo_items/show'],

  events: {
    "click .completion-button": "toggleComplete",
    "click": "edit"
  },

  render: function () {
    this.$el.attr("data-id", this.model.id);
    this.$el.html(this.template({model: this.model}));
    return this;
  },

  edit: function (event) {
    var todoId = $(event.currentTarget).data("id");
    Todos.Store.router.navigate("#/todo_items/" + todoId + "/edit", {trigger: true});
  },

  toggleComplete: function (event) {
    event.stopPropagation();
    var complete = this.model.get("complete");
    this.model.set("completed", !(this.model.get("completed")));
    this.model.save();
  }

});
