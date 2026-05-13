window.BENCHMARK_DATA = {
  "lastUpdate": 1778652288610,
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
      },
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
          "id": "416a1abca3cbe7a9814748dc1223652170a328ee",
          "message": "docs: include benchmarks dashboard and add manual dispatch with deploy toggle",
          "timestamp": "2026-05-13T05:33:05Z",
          "url": "https://github.com/redis/jedis/commit/416a1abca3cbe7a9814748dc1223652170a328ee"
        },
        "date": 1778652052629,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 127.009331767912,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 76.62872548762074,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 156.67989667077507,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 61.50314816974655,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 780.2781792817792,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 6875.833935297682,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 318.46132116160913,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 130.45564240242268,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 73.95333421998573,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 156.99752032941169,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 66.59326970973049,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 18228.917846292723,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 1922.97802269504,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 318.52877870356866,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
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
          "id": "416a1abca3cbe7a9814748dc1223652170a328ee",
          "message": "docs: include benchmarks dashboard and add manual dispatch with deploy toggle",
          "timestamp": "2026-05-13T05:33:05Z",
          "url": "https://github.com/redis/jedis/commit/416a1abca3cbe7a9814748dc1223652170a328ee"
        },
        "date": 1778652287841,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 150.26430815670636,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 75.27075609828086,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 184.94136595426681,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 61.31628703172648,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 1009.1137227007497,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 7651.00114850477,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 320.41532077526506,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 155.98976872041212,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 74.20299030266192,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 188.34671836647894,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 58.78788630558599,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 20458.634221459786,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 2231.094230159795,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 329.82833483138313,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}