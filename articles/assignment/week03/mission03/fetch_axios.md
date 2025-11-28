# fetch_axios
원격 API 호출을 위해 fetch와 axios에 대해 알아보자

## fetch()
    첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받아 Promise 타입의 객체를 반환
    반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject한다.

```javascript
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```
옵션 객체에는 HTTP방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body) 등을 설정할 수 있다.

응답(response) 객체로 부터는 HTTP 응답 상태(status), HTTP 응답 헤더(headers), HTTP 응답 전문(body) 등을 읽어올 수 있다.

### GET
단순히 원격 API에 있는 데이터를 가져올 때 쓰이는 방식

`fetch()` 함수는 디폴트로 GET 방식으로 작동하고 GET 방식은 요청 전문을 받지 않기 때문에 옵션 인자가 필요가 없다.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
  console.log(response)
);
```

대부분의 REST API들은 JSON 형태의 데이터를 응답하기 때문에, 응답객체는 json() 메서드를 제공한다.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
```
이 메서드를 호출하면, 응답 객체로부터 JSON 포맷의 응답 전문을 자바스크립트 객체로 변환하여 얻을 수 있다.
```javascript
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"
}
```
단순히 특정 API에 저장된 데이터를 보여주는 웹페이지나 애플리케이션에서는 GET 방식의 HTTP 통신으로 충분할 것이다.

### POST
원격 API에서 관리하고 있는 데이터를 생성해야 한다면 요청 전문을 포함할 수 있는 POST 방식의 HTTP 통신이 필요하다.

`method` 옵션을 `POST`로 지정해주고, `headers` 옵션을 통해 JSON 포맷을 사용한다고 알려줘야 하며, 요청 전문을 JSON 포맷으로 직렬화하여 `body` 옵션에 설정해준다.

```javaScript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then((response) => console.log(response));
```

```javascript
  .then((response) => response.json())
  .then((data) => console.log(data));
``` 
마찬가지 방법으로 응답 객체의 `json`메서드 호출을 통해 응답 전문을 객체 형태로 얻을 수 있다.

### PUT/DELETE
GET과 POST만큼은 아니지만, 원격 API에서 관리하는 데이터의 수정과 삭제를 위해서 PUT과 DELETE 방식의 HTTP 호출을 해야 할 때가 있다.

PUT 방식은 method 옵션만 PUT으로 설정한다는 점 빼놓고는 POST 방식과 매우 흡사하다.

DELETE 방식에서는 보낼 데이터가 없기 때문에, headers와 body 옵션이 필요없다.

## Axios
  Promise API를 활용하는 HTTP 비동기 통신 자바스크립트 라이브러리

브라우저/Node.js에서 작동하는 Promise 기반 **HTTP 클라이언트** 프론트엔드에서 백엔드 API 서버와 데이터를 주고받을 때 주로 사용

### Axios를 사용하는 이유
- 간결한 문법 : fetch보다 짧고 직관적이다
- 자동 JSON 변환 : 요청/응답을 JSON으로 자동 - 처리한다
- 요청 취소 : API 요청 취소가 가능하다. (AbortController 필요없음)
- 인터셉터 : 요청/응답 완료 전에 가로채서 공통 로직을 삽입할 수 있다
- 오류 처리 : status 코드 기반 오류 구분이 쉽다
- 브라우저 호환성 : 다양한 브라우저들을 지원한다

### Axios 기본 사용법
**1. 설치**
```
npm install axios
```


**2. HTTP Methosds : GET**
- 형태 : axios.get(url,[, config])
- 역할 : 입력한 url에 존재하는 자원에 요청한다.

```javascript
import axios from 'axios';

axios.get('/api/users')
	.then((res) => {
    	console.log(res.data);	// data from server
    })
    .catch((err) => {
    	console.error(err);	// error
    });
```
서버에서 데이터를 가져와 보여주는 용도로 사용한다.
만약 GET으로 로그인 구현 시 주소창에 id,pw가 노출될 수 있다.
**값/상태를 바꿀 수 없다.**


**3. HTTP Methods : POST**
- 형태 : axios.post("url", { data 객체 }, [, config])
- 역할 : 새로운 리소스를 생성

```javascript
axios.post('/api/login', {
	email: 'test@example.com'
    password: '1234'
})
.then((res) => {
	console.log(res.data);	// login success
})
.catch((err) => {
	console.error(err);	// login fail
})
```
POST 메소드의 두 번째 인자는 본문으로 보낼 데이터를 설정한 **객체 리터럴을 전달**
로그인, 회원가입 등 사용자가 생성한 파일을 서버에 업로드할 때 사용
주소창에 쿼리 스트링이 남지 않아 GET보다 안전하다.


**4. HTTP Methods : DELETE**
- 형태 : axios.delete(url, [ , config])
- 역할 : REST 기반 API 프로그램에서 DB에 저장된 내용을 삭제

```javascript
axios.delete("/example/list/13").then(function(res) {
	console.log(res);
}).catch(function(ex) {
	throw new Error(ex)
}
```
    

**5. HTTP Methods : PUT**
- 형태 : axios.put(url[ , data[ , config])
- 역할 : REST 기반 API 프로그램에서 DB에 저장된 내용을 수정

```javascript
import axios from 'axios';

const updateUser = async () =>{
	try {
    	const response = await axios.put('/api/users/123', {
        	name: 'bob',
            email: 'bob@example.com',
        });
        
        console.log('수정된 데이터: ', response.data);
    } catch(error) {
    	console.error('error', error);
    }
};
```
[🥔감자의 오묘한 개발🥔:티스토리](https://ldd6cr-adness.tistory.com/306)