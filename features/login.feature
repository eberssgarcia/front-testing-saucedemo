Feature: Login en Sauce Demo
  Como cliente de Sauce Demo
  Quiero iniciar sesión
  Para poder comprar productos

  Background:
    Given que estoy en la página de inicio de sesión

@tag1 @regresion
  Scenario: Login exitoso con usuario estándar
    When inicio sesión con usuario "standard_user" y contraseña "secret_sauce"
    Then debería ver la página de productos

@tag2 @regresion
  Scenario: Usuario bloqueado no puede iniciar sesión
    When inicio sesión con usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error que contiene "locked out"

@tag3 @regresion
  Scenario: Credenciales inválidas
    When inicio sesión con usuario "usuario_incorrecto" y contraseña "clave_erronea"
    Then debería ver un mensaje de error que contiene "Username and password do not match"
