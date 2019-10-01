# playground.kakaoprofile

kakaotalk 프로필 api 사용법!
1. https://developers.kakao.com/docs/restapi/kakaotalk-api 읽고 parameter response 확인


2.https://developers.kakao.com/docs/restapi/tool 접속 -> 카카오톡 홈페이지 로그인


3. REST API Test 밑에 있는 카테고리에서 카카오톡 클릭 -> (카카오톡 프로필 요청) 항목 클릭 -> '요청하기' 회색 버튼 클릭


4. Request Preview 에서 Header에 해당하는 값을 빅스비 스튜디오로 복사하여 headers 부분 코드 완성


ex) headers: {'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxx'},


5. HostUrl 파악 및 적용


ex) let url = "https://kapi.kakao.com/v1/api/talk/profile"


