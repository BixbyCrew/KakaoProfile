/*
 * Last Update : 2019. 09. 28 (Saturday)
 * Made By     : JongHeon LEE
 * Description : 
 *               
 */

/************************************************************************/
/*                               Requires                               */
/************************************************************************/
var http    = require("http");
var console = require("console");

module.exports.function = function profile (kakao) {
let options = {
    format : 'json',
    headers: {
      'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxdoxitxyourselfxxxxxxxxxxxxxxxxxxxxxxx'
    },
  };
let url     = ""
let results = http.getUrl(url, options);

//프로필없는 경우
if (results.profileImageURL == ""){
  results.profileImageURL = "/images/default.png"
  results.thumbnailURL    = "/images/default.png"
}
return results
}
