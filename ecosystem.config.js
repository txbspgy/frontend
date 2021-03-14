module.exports = {
  apps: [
    {
      name: 'lqYun',
      script: 'npm', // 若使用cluster模式，必须是启动文件入口，不可通过npm启动
      args: 'run start', // 传递给脚本的参数
      autorestart: true, // 开启自动重启
      ignore_watch: [
        // 不监听的文件
        'node_modules',
        'logs'
      ],
      max_memory_restart: '1024M',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  // deploy: {
  //   // 项目信息
  //   // 下面的配置是我用什么用户登录哪个服务器，从哪拉代码，项目存到什么位置。拉完执行的脚本是啥
  //   production: {
  //     user: 'root', // 你的服务器登录名
  //     host: '119.27.163.168', // 服务器 IP
  //     port: '22', // 服务器登录端口，默认 22
  //     ref: 'origin/master',
  //     ssh_options: 'StrictHostKeyChecking=no', // ssh权限
  //     repo: 'https://gitee.com/zhongqiang1839/nuxt-blog.git', // 仓库地址
  //     path: '/usr/fengzhongqiang/nuxt-blog',
  //     'pre-deploy': 'git pull', // 发布前的操作
  //     'post-deploy':
  //       'npm install &&  npm run build && pm2 stop server  && pm2 start ecosystem.config.js --env production'
  //   }
  // }
}
