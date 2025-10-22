import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: 'html',

  projects: [
    {
      name: 'e2e',
      testDir: './playwright/E2ETests',
      use: { 
        ...devices['Desktop Chrome'],
        headless: false,
        viewport: { width: 1280, height: 720 },
        launchOptions: {
          slowMo: 100
        }
       },
    },
    {
      name: 'api',
      testDir: './playwright/APITests',
    },
  ],
});
