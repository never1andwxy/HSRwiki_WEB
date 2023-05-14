'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ef306a40391cb36ad53d08f00b3390ab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/IconAttack.png": "631e4bb63efe22fd5421ac0327cda3cb",
"assets/images/IconAttackPlus.png": "01a46bca70332f20ca0bc354fce26188",
"assets/images/IconBreakUp.png": "df6fc9ec81e096bf26b1d3e8b912acf8",
"assets/images/IconBuffTaunt.png": "dadfb0d0d12c72a8ec8643900d548932",
"assets/images/IconCritical.png": "ee3292a6720e840309e0ccc1fad6a88e",
"assets/images/IconCriticalChance.png": "c7739c42eaebb1a889e2037e7665df4f",
"assets/images/IconCriticalDamage.png": "1707eeadc7fbe7b99a2ffc4db0af4795",
"assets/images/IconDefence.png": "2c6522b4166ed7a2d9ef234a9664a555",
"assets/images/IconEmpty.png": "85d0eff5586f93b9e8ba47cae281eb65",
"assets/images/IconEnergyLimit.png": "0dd4b10d8ef4abe8f1f3f31f0410d6f4",
"assets/images/IconEnergyRecovery.png": "3103816641a71455ca367046cbb17b19",
"assets/images/IconFireAddedRatio.png": "f258765dc3a8d5c770301662d9040e61",
"assets/images/IconFireResistanceDelta.png": "11dd8c2199c9222ea63ab8e9f7861d7c",
"assets/images/IconHeal.png": "b6e6abab3a857ed23de9efab658e85bf",
"assets/images/IconHealRatio.png": "8cd2294123a05611c2ab1cc31aa84685",
"assets/images/IconHeart.png": "4429c59c8d6cc41019fb0b50b083493b",
"assets/images/IconIceAddedRatio.png": "ce5c0cc87fa9ffaad87082afec329ac6",
"assets/images/IconIceResistanceDelta.png": "511a87189240f8186e3410ee2cfe8390",
"assets/images/IconImaginaryAddedRatio.png": "d41634256404955dbc245f1fc1e4fe4e",
"assets/images/IconImaginaryResistanceDelta.png": "fc3fec979e58c2adc7699f15a87e28c8",
"assets/images/IconImmuneAbnormal.png": "b61052d3a16e8a667dfb12765325f432",
"assets/images/IconImmuneBurn.png": "f4ecf9e2dfccabd55fe3331442050058",
"assets/images/IconImmuneCage.png": "11f7d853b14505784a16662fbef80629",
"assets/images/IconImmuneControl.png": "0fb718ac3ce9dad10953bcdaecd5fe7e",
"assets/images/IconImmuneDefenceDown.png": "5789f825344fb623b371a8244c02765e",
"assets/images/IconImmuneElectric.png": "dd246f75b40ecfdb851a45e9ec1422a8",
"assets/images/IconImmuneFrozen.png": "d1a5452003dd3fd5b646ec1c2b265ec5",
"assets/images/IconImmuneLaceration.png": "d05eaf3a4af5dc111c60bdac12239187",
"assets/images/IconImmuneSlowDown.png": "9cd37f094858f766417a9ce7199bbfb4",
"assets/images/IconImmuneTangle.png": "fbba5a546d5a84fafac79e2efbddd698",
"assets/images/IconImmuneWeakness.png": "172791ca2d8a4fb4f5ed836309424d41",
"assets/images/IconImmuneWind.png": "9a5a391abba0e7c5ddef1e9ba49a522b",
"assets/images/IconLevelLimit.png": "40908e7c890b37edc943569c7d3704b5",
"assets/images/IconMaxHP.png": "419a2ffe012cdbddb3f0a5d199485f80",
"assets/images/IconPhysicalAddedRatio.png": "eff4304b047d5f8332d89d6cf28a11e9",
"assets/images/IconPhysicalResistanceDelta.png": "d8d4546aec1212f1cf1bd551c6b7cbde",
"assets/images/IconQuantumAddedRatio.png": "892fc0111235b6c23c183bbd9e7a288d",
"assets/images/IconQuantumResistanceDelta.png": "4c9831adc4ccfb25c4baef7128d50120",
"assets/images/IconSpeed.png": "da9d5b96c4d3b38f3dfd223e53739b2c",
"assets/images/IconStatusProbability.png": "e3015472fd9349668d31cfeaebd52eaf",
"assets/images/IconStatusResistance.png": "1b97ff366417251019a819ccab05f688",
"assets/images/IconThunderAddedRatio.png": "648188804c6c75b6c1506a9628b04c1e",
"assets/images/IconThunderResistanceDelta.png": "235b836fc491f27e17d425f8f222896a",
"assets/images/IconWindAddedRatio.png": "f4f188b9fb6b8ba029e8db8d8afd0a34",
"assets/images/IconWindResistanceDelta.png": "3163e96f5e6a344b0232262a49fc4428",
"assets/langs/en.json": "5a7da771080179e02357049a38fc1934",
"assets/langs/ja.json": "28609ea77f27e129f63e98ac120974f6",
"assets/langs/zh.json": "7d9f5a0bf9aa331a5230a5936d1eae13",
"assets/NOTICES": "3275ed5ba8e41da17547c80322c3f8d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "feea8328536e6c4d4826b82aa019e0ad",
"/": "feea8328536e6c4d4826b82aa019e0ad",
"main.dart.js": "34d9c541e051aa2060139b8d71f43810",
"manifest.json": "f5bf55b6177a33de1b538064d015ed9c",
"version.json": "004b218447b78ce0ad253788c3c47451"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
