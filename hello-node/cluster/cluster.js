// 主要解决问题
// 故障恢复
// 多核利利⽤用
// http://www.sohu.com/a/247732550_796914
// 多进程共享端⼝口

const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus().length
const process = require('process')

const workers = {}

if (cluster.isMaster) {
  cluster.on('death', function(worker) {
    console.log('death')
    delete workers[worker.pid]
    worker = cluster.fork()
    workers[worker.pid] = worker
  })

  // 主进程
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork()
    workers[worker.pid] = worker
  }
} else {
  // 工作进程
  const app = require('./app')
  app.use((ctx, next) => {
    console.log('worker' + cluster.worker.id + ', pid' + process.pid)
    next()
  })
  app.listen(3000)
}

// 当进程终止
process.on('SIGTERM', function() {
  console.log('exit')
  for (const pid in workers) {
    process.kill(pid)
  }
  process.exit(0)
})
