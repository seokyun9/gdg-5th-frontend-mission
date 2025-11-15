# HTML5

## # 2 HTML5 기본 문법

### I. HTML5
HTML(HyperText Markup Language)은 마크업 언어!
웹페이지의 내용과 구조를 담당하는 언어로써 HTML 태그를 통해 정보를 구조화하는 것이다.

+ HyperText   
텍스트를 통해 다른 페이지로 이동
+ Markup Language   
텍스트 외의 정보를 지닌 구조적 문서

---
    =>  웹페이지의 구조와 콘텐츠를 정의하는 웹 표준 구조적 문서

### II. Hello HTMl5
반드시 `<!DOCTYPE html>`로 시작해야한다 (문서 형식을 HTML로 지정하는 태그) 
<br>

실제적인 내용은 `<html>`과 `</html>` 사이에, `<head>`와 `</head>` 사이에는 브라우저에는 표시되지 않는 제목이나 참조, 메타데이터 등을 기술한다.   
실제로 출력되는 모든 요소는 `<body>...</body>` 태그 안에 적는다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>안녕하세요! HTML5</p>
  </body>
</html>
```

html은 텍스트 파일로 메모장 등으로도 편집이 가능하다

### III. HTML5 기본 문법

1. __**요소 (element)**__   
HTMl 요소는 **시작 태그**와 **종료 태그**, 태그 사이에 **content**로 구성된다.   
그리고 이러한 요소의 집합이 바로 HTML document이다.    
대소문자를 구별하지는 않으나 소문자를 사용하는 것이 일반적이다.

    -  요소는 중첩될 수 있다.   
        즉, 요소는 다른 요소를 포함할 수 있고, 부자관계가 성립되어 정보의 구조화가 이루어진다.   
        ex. `body` 요소 안에 `h1` `p` 요소 포함

        이러한 중첩관계는 들여쓰기를 해주자!    
        가독성 좋은 코드가 좋은 코드이니까...
    - 빈 요소 (empty element)   
        content를 가질 수 없는 요소. attribute 만을 가진다.   
        ex. `br` `img` `link`...

2. __**속성 (Attribute)**__   
Attribute(속성)는 element의 성질, 특징을 정의하는 명세이다.   
즉, 추가적인 정보를 제공하는 것으로 시작 태그에 위치해야 하며 이름과 값의 쌍을 이룬다. `(name = "value")`
    ```html
    <img src="html.jpg" width="104" height="142">
    ```
    cf.위 코드에서 src는 어트리뷰트명, "html.jpg"는 어트리뷰트값이다.   
    - 글로벌 어트리뷰트 : 대체로 모든 html요소가 공통으로 사용할 수 있는 속성이다.

    |Attribute	| Description |
    | :--- | :--- | 
    | id | 유일한 식별자(id)를 요소에 지정한다. 중복 지정이 불가하다 |
    | class	| 스타일시트에 정의된 class를 요소에 지정한다. 중복 지정이 가능하다. |
    | hidden | css의 hidden과는 다르게 의미상으로도 브라우저에 노출되지 않게 된다. |    
    | lang |	지정된 요소의 언어를 지정한다. 검색엔진의 크롤링 시 웹페이지의 언어를 인식할 수 있게 한다. |
    | style	| 요소에 인라인 스타일을 지정한다. |
    | tabindex	| 사용자가 키보드로 페이지를 내비게이션 시 이동 순서를 지정한다. |
    | title |	요소에 관한 제목을 지정한다.|

3. __**주석**__   <br>
코드설명을 위한 주석.. HTML에서는  `<!-- -->` 안에 주석을 적으면 된다.   

## # 3 시맨틱 요소와 검색 엔진

### 시맨틱 웹 (semantic web)
검색 엔진에 노출되는 것은 중요하다!   
**SEO** (검색엔진 최적화) 같은 마케팅 도구로 검색엔진의 눈에 잘 띄도록! 할 수 있는데 여기서 검색엔진이 웹사이트 정보를 수집하는 것을 **크롤링**이라고 한다.    
검색 사이트 이용자가 검색할 만한 키워드를 예상하여 키워드에 대응하는 인덱스를 만들어 두는데 이는 **인덱싱**이라고 한다.

이러한 인덱스를 생성할 때 사용되는 정보가 바로 웹사이트의 HTML 코드이다. <br>
즉 검색 엔진이 HTML 코드만으로 의미를 인지하는데 이때 **시맨틱 요소**를 해석하게 된다.

```html
<font size="6"><b>Hello</b></font> <!-- A -->
<h1>Hello</h1>                     <!-- B -->
```
위 두 줄은 같은 외형으로 나타난다. h1 태그의 디폴트 스타일이 A와 일치하기 때문이다.    
그러나 A는 아무 의도도 의미도 없다. B는 가장 상위 레벨의 제목이라는 **개발자가 의도한 요소의 의미**가 드러난다.    

-> **가독성 향상 / 유지보수성**

시맨틱 요소로 웹페이지와 검색 엔진 간의 의미론적 소통이 가능해지고, 효과적인 크롤링과 인덱싱이 가능해졌다. __시맨틱 태그란 브라우저/검색엔진/개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다.__    
시맨틱 태그로 시멘틱 웹이 실현되었는데, __시맨틱 웹이란 웹에 존재하는 웹페이지들에 메타데이터(Metadata)를 부여, 기존의 잡다한 데이터 집합에서 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상__

HTML 요소는 **non-semantic 요소** 와 **semantic 요소** 로 구분할 수 있다.

## # 4 기본 HTML 태그
### I. 문서형식 정의 tag

HTMl5에서는 `<!DOCTYPE html>` 로 문서 형식을 정의한다. 최상위에 위치해야한다.   
### II. html tag
html 태그는 모든 HTML 요소의 부모 요소이며 웹페이지에 단 하나만 존재    즉, 모든 요소는 html 요소의 자식 요소이며 html 요소 내부에 기술해야 한다 (doctype 제외)
### III. head tag
head 요소는 메타데이터(화면에 표시 X)를 포함하기 위한 요소로 웹 페이지에 단 하나만 존재.
1. title : 문서 제목 정의
2. style : 스타일 정보 정의
3. link : 외부 리소스 연계
4. script : client-side JavaScript 정의, src로 외부 JS 파일 로드 가능
    client-side JS? :  웹 페이지가 사용자의 웹 브라우저(클라이언트)에서 직접 실행되도록 하는 코드로 서버와 직접 통신 X
5. meta : 메타데이터 정의
    SEO를 위해 검색엔진이 사용할 키워드를 정의할 수 있다
    ```HTML
    <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
    ```
    name, content 속성값에 따라 웹페이지의 설명이나, 저자를 표기할 수 있다.
    ``` HTML
    <meta http-equiv="refresh" content="30">
    <!-- 웹페이지 30초 마다 새로고침 -->
    ```

### IV. body tag
웹 페이지 내에 단 하나만 존재하며, 메타데이터를 제외한 대부분의 페이지 구성요소가 body tag 안에 기술된다.

## # 5 텍스트 관련 태그

### I.제목 태그 (Headings tag)
Heading 태그는 제목을 나타낼 때 사용하며 h1에서 h6까지의 태그가 있는데, 숫자가 작을 수록 제목을 의미하며 글자의 크기도 가장 크다.   
시맨틱 웹의 의미를 살려서 제목 이외에는 사용하지 않는 것이 좋다.(검색엔진이 중요한 의미로 받아들일 가능성 상승)  
### II. 글자 형태 태그
1. b : bold 텍스트 **non-semantic**
2. strong : bold 텍스트 **semantic**
3. i : 이탤릭체 **non-semantic**
4. em : emphasized (텍스트 강조) 이탤릭체 **semantic**
5. small : small text   
    `<h3>HTML <small>Small</small> Formatting</h3>` 이렇게 하면
    > <h3>HTML <small>Small</small> Formatting</h3> 
6. mark : 텍스트 하이라이트
    `<h3>HTML <mark>Marked</mark> Formatting</h3> `
    > <h3>HTML <mark>Marked</mark> Formatting</h3>
7. del : ~~deleted (removed) text ~~
8. ins : inserted(added) text - underline 밑줄!
9. sub/sup : 각각 아래,위에 쓰인 텍스트
      `<p>This is <sub>subscripted</sub> text.</p>`
      `<p>This is <sup>superscripted</sup> text.</p>`
      > <p>This is <sub>subscripted</sub> text.</p>
      > <p>This is <sup>superscripted</sup> text.</p>


### III. 본문 태그
1. p : 단락 지정
2. br : 개행문자 empty element라 종료 태그 없이 `<br>` 로만 쓰면 됨
    cf. HTML : 연속된 공백의 삽입도 하나의 공백으로 표시 연속 줄바꿈도 1 개의 공백으로 표시
3. pre : 형식화된 텍스트 원본 서식 유지 (줄바꿈 공백 들여쓰기 그대로 / 코드 등 그대로 표기)
4. hr : 수평줄 삽입
5. q : 짧은 인용문, 브라우저에서는 " " 로 감싸져서 보임
6. blockquote : 긴 인용문, 브라우저에서는 들여쓰기 됨 css style 적용 가능

## # 6 Hyperlink

### I. href
    이동하고자 하는 파일의 경로를 값으로 받는다.
1. 디렉토리 : 폴더
    - 루트 : `\`
    - 홈 : `C:\Users\{계정명}`
    - 작업 중인 파일 위치 : `./`
    - 부모 디렉토리 : `../`

2. 파일 경로 : 파일 시스템에서 파일 위치를 나타내는 법
    - 절대 경로 : 현재 디렉토리와 관계 X 절대적 위치, 루트 기준
    - 상대 경로 : 현재를 기준으로 특정 파일의 상대적 위치   
        ex. `./index.html` `../../dist/index.js`   
cf. fragment identifier

        ```HTML
        <h2 id="top">Top of page!</h2>

        ... 

         <a href="#top">Go to top</a>
        ```
### II. target
링크를 클릭했을 때 윈도우를 어떻게 오픈할 지를 지정한다.   
    `_self` : 링크를 클릭 시 연결문서를 현재 윈도우에서 오픈(기본값)   
    `_blank` : 링크를 클릭 시 연결문서를 새로운 윈도우/탭에서 오픈

```HTML
    <!DOCTYPE html>
    <html>
        <body>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Visit google.com!</a>
        </body>   
    </html>
```
    

cf. `target="_blank"`를 사용해 외부 페이지를 오픈하는 경우, 이동한 외부 페이지에서 자바스크립트 코드를 사용해 악의적 페이지로 리다이렉트할 수 있는 보안 취약점(Tabnabbing 피싱 공격)이 있다. 따라서 `rel="noopener noreferrer"`로 공격에 대비할 것을 권장한다.

## # 7 List & Table
### I. 목록 (List)
1. 순서 없는 목록 (Unordered List) : `<li>`
2. 순서 있는 목록 (Ordered List) : `<ol>`

- `type` attribute를 사용하여 순서를 나타내는 문자 지정이 가능하다.
    | Value | Description     |
    |:-----:|-----------------|
    |  “1”  | 숫자 (기본값)   |
    |  “A”  | 대문자 알파벳   |
    |  “a”  | 소문자 알파벳   |
    |  “I”  | 대문자 로마숫자 |  
    |  “i”  | 소문자 로마숫자 |
- `start` attribute로 리스트 시작값을 설정할 수 있다.
    ```html
    <ol start="3">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ol>
    ```
    -> 3. coffe 4. tea...
- `reversed` 는 순서값을 역으로 표현한다.
    ```html
    <ol reversed>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ol>
    ```
    ->   
        3. Coffee
        2. Tea 
        1. Milk

3. 중첩목록 : 위 내용들을 중첩할 수 있다

목록 태그들은 내비게이션 메뉴를 만들 때 자주 사용된다.

### II. 테이블
표를 만들 때 사용하는 태그
<img src = "https://poiemaweb.com/img/html_table_structure.gif" >

`<td>`는 일반 셀 (data) `<th>`는 행 내부 제목 셀 (heading)

- Attribute
    - border : 테두리 두께 (CSS 설정하는 편이 더 good)
    - rowspan : 해당 셀이 점유하는 행의 수 지정
    - colspan : 셀이 점유하는 열의 수 지정   
        -> span은 약간 셀 병합의 개념...

## # 8 Image & Multimedia
### I. 이미지
이미지 삽입시 `<img>` 사용, `src` `alt` `width` `height`으로 각각 경로, 접근 실패 시 표시되는 대체 텍스트, 너비, 높이를 지정할 수 있다.
### II. 미디어
1. 오디오 : HTML5에서 새로 추가된 태그
2. 비디오 : ""
브라우저 별로 지원하는 파일 형식이 다르다.

## # 9 Forms
    사용자와의 커뮤니케이션을 위한 폼 태그

### I. form
사용자가 입력한 데이터의 수집을 위해 사용, input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함할 수 있다.
```html
<form>
    ...
    form elements (input, checkbox, radio button, submit button...)
    ...
</form>
```
| attribute | Value      | Description                              |
|:---------:|------------|------------------------------------------|
|   action  | URL        | 입력 데이터(form data)가 전송될 URL 지정 |
|   method  | get / post | 입력 데이터(form data) 전달 방식 지정    |

GET과 POST는 HTTP request method... 그거 맞다.

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="https://jsonplaceholder.typicode.com/users" method="get">
      ID: <input type="text" name="id" value="1"><br>
      username: <input type="text" name="username" value="Bret"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```
submit button이 클릭되면 input 태그에 입력된 데이터가 form 태그의 method 어트리뷰트에 지정된 방식으로 action 어트리뷰트에 지정된 서버측의 처리 로직에 전달된다... 고 한다.

### II. input
input 태그는 form 태그 중 가장 중요한데, 사용자로부터 데이터를 입력받기 위해 사용된다.   
다양한 종류는 type 속성에 의해 구분된다.    
서버에 전송되는 데이터는 `name`속성을 key로 `value` 속성을 값으로 하여 `key = value`의 형태로 전송된다.    
<br> 
: 엄청나게 다양한 type 값이 있다....

## # 10 Structure
레이아웃 구성을 위해 공간을 분할할 필요가 있다. <br>
공간을 분할할 수 있는 태그는 `div`, `span`, `table` 등이 있다.   
`<div>` 를 주로 이용하지만 non-semantic 이므로 시맨틱 태그를 사용하는 것이 더 나은 방법일 수 있다. (주의! IE에서는 작동 X)
<br>
공간 분할 태그는 다른 요소를 포함하는 컨테이너 역할을 한다.