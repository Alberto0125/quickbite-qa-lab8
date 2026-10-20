const { test, expect } = require('@playwright/test');
test('EJ01 - La página muestra el título', async ({ page }) => {await page.goto('/');await expect(page.getByRole('heading',{name:'QuickBite QA'})).toBeVisible()});
test('EJ02 - Acceso con credenciales válidas', async ({ page }) => {await page.goto('/');await page.getByRole('textbox',{name:'Usuario'}).fill('demo');await page.getByRole('textbox',{name:'Contraseña'}).fill('demo123');await page.getByRole('button',{name:'Ingresar'}).click();await expect(page.locator('#login-result')).toHaveText('Bienvenido')});
