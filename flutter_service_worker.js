'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/fonts/MaterialIcons-Regular.otf": "c924a2155971ca9440c15d892024044e",
"assets/images/IconLevelLimit.png": "40908e7c890b37edc943569c7d3704b5",
"assets/images/IconAttack.png": "631e4bb63efe22fd5421ac0327cda3cb",
"assets/images/the-xianzhou-luofu-monster_faction_icon.webp": "52fddc09dbe487824894932db59a8636",
"assets/images/IconImmuneLaceration.png": "d05eaf3a4af5dc111c60bdac12239187",
"assets/images/IconThunderResistanceDelta.png": "235b836fc491f27e17d425f8f222896a",
"assets/images/IconImmuneWind.png": "9a5a391abba0e7c5ddef1e9ba49a522b",
"assets/images/IconHeal.png": "b6e6abab3a857ed23de9efab658e85bf",
"assets/images/stat_fatigue-mstatdef_icon.webp": "f075bf03a7daa5a5aeb42abf0fd4c1bd",
"assets/images/stat_dot_burn-mstatdef_icon.webp": "4da36032a2f93c0aab79a6eb0bb6cc1d",
"assets/images/IconMaxHP.png": "419a2ffe012cdbddb3f0a5d199485f80",
"assets/images/IconAttackPlus.png": "01a46bca70332f20ca0bc354fce26188",
"assets/images/silverwolficon.png": "270f9362313a93055b62187807b5fa29",
"assets/images/IconStatusProbability.png": "e3015472fd9349668d31cfeaebd52eaf",
"assets/images/stat_dot_poison-mstatdef_icon.webp": "fcbb3517a583fe4f9c489a77b0475115",
"assets/images/jarilo-vi-monster_faction_icon.webp": "a7af5306271634f74289ac6dc061b751",
"assets/images/stat_defencedown-mstatdef_icon.webp": "840056a4d3abfee17f3b4dd306f454c8",
"assets/images/damagecalc.jpeg": "0c338997c405c2818a53fcfb579d1e8d",
"assets/images/IconImmuneElectric.png": "dd246f75b40ecfdb851a45e9ec1422a8",
"assets/images/IconImmuneBurn.png": "f4ecf9e2dfccabd55fe3331442050058",
"assets/images/stat_confine-mstatdef_icon.webp": "2bd0512c2ffb08ae3cf9414f5eb55a6f",
"assets/images/IconAvatarRelic.png": "ff2400b311218468977d3207939adf32",
"assets/images/stat_entangle-mstatdef_icon.webp": "524e4b7ec88c9e4e5b64e71731783182",
"assets/images/IconHeart.png": "4429c59c8d6cc41019fb0b50b083493b",
"assets/images/IconBuffTaunt.png": "dadfb0d0d12c72a8ec8643900d548932",
"assets/images/IconRelicGoods.png": "3c66ee17ea35e35c5a6a99198e5b746b",
"assets/images/IconEnergyRecovery.png": "3103816641a71455ca367046cbb17b19",
"assets/images/IconRelicHead.png": "17e153a66b29c880c909a26690de7646",
"assets/images/NoviceAvatarIcon.png": "353ecd9428bee6586a32bb998cf32fca",
"assets/images/IconRelicHands.png": "f9a006d916519f512c0cb12c86f61987",
"assets/images/monster.jpg": "e478c0c4a748c1c3995513ec49aa0388",
"assets/images/IconSpeed.png": "da9d5b96c4d3b38f3dfd223e53739b2c",
"assets/images/IconImaginaryAddedRatio.png": "d41634256404955dbc245f1fc1e4fe4e",
"assets/images/IconCriticalDamage.png": "1707eeadc7fbe7b99a2ffc4db0af4795",
"assets/images/IconIceResistanceDelta.png": "511a87189240f8186e3410ee2cfe8390",
"assets/images/stellaron-hunters-monster_faction_icon.webp": "45c53d24116fab33aa7cb4fc26cb879c",
"assets/images/IconRelicBody.png": "8ac46dd22ab73f12d946ab0a8f078a53",
"assets/images/IconEnergyLimit.png": "0dd4b10d8ef4abe8f1f3f31f0410d6f4",
"assets/images/fragmentum-monsters-monster_faction_icon.webp": "4118e42da75a315fd7d2b23aaf25e70c",
"assets/images/IconImmuneFrozen.png": "d1a5452003dd3fd5b646ec1c2b265ec5",
"assets/images/IconRelicNeck.png": "047fde9cd25ecaecb435efe4a8521f52",
"assets/images/AvatarIcon.png": "e5c2273ec61f3e8458769ac0ded83ead",
"assets/images/applebanner.png": "155772d41b544bf477856fb1387e26ff",
"assets/images/IconFireResistanceDelta.png": "11dd8c2199c9222ea63ab8e9f7861d7c",
"assets/images/effecthit.jpg": "42ae52cb59b77aa67bad2068e0916ca1",
"assets/images/IconImmuneDefenceDown.png": "5789f825344fb623b371a8244c02765e",
"assets/images/IconImmuneSlowDown.png": "9cd37f094858f766417a9ce7199bbfb4",
"assets/images/IconImmuneControl.png": "0fb718ac3ce9dad10953bcdaecd5fe7e",
"assets/images/IconHealRatio.png": "8cd2294123a05611c2ab1cc31aa84685",
"assets/images/antimatter-legion-monster_faction_icon.webp": "31e20d2b3d7f80986d9d110b3af14aa3",
"assets/images/stat_ctrl-mstatdef_icon.webp": "8d43daa4df672164d1d78ead7aedbeed",
"assets/images/microsoftbanner.png": "3c8bc875dd202eeba5aaaf0c6bc3b6de",
"assets/images/IconBreakUp.png": "df6fc9ec81e096bf26b1d3e8b912acf8",
"assets/images/IconImaginaryResistanceDelta.png": "fc3fec979e58c2adc7699f15a87e28c8",
"assets/images/IconImmuneAbnormal.png": "b61052d3a16e8a667dfb12765325f432",
"assets/images/IconCriticalChance.png": "c7739c42eaebb1a889e2037e7665df4f",
"assets/images/IconDefence.png": "2c6522b4166ed7a2d9ef234a9664a555",
"assets/images/IconEmpty.png": "85d0eff5586f93b9e8ba47cae281eb65",
"assets/images/googlebanner.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/images/IconIceAddedRatio.png": "ce5c0cc87fa9ffaad87082afec329ac6",
"assets/images/stat_ctrl_frozen-mstatdef_icon.webp": "6f5dbcbc0f5fbccc25a7638911331713",
"assets/images/cosmos-monster_faction_icon.webp": "df46d8b3a09a4665bd943c753b525ffe",
"assets/images/IconStatusResistance.png": "1b97ff366417251019a819ccab05f688",
"assets/images/IconWindAddedRatio.png": "f4f188b9fb6b8ba029e8db8d8afd0a34",
"assets/images/IconThunderAddedRatio.png": "648188804c6c75b6c1506a9628b04c1e",
"assets/images/IconPhysicalResistanceDelta.png": "d8d4546aec1212f1cf1bd551c6b7cbde",
"assets/images/ShopMaterialsIcon.png": "b3e0b9de6b106b05a41e605a92909199",
"assets/images/stat_dot_electric-mstatdef_icon.webp": "628a1242aa186706b588fd24a1711dab",
"assets/images/IconImmuneCage.png": "11f7d853b14505784a16662fbef80629",
"assets/images/IconQuantumResistanceDelta.png": "4c9831adc4ccfb25c4baef7128d50120",
"assets/images/stat_speeddown-mstatdef_icon.webp": "ee0fbcdc604498be827804cfc2d00ed1",
"assets/images/IconRelicFoot.png": "a8e9e5a90da9afcded4e6aa6af9c030a",
"assets/images/IconFireAddedRatio.png": "f258765dc3a8d5c770301662d9040e61",
"assets/images/IconPhysicalAddedRatio.png": "eff4304b047d5f8332d89d6cf28a11e9",
"assets/images/TeamIcon.png": "7b336eb7498c9237654f28bfab3a54c7",
"assets/images/IconCritical.png": "ee3292a6720e840309e0ccc1fad6a88e",
"assets/images/IconImmuneWeakness.png": "172791ca2d8a4fb4f5ed836309424d41",
"assets/images/simulated-universe-monster_faction_icon.webp": "f0f42d97eea53fba4b20be7bb5efb0a0",
"assets/images/stat_dot_bleed-mstatdef_icon.webp": "783e36e48d3d72561288000684ae9441",
"assets/images/IconAvatarLightCone.png": "93ad8a54e5f9197e244f11b75677e9be",
"assets/images/IconWindResistanceDelta.png": "3163e96f5e6a344b0232262a49fc4428",
"assets/images/IconQuantumAddedRatio.png": "892fc0111235b6c23c183bbd9e7a288d",
"assets/images/icon.png": "b7c033bd11ecb31692541d51db5f6cc4",
"assets/images/IconImmuneTangle.png": "fbba5a546d5a84fafac79e2efbddd698",
"assets/images/other-monster_faction_icon.webp": "5e0f9fd490be89661e7285579fa6e327",
"assets/AssetManifest.json": "0a2f53593b9f008a6c3495a28d7bd05a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2f6d84acd7d32fa8aa26bd2eb71afa8d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "6f57d4731720976ce962cfb285f86c8e",
"assets/langs/ja.json": "1d83a46a7f15dac66858e1682a9e7da7",
"assets/langs/en.json": "f571c9397675cf00299c84ced498cb52",
"assets/langs/zh.json": "1a836169bcc6343948715751600abaad",
"adview.html": "fc624bb8efdf14a05e21cdbd0296f321",
"version.json": "fc06af875a81b21c76adb0648cc160be",
"manifest.json": "90fcc85d83a030e1266dab12da9f686e",
"index.html": "4a72b613811f12eb342866edda384495",
"/": "4a72b613811f12eb342866edda384495",
"favicon.png": "bef983dc1330783006f1e13d67a06fcf",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"adviewshort.html": "5f7cfebcafebbe3c7111f0e65c96f224",
"icons/Icon-192.png": "ec57e04d76a6fe60170a52b577e8b157",
"icons/Icon-maskable-192.png": "ec57e04d76a6fe60170a52b577e8b157",
"icons/Icon-512.png": "f373450a11cc802b74f151caee070ad8",
"icons/Icon-maskable-512.png": "f373450a11cc802b74f151caee070ad8",
"main.dart.js": "cd2b25e5d41b0da495054147dd62ea61",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9"};
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
