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


module.exports.function = function profile (kakaoProfile) {
console.log(kakaoProfile)
let options = {
    format: 'json',
    headers: {
      'Authorization': 'Bearer xxxxxxxdoxitxyourselfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
  };
let url = "https://kapi.kakao.com/v1/api/talk/profile"
let results = http.getUrl(url, options);

//프로필없는 경우
if (results.profileImageURL == ""){
  results.profileImageURL = "/images/bixby.png"
  results.thumbnailURL    = "/images/bixby.png"
}

return results
}
