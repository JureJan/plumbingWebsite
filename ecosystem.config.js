module.exports = {
    apps: [
      {
        name: 'Ellas',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        max_restarts: 5,    // Stop after 5 crashes
        min_uptime: 5000,   // Consider app "stable" after 5s
        env_local: {
          APP_ENV: 'local' // APP_ENV=local
        },
        env_dev: {
          APP_ENV: 'dev' // APP_ENV=dev
        },
        env_prod: {
          APP_ENV: 'prod' // APP_ENV=prod
        }
      }
    ]
  }