module.exports = {
  apps: [{
    name: 'doritos-landing',
    script: 'npm',
    args: 'start -- -p 3896',
    cwd: '/home/gelt/apps/doritos-landing',
    env: {
      NODE_ENV: 'production',
      PORT: 3896,
    },
  }],
}
