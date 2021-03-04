 function options(key, t_url){
    return {
        method: 'GET',
        url: 'http://api.scrapestack.com/scrape',
        qs: {
            access_key: key,
            url: t_url,
        }
    }
}

module.exports = options