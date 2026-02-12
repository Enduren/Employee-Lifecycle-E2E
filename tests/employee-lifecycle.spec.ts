import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/loginPage';
import { DashboardPage } from '../Page/dashboardPage';

test.describe('Employee Lifecycle E2E', () => {

  test('should login, add a new employee, and verify record', async ({ page }) => {
    const loginPage= new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    
    // const firstName = 'John';
    // const lastName = `Doe_${Date.now()}`;

    // 1. Login
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    await page.waitForTimeout(5000)

    //Verify text in Dashboard page
    await dashboardPage.checkDashboardText()

    // 2. Navigate to PIM

    // 3. Add Employee (First Name, Last Name, ID)

    // 4. Save and Search for the new employee

    // 5. Assert the employee appears in the list
  });

});