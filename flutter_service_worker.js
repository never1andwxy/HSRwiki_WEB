'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "d1106c63ee599107b68f80593b93a6a2",
"/": "d1106c63ee599107b68f80593b93a6a2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"adview.html": "fc624bb8efdf14a05e21cdbd0296f321",
"adviewshort.html": "5f7cfebcafebbe3c7111f0e65c96f224",
"favicon.png": "bef983dc1330783006f1e13d67a06fcf",
"main.dart.js": "5c80138564956134ac3b2126cd68599a",
"version.json": "ece4e1c01fc77b2afa3369dad640a141",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"manifest.json": "90fcc85d83a030e1266dab12da9f686e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "6b33e320b703830ba52cea1db71c7b7b",
"assets/AssetManifest.bin": "9a519ac7fb10c4bb81f547219e23f24c",
"assets/AssetManifest.json": "8b4f7fa68012d4a939ed9be6391df3e4",
"assets/NOTICES": "61d303b3fbbea8896242aaf34ceb78ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/langs/ja.json": "4b3ae110799f63e4ebc5d5e3685833c3",
"assets/langs/zh.json": "eb2bbeb42de26a85d04ecde0bec6ebd2",
"assets/langs/en.json": "c4edb18d376f3b4c340fb5a46079a64f",
"assets/images/IconSpeed.png": "da9d5b96c4d3b38f3dfd223e53739b2c",
"assets/images/effecthit.jpg": "42ae52cb59b77aa67bad2068e0916ca1",
"assets/images/IconHeart.png": "4429c59c8d6cc41019fb0b50b083493b",
"assets/images/IconIceAddedRatio.png": "ce5c0cc87fa9ffaad87082afec329ac6",
"assets/images/IconImmuneDefenceDown.png": "5789f825344fb623b371a8244c02765e",
"assets/images/NoviceAvatarIcon.png": "353ecd9428bee6586a32bb998cf32fca",
"assets/images/IconMaxHP.png": "419a2ffe012cdbddb3f0a5d199485f80",
"assets/images/IconFireResistanceDelta.png": "11dd8c2199c9222ea63ab8e9f7861d7c",
"assets/images/IconDefence.png": "2c6522b4166ed7a2d9ef234a9664a555",
"assets/images/IconImmuneWeakness.png": "172791ca2d8a4fb4f5ed836309424d41",
"assets/images/IconFireAddedRatio.png": "f258765dc3a8d5c770301662d9040e61",
"assets/images/IconHeal.png": "b6e6abab3a857ed23de9efab658e85bf",
"assets/images/IconEnergyRecovery.png": "3103816641a71455ca367046cbb17b19",
"assets/images/IconStatusProbability.png": "e3015472fd9349668d31cfeaebd52eaf",
"assets/images/IconCritical.png": "ee3292a6720e840309e0ccc1fad6a88e",
"assets/images/IconAttackPlus.png": "01a46bca70332f20ca0bc354fce26188",
"assets/images/IconWindResistanceDelta.png": "3163e96f5e6a344b0232262a49fc4428",
"assets/images/IconImmuneTangle.png": "fbba5a546d5a84fafac79e2efbddd698",
"assets/images/IconLevelLimit.png": "40908e7c890b37edc943569c7d3704b5",
"assets/images/IconImaginaryAddedRatio.png": "d41634256404955dbc245f1fc1e4fe4e",
"assets/images/IconBuffTaunt.png": "dadfb0d0d12c72a8ec8643900d548932",
"assets/images/IconQuantumResistanceDelta.png": "4c9831adc4ccfb25c4baef7128d50120",
"assets/images/IconAvatarRelic.png": "ff2400b311218468977d3207939adf32",
"assets/images/IconQuantumAddedRatio.png": "892fc0111235b6c23c183bbd9e7a288d",
"assets/images/IconHealRatio.png": "8cd2294123a05611c2ab1cc31aa84685",
"assets/images/IconImmuneElectric.png": "dd246f75b40ecfdb851a45e9ec1422a8",
"assets/images/IconImmuneSlowDown.png": "9cd37f094858f766417a9ce7199bbfb4",
"assets/images/IconCriticalChance.png": "c7739c42eaebb1a889e2037e7665df4f",
"assets/images/IconImmuneAbnormal.png": "b61052d3a16e8a667dfb12765325f432",
"assets/images/IconImmuneControl.png": "0fb718ac3ce9dad10953bcdaecd5fe7e",
"assets/images/IconBreakUp.png": "df6fc9ec81e096bf26b1d3e8b912acf8",
"assets/images/IconIceResistanceDelta.png": "511a87189240f8186e3410ee2cfe8390",
"assets/images/TeamIcon.png": "7b336eb7498c9237654f28bfab3a54c7",
"assets/images/IconEmpty.png": "85d0eff5586f93b9e8ba47cae281eb65",
"assets/images/IconImmuneCage.png": "11f7d853b14505784a16662fbef80629",
"assets/images/IconThunderAddedRatio.png": "648188804c6c75b6c1506a9628b04c1e",
"assets/images/icon.png": "b7c033bd11ecb31692541d51db5f6cc4",
"assets/images/IconImmuneWind.png": "9a5a391abba0e7c5ddef1e9ba49a522b",
"assets/images/AvatarIcon.png": "e5c2273ec61f3e8458769ac0ded83ead",
"assets/images/IconAttack.png": "631e4bb63efe22fd5421ac0327cda3cb",
"assets/images/IconImmuneFrozen.png": "d1a5452003dd3fd5b646ec1c2b265ec5",
"assets/images/IconWindAddedRatio.png": "f4f188b9fb6b8ba029e8db8d8afd0a34",
"assets/images/IconEnergyLimit.png": "0dd4b10d8ef4abe8f1f3f31f0410d6f4",
"assets/images/IconPhysicalResistanceDelta.png": "d8d4546aec1212f1cf1bd551c6b7cbde",
"assets/images/IconCriticalDamage.png": "1707eeadc7fbe7b99a2ffc4db0af4795",
"assets/images/IconThunderResistanceDelta.png": "235b836fc491f27e17d425f8f222896a",
"assets/images/IconImmuneLaceration.png": "d05eaf3a4af5dc111c60bdac12239187",
"assets/images/IconStatusResistance.png": "1b97ff366417251019a819ccab05f688",
"assets/images/ShopMaterialsIcon.png": "b3e0b9de6b106b05a41e605a92909199",
"assets/images/IconAvatarLightCone.png": "93ad8a54e5f9197e244f11b75677e9be",
"assets/images/IconPhysicalAddedRatio.png": "eff4304b047d5f8332d89d6cf28a11e9",
"assets/images/IconImaginaryResistanceDelta.png": "fc3fec979e58c2adc7699f15a87e28c8",
"assets/images/silverwolficon.png": "270f9362313a93055b62187807b5fa29",
"assets/images/IconImmuneBurn.png": "f4ecf9e2dfccabd55fe3331442050058",
"icons/Icon-maskable-192.png": "ec57e04d76a6fe60170a52b577e8b157",
"icons/Icon-192.png": "ec57e04d76a6fe60170a52b577e8b157",
"icons/Icon-512.png": "f373450a11cc802b74f151caee070ad8",
"icons/Icon-maskable-512.png": "f373450a11cc802b74f151caee070ad8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
