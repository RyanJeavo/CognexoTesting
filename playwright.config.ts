import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: ['playwright/E2ETests/**/*.test.ts'],
  reporter: 'html',

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: false,
        viewport: { width: 1280, height: 720 },
       },
    },
  ],
});
