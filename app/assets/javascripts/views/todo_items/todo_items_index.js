Todos.Views.TodoItemsIndex = Backbone.View.extend({

  initialize: function (options) {
    this.editingItemId = options.editingItemId;
  },

  template: JST['todo_items/index'],

  render: function () {
    var that = this;

    this.collection.each(function (model) {
      that._renderItem(model);
    });

    return this;
  },

  _renderItem: function (model) {
    var itemView;
    if (model.id == this.editingItemId) {
      itemView = new Todos.Views.TodoItemsEdit({model: model});
    } else {
      itemView = new Todos.Views.TodoItemsShow({model: model});
    }

    this.$el.append(itemView.render().$el);
  }

});
