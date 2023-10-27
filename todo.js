const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      this.print(i);
    }
  },

  add: function (text) {
    const newItem = {
      text: text,
      completed: false,
    };
    this.items.unshift(newItem);
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    console.log(this.items[index]);
    if (this.items[index].completed === true) {
      console.log(`[x] ${this.items[index].text}`);
    } else {
      console.log(`[] ${this.items[index].text}`);
    }
  },

  complete: function (index) {
    return (this.items[index].completed = true);
  },

  decomplete: function (index) {
    return (this.items[index].completed = false);
  },
};
