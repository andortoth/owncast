if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-404b27ce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/X-LvCYYo4AA5S9R7VGd8N/_buildManifest.js",revision:"ca4ba6a485dd690ea991d5bf9ef1869a"},{url:"/_next/static/X-LvCYYo4AA5S9R7VGd8N/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1008.9daae5876531e2ab.js",revision:"9daae5876531e2ab"},{url:"/_next/static/chunks/1053.adb29a47c34b267a.js",revision:"adb29a47c34b267a"},{url:"/_next/static/chunks/1084.8bd09a422bf924f1.js",revision:"8bd09a422bf924f1"},{url:"/_next/static/chunks/127-2cc69b340c4ef6b7.js",revision:"2cc69b340c4ef6b7"},{url:"/_next/static/chunks/1377.b35436ad0fcaf01b.js",revision:"b35436ad0fcaf01b"},{url:"/_next/static/chunks/1386.cd1d89d295d1f781.js",revision:"cd1d89d295d1f781"},{url:"/_next/static/chunks/1390.aa11066f08aae471.js",revision:"aa11066f08aae471"},{url:"/_next/static/chunks/1398.f61fc28ca4c2dc28.js",revision:"f61fc28ca4c2dc28"},{url:"/_next/static/chunks/1446.729b459281b981b9.js",revision:"729b459281b981b9"},{url:"/_next/static/chunks/1460.b231e07101da2e21.js",revision:"b231e07101da2e21"},{url:"/_next/static/chunks/1470.1715519bd4a2b0ee.js",revision:"1715519bd4a2b0ee"},{url:"/_next/static/chunks/1557.66a87b622f76026a.js",revision:"66a87b622f76026a"},{url:"/_next/static/chunks/1576.ebedce47e3bdd0b1.js",revision:"ebedce47e3bdd0b1"},{url:"/_next/static/chunks/1627-ed5fb220c50269d5.js",revision:"ed5fb220c50269d5"},{url:"/_next/static/chunks/1639.a69f56d8e2858f44.js",revision:"a69f56d8e2858f44"},{url:"/_next/static/chunks/1650.06a77268379b94b2.js",revision:"06a77268379b94b2"},{url:"/_next/static/chunks/1660.76cc05d00e5034ad.js",revision:"76cc05d00e5034ad"},{url:"/_next/static/chunks/1664.27d4ee7d48ce7ca4.js",revision:"27d4ee7d48ce7ca4"},{url:"/_next/static/chunks/1706.cc34054ebca747bc.js",revision:"cc34054ebca747bc"},{url:"/_next/static/chunks/177.3359462c66b636ba.js",revision:"3359462c66b636ba"},{url:"/_next/static/chunks/1770.ffd38031b937c10a.js",revision:"ffd38031b937c10a"},{url:"/_next/static/chunks/1834.9878f9b475ef6511.js",revision:"9878f9b475ef6511"},{url:"/_next/static/chunks/1873.ad239337a916524b.js",revision:"ad239337a916524b"},{url:"/_next/static/chunks/1880-bc3e9d43feb38733.js",revision:"bc3e9d43feb38733"},{url:"/_next/static/chunks/1920.69952d11b23d14f9.js",revision:"69952d11b23d14f9"},{url:"/_next/static/chunks/1975.52881ddfdd2890e0.js",revision:"52881ddfdd2890e0"},{url:"/_next/static/chunks/1998.96634e929488af66.js",revision:"96634e929488af66"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2054.9f1429b76f71b6ea.js",revision:"9f1429b76f71b6ea"},{url:"/_next/static/chunks/2062.0caebfb323f87e6d.js",revision:"0caebfb323f87e6d"},{url:"/_next/static/chunks/2119.56737871073263a3.js",revision:"56737871073263a3"},{url:"/_next/static/chunks/2136.d79aae5ef8b027c6.js",revision:"d79aae5ef8b027c6"},{url:"/_next/static/chunks/2159.d900ca825717a9dd.js",revision:"d900ca825717a9dd"},{url:"/_next/static/chunks/2200.984fffa57a9d939c.js",revision:"984fffa57a9d939c"},{url:"/_next/static/chunks/2236.fc99023e6c42898a.js",revision:"fc99023e6c42898a"},{url:"/_next/static/chunks/228.bcd421992bab4a0b.js",revision:"bcd421992bab4a0b"},{url:"/_next/static/chunks/2314.ce3a0e1828ad2d06.js",revision:"ce3a0e1828ad2d06"},{url:"/_next/static/chunks/2379-b42dd9f00435bc26.js",revision:"b42dd9f00435bc26"},{url:"/_next/static/chunks/2386.4ea76c10cc41063a.js",revision:"4ea76c10cc41063a"},{url:"/_next/static/chunks/2391.21f547b8f9847885.js",revision:"21f547b8f9847885"},{url:"/_next/static/chunks/2406.04743ed8b26fbb4f.js",revision:"04743ed8b26fbb4f"},{url:"/_next/static/chunks/2440-2c0894b907865e3d.js",revision:"2c0894b907865e3d"},{url:"/_next/static/chunks/2486.76a965814708440e.js",revision:"76a965814708440e"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2550.f4b21099afae8615.js",revision:"f4b21099afae8615"},{url:"/_next/static/chunks/2554.005d88575221227f.js",revision:"005d88575221227f"},{url:"/_next/static/chunks/2602.3b2af210da49468a.js",revision:"3b2af210da49468a"},{url:"/_next/static/chunks/2629-499ab0bb36567c57.js",revision:"499ab0bb36567c57"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2807.c7f099a56b98fdda.js",revision:"c7f099a56b98fdda"},{url:"/_next/static/chunks/2839-65dcb66051bfc524.js",revision:"65dcb66051bfc524"},{url:"/_next/static/chunks/2845.0b1c9e943e100303.js",revision:"0b1c9e943e100303"},{url:"/_next/static/chunks/2861-f25e0eccfab7eaed.js",revision:"f25e0eccfab7eaed"},{url:"/_next/static/chunks/2862-7280bfa7196ddc03.js",revision:"7280bfa7196ddc03"},{url:"/_next/static/chunks/2992.4d812876688ba7fe.js",revision:"4d812876688ba7fe"},{url:"/_next/static/chunks/305.89841c282a61cef8.js",revision:"89841c282a61cef8"},{url:"/_next/static/chunks/310.95258934d617ae2c.js",revision:"95258934d617ae2c"},{url:"/_next/static/chunks/3118.c3657ca312c1e9cb.js",revision:"c3657ca312c1e9cb"},{url:"/_next/static/chunks/3145.e0fbdc72c9cab684.js",revision:"e0fbdc72c9cab684"},{url:"/_next/static/chunks/3200.735fc673c0835a8d.js",revision:"735fc673c0835a8d"},{url:"/_next/static/chunks/3203.cbe74052c374223c.js",revision:"cbe74052c374223c"},{url:"/_next/static/chunks/3226-2f0b9ee10bae097e.js",revision:"2f0b9ee10bae097e"},{url:"/_next/static/chunks/3236.8291fb954b2f2a97.js",revision:"8291fb954b2f2a97"},{url:"/_next/static/chunks/3249.fe8b4dcd419b5f88.js",revision:"fe8b4dcd419b5f88"},{url:"/_next/static/chunks/3283.0c55fd8a1a0f7c80.js",revision:"0c55fd8a1a0f7c80"},{url:"/_next/static/chunks/3297.33a29c53910f6ced.js",revision:"33a29c53910f6ced"},{url:"/_next/static/chunks/3314.141e2dca41748fac.js",revision:"141e2dca41748fac"},{url:"/_next/static/chunks/332.ff68a0e6411db94f.js",revision:"ff68a0e6411db94f"},{url:"/_next/static/chunks/3465.77dee7ec6cc7e947.js",revision:"77dee7ec6cc7e947"},{url:"/_next/static/chunks/3482.f8558073446e8bd9.js",revision:"f8558073446e8bd9"},{url:"/_next/static/chunks/3509.11f4b2a34d9f2054.js",revision:"11f4b2a34d9f2054"},{url:"/_next/static/chunks/3519.2a44d25a006ebc05.js",revision:"2a44d25a006ebc05"},{url:"/_next/static/chunks/3553.58af46155c94ecc5.js",revision:"58af46155c94ecc5"},{url:"/_next/static/chunks/3594.9e1a7395d1fc565d.js",revision:"9e1a7395d1fc565d"},{url:"/_next/static/chunks/37.23c8b2b83e22a98e.js",revision:"23c8b2b83e22a98e"},{url:"/_next/static/chunks/370.0a341b2da3b6a0db.js",revision:"0a341b2da3b6a0db"},{url:"/_next/static/chunks/3736.3c7fd37e748818e7.js",revision:"3c7fd37e748818e7"},{url:"/_next/static/chunks/3747.36e9ea225d543396.js",revision:"36e9ea225d543396"},{url:"/_next/static/chunks/3796-1c4015cb137f3f3d.js",revision:"1c4015cb137f3f3d"},{url:"/_next/static/chunks/3801.122c0892cfd99244.js",revision:"122c0892cfd99244"},{url:"/_next/static/chunks/3883.5e03e3a398cf3720.js",revision:"5e03e3a398cf3720"},{url:"/_next/static/chunks/3892.09197e0364d3dd7a.js",revision:"09197e0364d3dd7a"},{url:"/_next/static/chunks/3947.b634ff971790621d.js",revision:"b634ff971790621d"},{url:"/_next/static/chunks/3993.45bba5349434ad56.js",revision:"45bba5349434ad56"},{url:"/_next/static/chunks/402.3f3e56dcc798bafe.js",revision:"3f3e56dcc798bafe"},{url:"/_next/static/chunks/4073-17a7e682edff1593.js",revision:"17a7e682edff1593"},{url:"/_next/static/chunks/4114.96fd079aea407434.js",revision:"96fd079aea407434"},{url:"/_next/static/chunks/4144.d7264e550bf9aa39.js",revision:"d7264e550bf9aa39"},{url:"/_next/static/chunks/4163.0e0c9ed3e1aa5112.js",revision:"0e0c9ed3e1aa5112"},{url:"/_next/static/chunks/4212.15885059e8078ec8.js",revision:"15885059e8078ec8"},{url:"/_next/static/chunks/4262.5cf92a1084d62474.js",revision:"5cf92a1084d62474"},{url:"/_next/static/chunks/4293.9de2fa8f5848563f.js",revision:"9de2fa8f5848563f"},{url:"/_next/static/chunks/4323.9603162e5cba433d.js",revision:"9603162e5cba433d"},{url:"/_next/static/chunks/4434.57ab71b0d736896f.js",revision:"57ab71b0d736896f"},{url:"/_next/static/chunks/4439.7f32805042ce478e.js",revision:"7f32805042ce478e"},{url:"/_next/static/chunks/4488-9fff04f3ff845cba.js",revision:"9fff04f3ff845cba"},{url:"/_next/static/chunks/4511.949892f0fb796cb1.js",revision:"949892f0fb796cb1"},{url:"/_next/static/chunks/4553-82ac20f81223bf23.js",revision:"82ac20f81223bf23"},{url:"/_next/static/chunks/4661.e6936df5eac3d0c8.js",revision:"e6936df5eac3d0c8"},{url:"/_next/static/chunks/4675-62fb506f327fe902.js",revision:"62fb506f327fe902"},{url:"/_next/static/chunks/4716-1ceeeaf97e4d3583.js",revision:"1ceeeaf97e4d3583"},{url:"/_next/static/chunks/4796.c545e50f2ff935e7.js",revision:"c545e50f2ff935e7"},{url:"/_next/static/chunks/4812.8df1cf6b1556ba3d.js",revision:"8df1cf6b1556ba3d"},{url:"/_next/static/chunks/4871.3dd9a368a0fa5463.js",revision:"3dd9a368a0fa5463"},{url:"/_next/static/chunks/4879.2d2fd34b79f431f5.js",revision:"2d2fd34b79f431f5"},{url:"/_next/static/chunks/4917.5bdd07a9eacae8a2.js",revision:"5bdd07a9eacae8a2"},{url:"/_next/static/chunks/4997.81fc08868e749c91.js",revision:"81fc08868e749c91"},{url:"/_next/static/chunks/4ad82c5e-cc96ef51ea118175.js",revision:"cc96ef51ea118175"},{url:"/_next/static/chunks/5076.b05604e438095aaf.js",revision:"b05604e438095aaf"},{url:"/_next/static/chunks/5134.a121d8d21d1c9247.js",revision:"a121d8d21d1c9247"},{url:"/_next/static/chunks/520.9ac879d0b9da7d2b.js",revision:"9ac879d0b9da7d2b"},{url:"/_next/static/chunks/5209.3215b44d46b18932.js",revision:"3215b44d46b18932"},{url:"/_next/static/chunks/5313.309c56cc38bbdd59.js",revision:"309c56cc38bbdd59"},{url:"/_next/static/chunks/5329.e0745976c6e71402.js",revision:"e0745976c6e71402"},{url:"/_next/static/chunks/5372.156686248b75341d.js",revision:"156686248b75341d"},{url:"/_next/static/chunks/5386-7c4ad8e23e17efce.js",revision:"7c4ad8e23e17efce"},{url:"/_next/static/chunks/5461-d28c5beb91c930c8.js",revision:"d28c5beb91c930c8"},{url:"/_next/static/chunks/5483.145e8ed18f44377a.js",revision:"145e8ed18f44377a"},{url:"/_next/static/chunks/5543.089aae17d77809a6.js",revision:"089aae17d77809a6"},{url:"/_next/static/chunks/5584.f2636c43774cfa50.js",revision:"f2636c43774cfa50"},{url:"/_next/static/chunks/5648.517b7d5b08dc25e0.js",revision:"517b7d5b08dc25e0"},{url:"/_next/static/chunks/5695.c0d6794c93fc3dd9.js",revision:"c0d6794c93fc3dd9"},{url:"/_next/static/chunks/5724.37ac3be9ec794485.js",revision:"37ac3be9ec794485"},{url:"/_next/static/chunks/5736.ab2b88e4053d3ec5.js",revision:"ab2b88e4053d3ec5"},{url:"/_next/static/chunks/5753.e3f8077ac4a7ad1b.js",revision:"e3f8077ac4a7ad1b"},{url:"/_next/static/chunks/5786.2da025c434d345f3.js",revision:"2da025c434d345f3"},{url:"/_next/static/chunks/5815.a2728b3992c996c3.js",revision:"a2728b3992c996c3"},{url:"/_next/static/chunks/5819.a59443e62006c745.js",revision:"a59443e62006c745"},{url:"/_next/static/chunks/5879.e0ef43b09c377987.js",revision:"e0ef43b09c377987"},{url:"/_next/static/chunks/5888-2178093f9dc5d64a.js",revision:"2178093f9dc5d64a"},{url:"/_next/static/chunks/6062.8312a369a57e3fc3.js",revision:"8312a369a57e3fc3"},{url:"/_next/static/chunks/6092.d604d5262c942c63.js",revision:"d604d5262c942c63"},{url:"/_next/static/chunks/6121.07bf76517bbc2dd2.js",revision:"07bf76517bbc2dd2"},{url:"/_next/static/chunks/617.359b421db498d43e.js",revision:"359b421db498d43e"},{url:"/_next/static/chunks/6243.423586f0d6cb594f.js",revision:"423586f0d6cb594f"},{url:"/_next/static/chunks/6269-e668e61bd238181d.js",revision:"e668e61bd238181d"},{url:"/_next/static/chunks/6330.0e24b689a5055fe8.js",revision:"0e24b689a5055fe8"},{url:"/_next/static/chunks/6356-cebeec3886301503.js",revision:"cebeec3886301503"},{url:"/_next/static/chunks/6374-f42e1997ec64c113.js",revision:"f42e1997ec64c113"},{url:"/_next/static/chunks/6395.6e51d035839ff4ba.js",revision:"6e51d035839ff4ba"},{url:"/_next/static/chunks/6398.e22a1c3ff2d91550.js",revision:"e22a1c3ff2d91550"},{url:"/_next/static/chunks/6409.3ac5682f41927765.js",revision:"3ac5682f41927765"},{url:"/_next/static/chunks/6410-23a442379f91f2f6.js",revision:"23a442379f91f2f6"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6471.8d3d51f0a565139c.js",revision:"8d3d51f0a565139c"},{url:"/_next/static/chunks/65.fc326b1bde468b80.js",revision:"fc326b1bde468b80"},{url:"/_next/static/chunks/6502-ba6a46fdab21de38.js",revision:"ba6a46fdab21de38"},{url:"/_next/static/chunks/653-e36c0b34ac7bd324.js",revision:"e36c0b34ac7bd324"},{url:"/_next/static/chunks/6665.3b98dde37384ff53.js",revision:"3b98dde37384ff53"},{url:"/_next/static/chunks/6670.0cf14935c6549383.js",revision:"0cf14935c6549383"},{url:"/_next/static/chunks/6692.e42dfb241035b482.js",revision:"e42dfb241035b482"},{url:"/_next/static/chunks/673.5310afdb2da5faad.js",revision:"5310afdb2da5faad"},{url:"/_next/static/chunks/6732.03d979fba0acf4db.js",revision:"03d979fba0acf4db"},{url:"/_next/static/chunks/6879.a6c207f3ae3551cc.js",revision:"a6c207f3ae3551cc"},{url:"/_next/static/chunks/6885.8a1babf28155d22f.js",revision:"8a1babf28155d22f"},{url:"/_next/static/chunks/695-ea4c9cd93a87cbd7.js",revision:"ea4c9cd93a87cbd7"},{url:"/_next/static/chunks/6977.5f44ec02e3a5fbee.js",revision:"5f44ec02e3a5fbee"},{url:"/_next/static/chunks/6991.be0212d2d320173c.js",revision:"be0212d2d320173c"},{url:"/_next/static/chunks/7001.5485d8645b90f0e1.js",revision:"5485d8645b90f0e1"},{url:"/_next/static/chunks/7135.1ad0205a9acf087e.js",revision:"1ad0205a9acf087e"},{url:"/_next/static/chunks/7213.d8a3150d04a604bc.js",revision:"d8a3150d04a604bc"},{url:"/_next/static/chunks/7217.57c55b473d8b1c80.js",revision:"57c55b473d8b1c80"},{url:"/_next/static/chunks/7220.4967e90ce026dae9.js",revision:"4967e90ce026dae9"},{url:"/_next/static/chunks/7268.227e212422d7c874.js",revision:"227e212422d7c874"},{url:"/_next/static/chunks/7271-61a8c80a805538b6.js",revision:"61a8c80a805538b6"},{url:"/_next/static/chunks/7298-319f8108a55e297c.js",revision:"319f8108a55e297c"},{url:"/_next/static/chunks/7315.3ca5dd95b74450ea.js",revision:"3ca5dd95b74450ea"},{url:"/_next/static/chunks/7365.72718ce4ca51b05b.js",revision:"72718ce4ca51b05b"},{url:"/_next/static/chunks/7370.20336fca6f462b00.js",revision:"20336fca6f462b00"},{url:"/_next/static/chunks/7406-6225b769f831e73a.js",revision:"6225b769f831e73a"},{url:"/_next/static/chunks/7418.d5424461b21ddf67.js",revision:"d5424461b21ddf67"},{url:"/_next/static/chunks/7421.6e55431a3f7b261d.js",revision:"6e55431a3f7b261d"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7525.f7c93eb403c6c9c0.js",revision:"f7c93eb403c6c9c0"},{url:"/_next/static/chunks/7531.dfe3024020e677a0.js",revision:"dfe3024020e677a0"},{url:"/_next/static/chunks/758.b8b4c9d9c7352c21.js",revision:"b8b4c9d9c7352c21"},{url:"/_next/static/chunks/7590.5339f77c17d3d934.js",revision:"5339f77c17d3d934"},{url:"/_next/static/chunks/75fc9c18.4321f959804bd28d.js",revision:"4321f959804bd28d"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7618.68d4da283439ddc9.js",revision:"68d4da283439ddc9"},{url:"/_next/static/chunks/7663.be47fb66e04e4efc.js",revision:"be47fb66e04e4efc"},{url:"/_next/static/chunks/7666.c9580b793ebb6d08.js",revision:"c9580b793ebb6d08"},{url:"/_next/static/chunks/7676.1a9dc245466eeae7.js",revision:"1a9dc245466eeae7"},{url:"/_next/static/chunks/7741.a66a50938f042536.js",revision:"a66a50938f042536"},{url:"/_next/static/chunks/7762.97de838d8f13b395.js",revision:"97de838d8f13b395"},{url:"/_next/static/chunks/777.e7b9c20985255854.js",revision:"e7b9c20985255854"},{url:"/_next/static/chunks/7838.152d9aa6d5d97976.js",revision:"152d9aa6d5d97976"},{url:"/_next/static/chunks/7917.5c7bddf6daba650e.js",revision:"5c7bddf6daba650e"},{url:"/_next/static/chunks/7938.3bd7a8a045bcc59b.js",revision:"3bd7a8a045bcc59b"},{url:"/_next/static/chunks/7988.264688b19c03433e.js",revision:"264688b19c03433e"},{url:"/_next/static/chunks/8007.6987b3bff73d0ba1.js",revision:"6987b3bff73d0ba1"},{url:"/_next/static/chunks/8029.aa6c08cba91dd332.js",revision:"aa6c08cba91dd332"},{url:"/_next/static/chunks/8036.9139f5727b1f9798.js",revision:"9139f5727b1f9798"},{url:"/_next/static/chunks/8049-2ca2b652f309a7d1.js",revision:"2ca2b652f309a7d1"},{url:"/_next/static/chunks/8090.f7a6777134af0ee7.js",revision:"f7a6777134af0ee7"},{url:"/_next/static/chunks/811-445f0f8a533d1cc3.js",revision:"445f0f8a533d1cc3"},{url:"/_next/static/chunks/8138.9c36fa5092a5ed29.js",revision:"9c36fa5092a5ed29"},{url:"/_next/static/chunks/8142.ae9991011f01f5e0.js",revision:"ae9991011f01f5e0"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8222.ec722ea683eb91da.js",revision:"ec722ea683eb91da"},{url:"/_next/static/chunks/8283.56888ee351ada4c6.js",revision:"56888ee351ada4c6"},{url:"/_next/static/chunks/8318.5387184f0d163846.js",revision:"5387184f0d163846"},{url:"/_next/static/chunks/8393.4276c63baa000f93.js",revision:"4276c63baa000f93"},{url:"/_next/static/chunks/8468.9aa93610d4b2f568.js",revision:"9aa93610d4b2f568"},{url:"/_next/static/chunks/8481-3a2c9cbfb35c7805.js",revision:"3a2c9cbfb35c7805"},{url:"/_next/static/chunks/856.5bb91651cf701270.js",revision:"5bb91651cf701270"},{url:"/_next/static/chunks/8561.e0ae2c126e26850c.js",revision:"e0ae2c126e26850c"},{url:"/_next/static/chunks/8576-4fc88782c6a53e3c.js",revision:"4fc88782c6a53e3c"},{url:"/_next/static/chunks/8625-6c02c86cfc373abf.js",revision:"6c02c86cfc373abf"},{url:"/_next/static/chunks/870.c1277ad0599a1203.js",revision:"c1277ad0599a1203"},{url:"/_next/static/chunks/8768-fc8c57ff84b1dd82.js",revision:"fc8c57ff84b1dd82"},{url:"/_next/static/chunks/8770.44d2f8c73be18acf.js",revision:"44d2f8c73be18acf"},{url:"/_next/static/chunks/8792.d13b7e067540644d.js",revision:"d13b7e067540644d"},{url:"/_next/static/chunks/8796.9877a8c9b58cb2f0.js",revision:"9877a8c9b58cb2f0"},{url:"/_next/static/chunks/8813.02694305feb42871.js",revision:"02694305feb42871"},{url:"/_next/static/chunks/8840.7573f7cd8b260f6e.js",revision:"7573f7cd8b260f6e"},{url:"/_next/static/chunks/889.64194b207c6ed4a5.js",revision:"64194b207c6ed4a5"},{url:"/_next/static/chunks/8915.47932f86417996a7.js",revision:"47932f86417996a7"},{url:"/_next/static/chunks/9053.1547c4eed85fbc95.js",revision:"1547c4eed85fbc95"},{url:"/_next/static/chunks/9069.bdb9527c998b5088.js",revision:"bdb9527c998b5088"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/9083-1a5925c45384d1b9.js",revision:"1a5925c45384d1b9"},{url:"/_next/static/chunks/9121.b49c2c698eb6b977.js",revision:"b49c2c698eb6b977"},{url:"/_next/static/chunks/9155.c8b958eb1c154d33.js",revision:"c8b958eb1c154d33"},{url:"/_next/static/chunks/9232.61d440e4c3b2b427.js",revision:"61d440e4c3b2b427"},{url:"/_next/static/chunks/9256-b40bd2fee01412d1.js",revision:"b40bd2fee01412d1"},{url:"/_next/static/chunks/9296.32dd1e4dad08fd4a.js",revision:"32dd1e4dad08fd4a"},{url:"/_next/static/chunks/9336-57ff2b6f6cfa7fc7.js",revision:"57ff2b6f6cfa7fc7"},{url:"/_next/static/chunks/9343-6ab5c7b007814080.js",revision:"6ab5c7b007814080"},{url:"/_next/static/chunks/9403.023214a80e1e2708.js",revision:"023214a80e1e2708"},{url:"/_next/static/chunks/9404-3cdf804b9f037ad4.js",revision:"3cdf804b9f037ad4"},{url:"/_next/static/chunks/947-e3874e6b7f8ef6fe.js",revision:"e3874e6b7f8ef6fe"},{url:"/_next/static/chunks/9549.60f1f7e2cbb9fb8c.js",revision:"60f1f7e2cbb9fb8c"},{url:"/_next/static/chunks/9558.9bf5494ebdf03040.js",revision:"9bf5494ebdf03040"},{url:"/_next/static/chunks/9601.e93676c8f449f0fd.js",revision:"e93676c8f449f0fd"},{url:"/_next/static/chunks/9607.366af86ac9696739.js",revision:"366af86ac9696739"},{url:"/_next/static/chunks/9638-b322ceceaa9fff92.js",revision:"b322ceceaa9fff92"},{url:"/_next/static/chunks/9663.9aab63f35c80d9b9.js",revision:"9aab63f35c80d9b9"},{url:"/_next/static/chunks/9686-c9e9a91d6190c9fd.js",revision:"c9e9a91d6190c9fd"},{url:"/_next/static/chunks/9688.de328275a5c0839c.js",revision:"de328275a5c0839c"},{url:"/_next/static/chunks/9702.b31e901e8bd340ff.js",revision:"b31e901e8bd340ff"},{url:"/_next/static/chunks/9713.f1d5b41171c6487d.js",revision:"f1d5b41171c6487d"},{url:"/_next/static/chunks/9781.f87962a71d4ea1e0.js",revision:"f87962a71d4ea1e0"},{url:"/_next/static/chunks/9831.a090f5f3c082ad56.js",revision:"a090f5f3c082ad56"},{url:"/_next/static/chunks/9908.22a1ef12f3875f1e.js",revision:"22a1ef12f3875f1e"},{url:"/_next/static/chunks/9972.2718a68ae9d750c6.js",revision:"2718a68ae9d750c6"},{url:"/_next/static/chunks/9974-13f1d0a369acf0f8.js",revision:"13f1d0a369acf0f8"},{url:"/_next/static/chunks/cff3e69d-920d199a4cb08a5f.js",revision:"920d199a4cb08a5f"},{url:"/_next/static/chunks/d6e1aeb5-8ae8dd40035ccd02.js",revision:"8ae8dd40035ccd02"},{url:"/_next/static/chunks/ee8b1517-940966dfb5b1cbdc.js",revision:"940966dfb5b1cbdc"},{url:"/_next/static/chunks/framework-314c182fa7e2bf37.js",revision:"314c182fa7e2bf37"},{url:"/_next/static/chunks/main-2b88dccb760a6d2b.js",revision:"2b88dccb760a6d2b"},{url:"/_next/static/chunks/pages/_app-0d43e1d5fd81ceda.js",revision:"0d43e1d5fd81ceda"},{url:"/_next/static/chunks/pages/_error-2b35abdd95bbce4e.js",revision:"2b35abdd95bbce4e"},{url:"/_next/static/chunks/pages/embed/chat/readonly-70c2819bc504f8c5.js",revision:"70c2819bc504f8c5"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-12763fdf46ea8aa3.js",revision:"12763fdf46ea8aa3"},{url:"/_next/static/chunks/pages/embed/video-c9a27474367206cd.js",revision:"c9a27474367206cd"},{url:"/_next/static/chunks/pages/index-c2f75474eada23c1.js",revision:"c2f75474eada23c1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e9a0abe088af514e.js",revision:"e9a0abe088af514e"},{url:"/_next/static/css/087b9d39270cd927.css",revision:"087b9d39270cd927"},{url:"/_next/static/css/22f76f542c0c1295.css",revision:"22f76f542c0c1295"},{url:"/_next/static/css/4b852c938abbe548.css",revision:"4b852c938abbe548"},{url:"/_next/static/css/6dddd42a88f781e5.css",revision:"6dddd42a88f781e5"},{url:"/_next/static/css/79a332200ba0e826.css",revision:"79a332200ba0e826"},{url:"/_next/static/css/7e0fea9a6c3abdcb.css",revision:"7e0fea9a6c3abdcb"},{url:"/_next/static/css/87f18c887be77d05.css",revision:"87f18c887be77d05"},{url:"/_next/static/css/8841579222b5034b.css",revision:"8841579222b5034b"},{url:"/_next/static/css/91dee75f0f5d528b.css",revision:"91dee75f0f5d528b"},{url:"/_next/static/css/9ca4489da31a01c6.css",revision:"9ca4489da31a01c6"},{url:"/_next/static/css/b9a129955cf4688a.css",revision:"b9a129955cf4688a"},{url:"/_next/static/css/c1478bc9943d52ed.css",revision:"c1478bc9943d52ed"},{url:"/_next/static/css/c14fe3388348ec80.css",revision:"c14fe3388348ec80"},{url:"/_next/static/css/c1a61af493a960f0.css",revision:"c1a61af493a960f0"},{url:"/_next/static/css/d14f51de0d46d6eb.css",revision:"d14f51de0d46d6eb"},{url:"/_next/static/css/d29c5cd9368918c4.css",revision:"d29c5cd9368918c4"},{url:"/_next/static/css/ef3f4486f04adedc.css",revision:"ef3f4486f04adedc"},{url:"/_next/static/css/f81472da2387e6cf.css",revision:"f81472da2387e6cf"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.3b0fe0aa.woff",revision:"3b0fe0aa"},{url:"/_next/static/media/inter-cyrillic-300-normal.786612d8.woff2",revision:"786612d8"},{url:"/_next/static/media/inter-cyrillic-400-normal.5156ecf9.woff2",revision:"5156ecf9"},{url:"/_next/static/media/inter-cyrillic-400-normal.a1abbbeb.woff",revision:"a1abbbeb"},{url:"/_next/static/media/inter-cyrillic-600-normal.20e88899.woff",revision:"20e88899"},{url:"/_next/static/media/inter-cyrillic-600-normal.ac257677.woff2",revision:"ac257677"},{url:"/_next/static/media/inter-cyrillic-800-normal.2ab892f6.woff",revision:"2ab892f6"},{url:"/_next/static/media/inter-cyrillic-800-normal.e12b115f.woff2",revision:"e12b115f"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.69e88d04.woff",revision:"69e88d04"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.f894e1d8.woff2",revision:"f894e1d8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.4879ddc8.woff2",revision:"4879ddc8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.a4fe2f88.woff",revision:"a4fe2f88"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.21482aa8.woff2",revision:"21482aa8"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.684dbb71.woff",revision:"684dbb71"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.635988ed.woff",revision:"635988ed"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.c396a18b.woff2",revision:"c396a18b"},{url:"/_next/static/media/inter-greek-300-normal.386712e0.woff",revision:"386712e0"},{url:"/_next/static/media/inter-greek-300-normal.8e40d33d.woff2",revision:"8e40d33d"},{url:"/_next/static/media/inter-greek-400-normal.0c589a4f.woff2",revision:"0c589a4f"},{url:"/_next/static/media/inter-greek-400-normal.fe3df9bb.woff",revision:"fe3df9bb"},{url:"/_next/static/media/inter-greek-600-normal.7a9219c1.woff2",revision:"7a9219c1"},{url:"/_next/static/media/inter-greek-600-normal.a3d58a50.woff",revision:"a3d58a50"},{url:"/_next/static/media/inter-greek-800-normal.3ae4b10a.woff",revision:"3ae4b10a"},{url:"/_next/static/media/inter-greek-800-normal.aa3c4563.woff2",revision:"aa3c4563"},{url:"/_next/static/media/inter-greek-ext-300-normal.25ff86b8.woff",revision:"25ff86b8"},{url:"/_next/static/media/inter-greek-ext-300-normal.2768fbb6.woff2",revision:"2768fbb6"},{url:"/_next/static/media/inter-greek-ext-400-normal.8225c735.woff2",revision:"8225c735"},{url:"/_next/static/media/inter-greek-ext-400-normal.e1f02a99.woff",revision:"e1f02a99"},{url:"/_next/static/media/inter-greek-ext-600-normal.2c1e268c.woff",revision:"2c1e268c"},{url:"/_next/static/media/inter-greek-ext-600-normal.533d789c.woff2",revision:"533d789c"},{url:"/_next/static/media/inter-greek-ext-800-normal.aaf8c68e.woff",revision:"aaf8c68e"},{url:"/_next/static/media/inter-greek-ext-800-normal.c1dbd103.woff2",revision:"c1dbd103"},{url:"/_next/static/media/inter-latin-300-normal.1e64cb66.woff2",revision:"1e64cb66"},{url:"/_next/static/media/inter-latin-300-normal.80c26b3a.woff",revision:"80c26b3a"},{url:"/_next/static/media/inter-latin-400-normal.779487c6.woff",revision:"779487c6"},{url:"/_next/static/media/inter-latin-400-normal.ac374088.woff2",revision:"ac374088"},{url:"/_next/static/media/inter-latin-600-normal.34227eb1.woff2",revision:"34227eb1"},{url:"/_next/static/media/inter-latin-600-normal.edaa5f1b.woff",revision:"edaa5f1b"},{url:"/_next/static/media/inter-latin-800-normal.7da978cc.woff",revision:"7da978cc"},{url:"/_next/static/media/inter-latin-800-normal.f15de3ac.woff2",revision:"f15de3ac"},{url:"/_next/static/media/inter-latin-ext-300-normal.5212580c.woff",revision:"5212580c"},{url:"/_next/static/media/inter-latin-ext-300-normal.dcb1958c.woff2",revision:"dcb1958c"},{url:"/_next/static/media/inter-latin-ext-400-normal.0cc0c669.woff2",revision:"0cc0c669"},{url:"/_next/static/media/inter-latin-ext-400-normal.c500b98e.woff",revision:"c500b98e"},{url:"/_next/static/media/inter-latin-ext-600-normal.03b16c21.woff2",revision:"03b16c21"},{url:"/_next/static/media/inter-latin-ext-600-normal.5f656274.woff",revision:"5f656274"},{url:"/_next/static/media/inter-latin-ext-800-normal.04eca372.woff2",revision:"04eca372"},{url:"/_next/static/media/inter-latin-ext-800-normal.2dc591bf.woff",revision:"2dc591bf"},{url:"/_next/static/media/inter-vietnamese-300-normal.09dd64fe.woff2",revision:"09dd64fe"},{url:"/_next/static/media/inter-vietnamese-300-normal.edc506b7.woff",revision:"edc506b7"},{url:"/_next/static/media/inter-vietnamese-400-normal.51fad319.woff2",revision:"51fad319"},{url:"/_next/static/media/inter-vietnamese-400-normal.feb85dd6.woff",revision:"feb85dd6"},{url:"/_next/static/media/inter-vietnamese-600-normal.672f1e0b.woff",revision:"672f1e0b"},{url:"/_next/static/media/inter-vietnamese-600-normal.e7c6af30.woff2",revision:"e7c6af30"},{url:"/_next/static/media/inter-vietnamese-800-normal.850d1593.woff",revision:"850d1593"},{url:"/_next/static/media/inter-vietnamese-800-normal.e9acfdc6.woff2",revision:"e9acfdc6"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-400-normal.cbe785df.woff",revision:"cbe785df"},{url:"/_next/static/media/poppins-latin-600-normal.c070cf14.woff",revision:"c070cf14"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.56cb5e9c.woff2",revision:"56cb5e9c"},{url:"/_next/static/media/poppins-latin-ext-400-normal.fbcaaafb.woff",revision:"fbcaaafb"},{url:"/_next/static/media/poppins-latin-ext-600-normal.33e72839.woff",revision:"33e72839"},{url:"/_next/static/media/poppins-latin-ext-600-normal.dd51f42e.woff2",revision:"dd51f42e"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),e.registerRoute((e=>e.pathname.startsWith("/admin/")),new e.NetworkOnly({fetchOptions:{credentials:"same-origin"},plugins:[]}),"GET"),e.registerRoute((e=>e.pathname.startsWith("/api/")),new e.NetworkOnly,"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
