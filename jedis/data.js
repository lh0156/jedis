window.BENCHMARK_DATA = {
  "lastUpdate": 1778648871453,
  "repoUrl": "https://github.com/redis/jedis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "ggivo",
            "username": "ggivo",
            "email": "ivo.gaydazhiev@redis.com"
          },
          "committer": {
            "name": "ggivo",
            "username": "ggivo",
            "email": "ivo.gaydazhiev@redis.com"
          },
          "id": "5a01eab25bfce1f96bc604e88deb0d30e8750bf4",
          "message": "push benchmark data to dedicated branch",
          "timestamp": "2026-05-13T04:58:30Z",
          "url": "https://github.com/redis/jedis/commit/5a01eab25bfce1f96bc604e88deb0d30e8750bf4"
        },
        "date": 1778648871028,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 127.50166747775101,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 67.58607396848285,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 153.64589993695012,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 62.44073695138269,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 798.4383504499572,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 7048.069835419583,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 315.8070029837612,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 129.5309857570493,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 73.98714708231714,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 157.8173087370967,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 66.91223007051232,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 16934.744912020564,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 1904.8688932238606,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 341.36217005646995,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}