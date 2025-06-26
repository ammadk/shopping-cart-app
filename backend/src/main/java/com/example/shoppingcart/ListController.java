
package com.example.shoppingcart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/lists")
public class ListController {

    @Autowired
    private ShoppingListRepository listRepo;

    @Autowired
    private ItemRepository itemRepo;

    @GetMapping
    public List<ShoppingList> getAllLists() {
        return listRepo.findAll();
    }

    @PostMapping
    public ShoppingList createList(@RequestBody ShoppingList list) {
        return listRepo.save(list);
    }

    @PostMapping("/{listId}/items")
    public Item addItem(@PathVariable Long listId, @RequestBody Item item) {
        ShoppingList list = listRepo.findById(listId).orElseThrow();
        item.setShoppingList(list);
        return itemRepo.save(item);
    }

    @GetMapping("/{listId}/items")
    public List<Item> getItems(@PathVariable Long listId) {
        return itemRepo.findByShoppingListId(listId);
    }
}
