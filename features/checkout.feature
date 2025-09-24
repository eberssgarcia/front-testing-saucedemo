Feature: Checkout
  Como cliente de Sauce Demo
  Quiero completar la compra
  Para adquirir mis productos

@tag5 @regresion
  Scenario: Flujo de compra completo
    Given que estoy autenticado como "standard_user" con "secret_sauce"
    When voy al carrito
    When agrego el producto "Sauce Labs Backpack" al carrito
    When voy al carrito
    And inicio el checkout
    And completo mis datos: nombre "Eber", apellido "QA", código "15001"
    Then veo el resumen y finalizo la compra
    And debería ver la confirmación de compra
