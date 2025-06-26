
package com.example.shoppingcart;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ShoppingListRepository extends JpaRepository<ShoppingList, Long> {}
public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByShoppingListId(Long shoppingListId);
}
