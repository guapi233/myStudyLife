let fetch = require('./fetch-html-blue')

let options = {
    url: 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=38.867719&longitude=115.544414&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5',
    header:{
       'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Mobile Safari/537.36',
       cookie:"ubt_ssid=fj3aoglcntpncnh72zf1s34qbjssdeqy_2019-04-30; _utrace=cf0977c676d9aa231ba58a82c7e938a7_2019-04-30; perf_ssid=o1etxw8r2pd29p4jnz7hzol8gdpejt62_2019-04-30; cna=L0VFFYRnf3YCAXjTFAJucyh8; _bl_uid=g0jFFvtw30gapmcsXfgFiR214jL3; track_id=1556598165|9e96a53bc9cc97ac0176f7eb278c574b0e0eff9257e4a1708b|77e2e3b923f8b9eb3d4338031102f707; UTUSER=948975522; ZDS=1.0|1556599623|1BlbzcUomppKTwr+bK3LsyEuE39ZGP3jJMWdJqvDot7WbzLWZkkpNL+BT7nJZwNyyI1dQed9PXapgk3JuGmOQA==; isg=BK2teeAXjcQv_2knlM_L6n07vEktxsLfS6m0Q--y6MSYZswYt1uartUkVnwlZvmU",
       'x-uab': '117#9SNCe99l9oH2xYrqdOOlncycTEIjjosUMhcgBnFoEtuBZNFOmcjWE2lVOId9BzjumpvD0E8RASapZIdFBEVDAbgURBNRBkx6T2zhhYfRABJGmtdF8E8uAbgpOIFCBkcuZQv9Od8RASapZId9B+FuUg540PxCBkGxx1qICgltoGG6KgWmTKTiALICBdV2YAehICVRtxZGbPtnHL/ClU23AvAoVkVgStuu8PInocQyi0tndY8eTMvhCqQLj8ukP3PiILZRoxSy0XtCI+FpNM4h0Cm+BELY+ihhILrEocQy0XD+VYfpTMEhiCmCBkZ26WPiILZRoxSyi0PoUE319NhGeKHU1Cyf4fUZZ7mhYwx68PMTUafgDHnnSw70vJB2deH/1SGoDip8uoZUuZjNwF0xa7GkXyrriWRIFiURMh0mTjrH84swyH+BgmAdu4vqzjmTyyPmQD1I1l1UBOy37Zw7035lXhTzgsUP0yQLWUEluj8qOFvgx/UebBwyLZoOb8I9mP4KfZMZuRfrK/MMAKRxroTUeeu5srNwjpxS/oStvW8oHlJ5dxtB3EzCwiX78Qz+V0N50wwMGIIOq2LQo+W+YTdFSMSXqs4KR7QTW+YeW6hR3HatkwOb',
       'X-Shard': 'loc=115.544414,38.867719',
       'Referer': 'https://h5.ele.me/msite/'
    }
}
fetch(options).then(data=>{
    console.log(data);
},err=>{
    console.log('错了'+err);
})
