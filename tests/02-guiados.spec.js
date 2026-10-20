const { test, expect } = require('@playwright/test');
test.skip('R01 - Rechaza credenciales incorrectas',async ({page})=>{ // TODO: quitar .skip, abrir '/', escribir credenciales inválidas, hacer clic y comprobar el mensaje
});
test.skip('R02 - Filtra productos por búsqueda',async ({page})=>{ // TODO: buscar "Pizza" y verificar que Pizza aparece y Tacos no aparece
});
test.skip('R03 - Actualiza contador del carrito',async ({page})=>{ // TODO: agregar dos productos y verificar contador igual a 2
});
test.skip('R04 - Impide pedido sin productos',async ({page})=>{ // TODO: confirmar carrito vacío y comprobar mensaje de advertencia
});
