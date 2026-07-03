module.exports = {
  apps: [
    {
      name: "olmat-client",
      script: "yarn",
      args: "run start",
      cwd: "/root/olmat/olmat-client",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "700M",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
