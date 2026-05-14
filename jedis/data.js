window.BENCHMARK_DATA = {
  "lastUpdate": 1778739495889,
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
          "id": "efeaa5e2c788fb39c5bfc56ffc1a07dad62936f7",
          "message": "remove already migrated ProtocolBenchmark.java",
          "timestamp": "2026-05-13T14:03:37Z",
          "url": "https://github.com/redis/jedis/commit/efeaa5e2c788fb39c5bfc56ffc1a07dad62936f7"
        },
        "date": 1778686861878,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.get",
            "value": 13087.66908327542,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedGet",
            "value": 713074.0680594448,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedSet",
            "value": 609541.93833657,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.set",
            "value": 13032.878962938488,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.get",
            "value": 12967.921621898895,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedGet",
            "value": 709508.8742978254,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedSet",
            "value": 599932.9895116886,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.set",
            "value": 12597.552019416118,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.get",
            "value": 71719.36731182996,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedGet",
            "value": 1637074.5482157313,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedSet",
            "value": 1242460.765154608,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.set",
            "value": 76577.38842530723,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.get",
            "value": 58725.56904741681,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedGet",
            "value": 1584082.3037514235,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedSet",
            "value": 1212723.189120872,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.set",
            "value": 55209.6606661857,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotBytes",
            "value": 33.14228226509177,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotString",
            "value": 76.76654309528651,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 155.46738258573887,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 63.43135035052529,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 189.99052458224656,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 48.244523022611375,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 1661.098372014759,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 8143.832378916559,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 314.2353521439698,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 153.32938063182854,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 67.1236103730561,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 189.1436282615805,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 48.64853467285887,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 21440.719812347288,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 2257.441058684126,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 328.00364249102734,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.decodeBytesToString",
            "value": 42.27166681612287,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeMany",
            "value": 292.64554238354674,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeStringToBytes",
            "value": 49.37294492245438,
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
          "id": "8af4e431761201fc577d1a48db3173c0234d5595",
          "message": "add  GetSetMixedR90W10Benchmarks\n  Workload benchmark: mixed GET/SET at 90% read / 10% write.\n  Provides a single comparable throughput number per client configuration:",
          "timestamp": "2026-05-13T16:58:02Z",
          "url": "https://github.com/redis/jedis/commit/8af4e431761201fc577d1a48db3173c0234d5595"
        },
        "date": 1778692757049,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.get",
            "value": 12880.934550459797,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedGet",
            "value": 689193.0667542821,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedSet",
            "value": 593132.7085398331,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.set",
            "value": 12664.61356325302,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.get",
            "value": 12753.495269176934,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedGet",
            "value": 692784.9350003765,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedSet",
            "value": 598265.3521850866,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.set",
            "value": 12597.368514910138,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.get",
            "value": 71291.45193539772,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedGet",
            "value": 1582448.8541489213,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedSet",
            "value": 1224231.390122904,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.set",
            "value": 71472.55197226314,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.get",
            "value": 54468.423281789655,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedGet",
            "value": 1548581.5499847909,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedSet",
            "value": 1200548.1861079012,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.set",
            "value": 54378.68248090078,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisT1.workload",
            "value": 12875.969064083489,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT1.workload",
            "value": 19983.30208370764,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT8.workload",
            "value": 100041.95361717793,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT1.workload",
            "value": 12807.856166669008,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT8.workload",
            "value": 54299.07332965058,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotBytes",
            "value": 33.79173754821609,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotString",
            "value": 77.10409801925528,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 160.9348609957707,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 63.56447461443007,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 193.98365471836723,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 47.14196811387585,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 1787.2547422537705,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 8151.9060624026115,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 320.0763682329789,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 160.4598720357405,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 65.71711158045652,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 190.6001975426212,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 48.7640194621142,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 21795.887403836863,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 2269.3177658942136,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 317.00322624438206,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.decodeBytesToString",
            "value": 42.41266282851521,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeMany",
            "value": 297.2235014771717,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeStringToBytes",
            "value": 49.53531155148066,
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
          "id": "0f9d5469d9877f46268d36a25a2464221a7cc17f",
          "message": "migrate PoolBenchmark.java",
          "timestamp": "2026-05-13T17:30:09Z",
          "url": "https://github.com/redis/jedis/commit/0f9d5469d9877f46268d36a25a2464221a7cc17f"
        },
        "date": 1778694795742,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.get",
            "value": 13494.245587759791,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedGet",
            "value": 704962.0969291924,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedSet",
            "value": 604301.1484636674,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.set",
            "value": 13067.332488710506,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.get",
            "value": 13196.204481783756,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedGet",
            "value": 709401.8536109093,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedSet",
            "value": 604691.0276943531,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.set",
            "value": 11707.82375536126,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.get",
            "value": 68436.56352670172,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedGet",
            "value": 1554458.036903669,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedSet",
            "value": 1186502.7595649962,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.set",
            "value": 73140.36986192707,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.get",
            "value": 54042.70479702519,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedGet",
            "value": 1517269.1135505638,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedSet",
            "value": 1225166.9681014873,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.set",
            "value": 54743.403453467996,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT1.workload",
            "value": 12196.778623723614,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT8.workload",
            "value": 49342.02372141487,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisT1.workload",
            "value": 12520.353625906433,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT1.workload",
            "value": 17999.46942979034,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT8.workload",
            "value": 96536.52001511845,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT1.workload",
            "value": 11732.904919596218,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT8.workload",
            "value": 53146.77507895355,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotBytes",
            "value": 33.173195144293004,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotString",
            "value": 78.76166354145536,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 173.03055855847478,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 64.17718254762704,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 217.26923902976614,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 50.2160027599735,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 2450.863966804924,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 8814.513235814511,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 366.4385998004303,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 198.08764763411475,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 78.07547897966006,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 241.1871613063644,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 66.80114082387654,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 24490.277604713636,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 2465.2132651505735,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 364.0639762335024,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.decodeBytesToString",
            "value": 43.762905633345625,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeMany",
            "value": 313.3649773730893,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeStringToBytes",
            "value": 52.374898849203,
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
          "id": "a300a3eaab6b4c25808a39f22c619caf1429b1d1",
          "message": "test(jmh): add PubSubPushBenchmark for end-to-end publish→onMessage round-trip throughput",
          "timestamp": "2026-05-13T18:13:54Z",
          "url": "https://github.com/redis/jedis/commit/a300a3eaab6b4c25808a39f22c619caf1429b1d1"
        },
        "date": 1778697438715,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.get",
            "value": 11173.613377466207,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedGet",
            "value": 649667.3431318568,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedSet",
            "value": 570384.8228471291,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.set",
            "value": 11181.259401534815,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.get",
            "value": 10956.915413922905,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedGet",
            "value": 642068.1691943218,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedSet",
            "value": 569702.6530514207,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.set",
            "value": 10897.683694291141,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.get",
            "value": 49170.15250734159,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedGet",
            "value": 1559039.4320945,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedSet",
            "value": 1204924.1332106364,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.set",
            "value": 49108.834791771194,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.get",
            "value": 49940.49065218519,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedGet",
            "value": 1439077.8302027346,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedSet",
            "value": 1119646.855505275,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.set",
            "value": 36639.386073954425,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.pubsub.PubSubPushBenchmark.publishAndReceive",
            "value": 6968.471542963734,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT1.workload",
            "value": 10962.844886067449,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT8.workload",
            "value": 36648.552358891735,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisT1.workload",
            "value": 11094.73511481537,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT1.workload",
            "value": 17106.655576993373,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT8.workload",
            "value": 72356.11796508852,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT1.workload",
            "value": 11037.079840168124,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT8.workload",
            "value": 36294.89107427876,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotBytes",
            "value": 38.82633875976687,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotString",
            "value": 82.11723526818993,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 128.63579393855724,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 66.08939643427911,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 160.7661311039357,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 64.75017249303218,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 796.8835455389492,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 7756.975670436897,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 308.432235522044,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 130.87940137588464,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 74.62781810217076,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 159.4332147694054,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 63.03866200569812,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 16942.04670535068,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 1909.8515874418458,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 316.7162259016354,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.decodeBytesToString",
            "value": 40.95722517827956,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeMany",
            "value": 248.73670801193035,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeStringToBytes",
            "value": 43.094294767457775,
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
          "id": "a300a3eaab6b4c25808a39f22c619caf1429b1d1",
          "message": "test(jmh): add PubSubPushBenchmark for end-to-end publish→onMessage round-trip throughput",
          "timestamp": "2026-05-13T18:13:54Z",
          "url": "https://github.com/redis/jedis/commit/a300a3eaab6b4c25808a39f22c619caf1429b1d1"
        },
        "date": 1778735764282,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.get",
            "value": 11275.627188382156,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedGet",
            "value": 649434.2804575987,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedSet",
            "value": 571326.6770158185,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.set",
            "value": 11098.99744038402,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.get",
            "value": 11002.841016977665,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedGet",
            "value": 651180.0025251963,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedSet",
            "value": 568866.0569316046,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.set",
            "value": 10524.995910141059,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.get",
            "value": 50113.57413724917,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedGet",
            "value": 1577366.418117513,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedSet",
            "value": 1216085.292361326,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.set",
            "value": 47584.07368857891,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.get",
            "value": 37126.02901158459,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedGet",
            "value": 1408873.7353470917,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedSet",
            "value": 1113131.275807914,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.set",
            "value": 36727.37353202742,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.pubsub.PubSubPushBenchmark.publishAndReceive",
            "value": 6987.228116354924,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT1.workload",
            "value": 11012.035559307926,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT8.workload",
            "value": 36769.05081340564,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisT1.workload",
            "value": 11197.699016496204,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT1.workload",
            "value": 17050.568864002104,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT8.workload",
            "value": 72619.47346100763,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT1.workload",
            "value": 10973.425195814152,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT8.workload",
            "value": 36764.96508486155,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotBytes",
            "value": 38.936342392541356,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotString",
            "value": 82.1523149604914,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 124.7014777878067,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 66.58386867266076,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 157.39522348121,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 63.23049736534508,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 769.3310760502983,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 6988.438406495127,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 311.62077084519484,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 130.09746234980244,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 73.81364869427891,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 156.76189910935918,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 60.71245593989421,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 17817.3040711931,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 1924.5900911101471,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 314.7421009460528,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.decodeBytesToString",
            "value": 41.314790571174086,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeMany",
            "value": 248.26881661821326,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeStringToBytes",
            "value": 43.165698240563785,
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
          "id": "a300a3eaab6b4c25808a39f22c619caf1429b1d1",
          "message": "test(jmh): add PubSubPushBenchmark for end-to-end publish→onMessage round-trip throughput",
          "timestamp": "2026-05-13T18:13:54Z",
          "url": "https://github.com/redis/jedis/commit/a300a3eaab6b4c25808a39f22c619caf1429b1d1"
        },
        "date": 1778739495543,
        "tool": "jmh",
        "benches": [
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.get",
            "value": 8811.546033806313,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedGet",
            "value": 537601.9749823555,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.pipelinedSet",
            "value": 482785.2504457968,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.JedisGetSetBenchmark.set",
            "value": 8678.1562196341,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.get",
            "value": 8630.274688262656,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedGet",
            "value": 549063.779193398,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.pipelinedSet",
            "value": 481186.9679880108,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark1Thread.set",
            "value": 8507.534970464909,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.get",
            "value": 46416.38161196589,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedGet",
            "value": 1473615.837287574,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.pipelinedSet",
            "value": 1117329.4483877693,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark64Threads.set",
            "value": 44272.73027245053,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 64"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.get",
            "value": 32029.532240154345,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedGet",
            "value": 1270581.3393462475,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.pipelinedSet",
            "value": 1002422.4110267933,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.RedisClientGetSetBenchmark.RedisClientGetSetBenchmark8Threads.set",
            "value": 31502.932085112192,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.pubsub.PubSubPushBenchmark.publishAndReceive",
            "value": 6481.460480804982,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT1.workload",
            "value": 8489.155477332064,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisPoolT8.workload",
            "value": 31608.431460078835,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.JedisT1.workload",
            "value": 8642.577606212244,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT1.workload",
            "value": 13935.106584892366,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientCSCT8.workload",
            "value": 62414.53618030124,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT1.workload",
            "value": 8514.244045506628,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.workload.GetSetMixedR90W10Benchmark.RedisClientT8.workload",
            "value": 31718.65897561759,
            "unit": "ops/s",
            "extra": "iterations: 5\nforks: 2\nthreads: 8"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotBytes",
            "value": 35.938535151098705,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.CRC16Benchmark.getSlotString",
            "value": 97.34361115210466,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadArray",
            "value": 148.0760789994612,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadBulkString",
            "value": 76.33938285557876,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadMultiBulkResponse",
            "value": 185.04953500621437,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.cacheAwareReadSimpleString",
            "value": 63.63190872008221,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.encodeSetCommand",
            "value": 1040.3127335316694,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processLargePushInvalidation",
            "value": 7671.554111271939,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.processSinglePushInvalidation",
            "value": 340.86925285116183,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readArray",
            "value": 148.4928197207002,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readBulkString",
            "value": 74.17217852671907,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readMultiBulkResponse",
            "value": 184.03971747393734,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readSimpleString",
            "value": 57.909768891326806,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith100PushMessages",
            "value": 21063.758042369354,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith10PushMessages",
            "value": 2238.6641798412084,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.ProtocolReadBenchmark.readWith1PushMessage",
            "value": 326.01554833885166,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.decodeBytesToString",
            "value": 56.47771784030717,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeMany",
            "value": 373.6670502778844,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "redis.clients.jedis.benchmark.SafeEncoderBenchmark.encodeStringToBytes",
            "value": 60.87164981433507,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}