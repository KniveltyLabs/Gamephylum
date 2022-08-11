import api from './request';
import api1 from './request_two';

function getArticleCategory(data){
  return  api.get({
    url:'/api/phylum/article_category',
    data
  });
}

function getArticleList(data){
  return  api.get({
    url:'/api/phylum/article_lists',
    data
  });
}

function getArticleDetails(data){
  return  api.get({
    url:'/api/phylum/article_details',
    data
  });
}

 function getMacroLists(data){
  return  api.get({
    url:'/api/phylum/macro_lists',
    data
  });
}

function getNewsLists(data){
  return  api.get({
    url:'/api/phylum/news_lists',
    data
  });
}


 function getNewsDetails(data){
  return  api.get({
    url:'/api/phylum/news_details',
    data
  });
}

 function getSysConfigGetRate(data){
  return  api1.post({
    url:'/sysConfig/getRate',
    data
  });
}
 function getQuotation(data){
  return  api1.post({
    url:'/quotation/get',
    data
  });
}
 function getAssetscreener(data){
  return  api.post({
    url:'/api/phylum/game_token_list',
    data
  });
}
 function getNFTList(data){
  return  api.get({
    url:'/api/phylum/game_nft_lists',
    data
  });
}
 function getShopPrice(data){
  return  api.get({
    url:'/api/phylum/get_config_value',
    data
  });
}

 function getPhylumAssetDetails(data){
  return  api.get({
    url:'/api/phylum/investors',
    data
  });
}
 function getGameTokenDetails(data){
  return  api.get({
    url:'/api/phylum/game_token_details',
    data
  });
}
/**
 * text
 */
 function text1(data){
  return  api1.post({
    url:'/api2/log/topBalances',
    data
  });
}

export {
   getArticleList,
   getArticleDetails,
   getNewsLists,
   getNewsDetails,
   getArticleCategory,
   getSysConfigGetRate,
   getQuotation,
   getMacroLists,
   getAssetscreener,
   getNFTList,
   getShopPrice,
   getPhylumAssetDetails,
   getGameTokenDetails,
   text1
}

