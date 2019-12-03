(function(modules) {
  const { Vue } = modules;
  const shoppingList = new Vue({
    data: () => ({
      state: "view",
      header: "shopping list app",
      newItem: "",
      items: [
        { label: "10 party hats", purchased: false },
        { label: "2 board games", purchased: true },
        { label: "20 cups", purchased: false }
      ]
    }),
    methods: {
      saveItem() {
        this.items.push({ label: this.newItem, purchased: false });
        this.newItem = "";
      },
      changeState(newState) {
        this.state = newState;
        this.newItem = "";
      },
      togglePurchased(item) {
        item.purchased = !item.purchased;
      }
    },
    computed: {
      reversedItems() {
        return this.items.slice(0).reverse();
      }
    }
  });

  shoppingList.$mount("#shopping-list");
})({ Vue });
