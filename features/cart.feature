Feature: Carrito de compras
  Como cliente de Sauce Demo
  Quiero agregar productos al carrito y verlos
  Para confirmar mi selección

@tag4 @regresion
  Scenario: Agregar un producto al carrito
    Given que estoy autenticado como "standard_user" con "secret_sauce"
    When agrego el producto "Sauce Labs Backpack" al carrito
    Then el badge del carrito debería mostrar 1
    When voy al carrito
    Then debería ver en el carrito el producto "Sauce Labs Backpack"
