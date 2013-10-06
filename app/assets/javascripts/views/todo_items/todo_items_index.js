Todos.Views.TodoItemsIndex = Backbone.View.extend({

  el: "<ul class='todo-items'>",

  initialize: function (options) {
    this.editingItemId = options.editingItemId;
    this.subViews = [];
    this.makeSortable();
  },

  template: JST['todo_items/index'],

  makeSortable: function () {
    var that = this;

    return this.$el.sortable({
      group: "todo-items",
      containment: "parent",
      opacity: 0.7,
      stop: function () {
        that.reorderItems();
      }
    });
  },

  render: function () {
    var that = this;

    this.collection.each(function (model) {
      that._renderItem(model);
    });

    var newItemButton = new Todos.Views.TodoItemsNew();
    this.$el.append(newItemButton.render().$el);

    return this;
  },

  reorderItems: function () {
    var that = this;
    var idx = 1;


    _(this.$el.children()).each(function (child) {
      var id = $(child).data("id");
      var model = that.collection.get(id);

      if (model) {
        model.set("order", idx);
        if (!$.isEmptyObject(model.changed)) {
          model.save();
        }
        idx++;
      }
    });

    this.collection.sort();
  },

  _renderItem: function (model) {
    var itemView;
    var modelId = model.id;
    if (model.id == this.editingItemId) {
      itemView = new Todos.Views.TodoItemsEdit({model: model});
    } else {
      itemView = new Todos.Views.TodoItemsShow({model: model});
    }

    var $el = itemView.render().$el;

    this.$el.append($el);
  }

});
