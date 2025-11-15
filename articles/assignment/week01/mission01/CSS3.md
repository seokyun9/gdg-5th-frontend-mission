## Lesson01. CSS 기본 문법
HTML5에서는 **HTML는 정보와 구조화**, **CSS는 styling의 정의**라는 본연의 임무에 충실한 명확한 구분이 이루어짐   
HTML과 CSS는 **각자의 문법을 갖는 별개의 언어**이며 HTML은 CSS를 포함 가능   
BUT! HTML없이 단독으로 존재하는 CSS는 의미 X
### 1. 셀렉터 (선택자)
CSS 는  HTML 의 스타일 정의에 사용되므로 **HTML 요소를 선택** 할 수 있어야 함   
셀렉터는 스타일 적용을 위한 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단!   
rule set의 집합을 스타일시트라고 한다.

### 2. 프로퍼티 (속성)
셀렉터 : element 선택, {} 내에 프로퍼티와 값을 지정하는 것으로 스타일 정의   
여러 프로퍼티 연속 지정 시 ; 로 구분

### 3. 값 (속성값)
{} 내에 {프로퍼티 : 값} 형태로 선언 시 해당 프로퍼티에 사용할 수 있는 값을 “키워드”나 “크기 단위” 또는 “색상 표현 단위” 등의 **특정 단위**로 지정

### 4. HTML CSS 연동
1. Link style   
    `HTML`
    ```html
      <head>
        <link rel="stylesheet" href="css/style.css">
      </head>
    ```
    `CSS`
    ```css
    h1 { color: red; }
    p  { background: blue; }
    ```
    
2. Embedding style   
    HTML 내부에 CSS 포함 간단한 페이지가 아니라면 링크하는 편이 좋음   
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          h1 { color: red; }
          p  { background: aqua; }
        </style>
      </head>
      <body>
        <h1>Hello World</h1>
        <p>This is a web page.</p>
      </body>
    </html>
    ```   
3. Inline style
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <h1 style="color: red">Hello World</h1>
        <p style="background: aqua">This is a web page.</p>
      </body>
    </html>
    ```
HTML요소의 style 프로퍼티에 CSS를 기술하는 방식 JavaScript가 동적으로 CSS를 생성할 때 사용하는 경우가 있다

⇒ 걍 link 쓰자~

## Lesson02. 셀렉터
    style을 적용하고자하는 HTML 요소를 셀렉터로 특정하고 선택된 요소에 스타일을 정의
여러개의 셀렉터 연속 지정 가능, 쉼표(,) 로 구분   
`h1, p { color: red; }`    
like this!

### 1. 전체 셀렉터
`*` : HTML 문서 내의 모든 요소 선택 (<html>,<head>를 포함한 모든 요소)

### 2. 태그 셀렉터
`태그명` : 지정된 태그명에 해당하는 요소 선택

### 3. ID 셀렉터
`#id 속성 값` : 일치하는 id 요소를 선택 (id는 중복 x 유일값)

### 4. 클래스 셀렉터
`.class 속성 값` : class 어트리뷰트 값을 지정하여 일치하는 요소 선택 (class : 중복될 수 있음)

class 속성 값은 공백으로 구분하여 여러 개 지정할 수 있다<br>  아래와 같이 미리 클래스 셀렉터로 스타일을 정의해 두고 HTML 요소는 이미 정의되어 있는 클래스를 지정하는 것으로 필요한 스타일을 지정할 수 있다. 

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* class 어트리뷰트 값이 text-center인 모든 요소를 선택 */
    .text-center { text-align: center; }
    /* class 어트리뷰트 값이 text-large인 모든 요소를 선택 */
    .text-large  { font-size: 200%; }
    /* class 어트리뷰트 값이 text-red인 모든 요소를 선택 */
    .text-red    { color: red; }
    /* class 어트리뷰트 값이 text-blue인 모든 요소를 선택 */
    .text-blue   { color: blue; }
  </style>
</head>
<body>
  <p class="text-center">Center</p>
  <p class="text-large text-red">Large Red</p>
  <p class="text-center text-large text-blue">Center Large Blue</p>
</body>
</html>
```

이것은 **재사용**의 측면에서 유용하다.

### 5. 어트리뷰트 셀렉터
- `셀렉터[어트리뷰트]` : 지정된 어트리뷰트를 갖는 모든 요소 선택
- `셀렉터[어트리뷰트=”값”]` : 지정된 어트리뷰트와 값이 일치하는 모든 요소 선택
- `셀렉터[어트리뷰트~=”값”]` : 지정된 어트리뷰트의 값이 지정된 값을(공백으로 분리된)단어로 포함하는 요소 선택
- `셀렉터[어트리뷰트|=”값”]` : 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트 값 뒤 연이은 하이픈(“값-“)으로 시작하는 요소 선택
- `셀렉터[어트리뷰트^=”값”]` : 지정된 어트리뷰트 값으로 시작하는 요소를 선택
- `셀렉터[어트리뷰트$=”값”]` :지정된 어트리뷰트 값으로 끝나는 요소 선택
- `셀렉터[어트리뷰트*=”값”]` :지정된 어트리뷰트 값 포함하는 요소 선택

### 6. 복합 셀렉터
자신의 1 level 상-하위 요소 : 부모요소-자식요소   
n레벨 하위 요소 : 후손(하위)요소

1. 후손 셀렉터 : `셀렉터 A 셀렉터 B`
    
    셀렉터 A의 모든 후손 요소 중 B와 일치하는 요소 선택
    
    ex. `div p { color: red; }` : div 요소의 후손요소 중 p
    
2. 자식 셀렉터 : `셀렉터A > 셀렉터B`
    
    셀렉터A의 모든 자식 요소 중 B와 일치하는 요소 선택
    
3. 형제 셀렉터
    
    형제 관계에서 뒤에 위치하는 요소 선택 시 사용
    
    1. 인접 형제 셀렉터 : `셀렉터 A + 셀렉터 B`
        
        셀렉터A의 형제 요소 중 바로 뒤에 위치하는 셀렉터B 요소를 선택
        
        A와 B 사이에 다른 요소가 존재하면 선택 X
        
    2. 일반 형제 셀렉터 : `셀렉터 A ~ 셀렉터 B` 
        
        셀렉터A의 형제 요소 중 A 뒤에 위치하는 B 요소 모두 선택
        

### 7. 가상 클래스 셀렉터
    요소의 특정 상태에 따라 스타일 정의

    특정 상태 ?
    - 마우스가 올라와 있을때
    - 링크를 방문했을 때와 아직 방문하지 않았을 때
    - 포커스가 들어와 있을 때

이러한 특정 상태에는 원래 클래스가 존재 X

but  가상 클래스를 임의로 지정하여 선택

가상클래스는 마침표(.) 대신 콜론(:)을 사용

 CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

```css
selector:pseudo-class {
  property: value;
}
```

### 8. 가상 요소 셀렉터

     요소의 특정 부분에 스타일을 적용하기 위하여 사용

    특정 부분이란 ?

    - 요소 콘텐츠의 첫글자 또는 첫줄
    - 요소 콘텐츠의 앞 또는 뒤

가상 요소에는 두개의 콜론(::)을 사용한다. 

CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.

```css
selector::pseudo-element {
  property:value;
}
```

## Lesson03. 프로퍼티 값의 단위
셀렉터 {프로퍼티 : 값; 프로퍼티 : 값; }…   
의 형태를 띄는 CSS 문에서   
프로퍼티에는 키워드, 크기 단위, 색상 표현 단위 등의 특정 단위를 갖는 값을 지정한다.

### 1. 키워드

각 프로퍼티마다 사용 가능한 키워드가 있다.

### 2. 크기 단위

cm, mm, inch 등의 단위도 존재하나 CSS에서 사용하는 대표적인 크기 단위는 px, em, %이다.

px : **절대값** / em, % :  **상대값**

대부분 브라우저의 폰트 사이즈 기본값은 16px, 1em, 100%이다. 프로퍼티 값이 0인 경우, 단위를 생략할 수 있다.

1. px : 화소 단위
2. % : 백분율 단위의 상대 단위, 상대사이즈를 설정
3. em : 배수 단위 ex. `2em` 은 2배
    
    중첩된 자식 요소에 em을 지정하면 모든 자식 요소의 사이즈에 영향을 미치기 때문에 주의하여야 한다 즉, 상대 단위인 em의 기준이 **상속**의 영향으로 바뀔 수 있기 때문!
    
4. rem : **최상위 요소(html)의 사이즈를 기준**으로 한 배수
    
    사용자 맞춤 설정에 따라 레이아웃 조절 가능, 가변적 대응
    
5. viewport 단위 (**vh, vw, vmin, vmax**)

### 3. 색상 표현 단위

키워드 사용 가능하나 색상 수에 제한

HEX 코드, RGV, RGVA,HSL,HSLA 등의 단위 有

## Lesson04. 박스 모델
box는 content, padding, border, margin으로 구성

| 명칭 | 설명 |
| --- | --- |
| Content | 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역 / width, height 프로퍼티를 갖는다. |
| Padding | 테두리(Border) 안쪽에 위치하는 요소의 내부 여백 영역 / 프로퍼티 값은 패딩 영역의 두께를 의미하며 기본색은 투명 / 요소에 적용된 배경의 컬러, 이미지는 패딩 영역까지 적용 |
| Border | 테두리 영역으로 border 프로퍼티 값은 테두리의 두께를 의미 |
| Margin | 테두리(Border) 바깥에 위치하는 요소의 외부 여백 영역 / 프로퍼티 값은 마진 영역의 두께를 의미 / 기본적으로 투명하며 배경색을 지정 불가 |

### 1. **width / height 프로퍼티**
요소의 너비와 높이를 지정하기 위해 사용   
이때 지정되는 요소의 너비와 높이의 대상 : **콘텐츠 영역**   
실제 콘텐츠가 크면 영역을 넘치게 됨 <br> → `overflow:hidden;` 으로 넘친 콘텐츠 감출 수 O

### 2. margin /padding 프로퍼티
4 방향 (top, right, left, bottom)에 대하여 지정 가능

`max-width` 프로퍼티를 사용하면 브라우저 너비가 요소의 너비보다 좁아질 때 자동으로 요소의 너비가 줄어듦

↔ `min-width`

### 3. border 프로퍼티
모두 방향 별 지정 가능

`border-style` : 테두리 선의 스타일 지정   
`border-width` : 테두리 두께 지정, 위 프로퍼티와 꼭 함께 사용해야함   
`border-color` : 테두리 색상 지정 , style과 함께 사용해야함   
`border-radius` : 테두리 모서리 둥글게   
`border` : 너비 스타일 컬러 한번에 설정    
`box-sizing` : width, height 대상 영역 변경   
    기본 : `content-box` → `border-box`

## Lesson05. Display

### 1. display 프로퍼티

layout 정의에 사용

| 키워드 | 설명 |
| --- | --- |
| block | block 특성을 가지는 요소(block 레벨 요소)로 지정 (ex. `div` `h` `ol` `hr`)  |
| inline | inline 특성을 가지는 요소(inline 레벨 요소)로 지정 (ex. `span` `a` `img` `br`)  |
| inline-block | inline-block 특성을 가지는 요소(inline-block 레벨 요소)로 지정 |
| none | 해당 요소를 화면에 표시하지 않는다 (공간조차 사라진다) |
1. block : 항상 새로운 라인에서 시작, 화면 전체 가로폭 차지, block 내에 inline 레벨 요소 포함 가능, width, height, margin, padding 지정 가증
2. inline : 새로운 라인 시작 X,  문장 중간에 들어갈 수 O →줄바꿈 X, content 너비만큼 가로폭 차지, **width, height, margin-top, margin-bottom 프로퍼티를 지정 X**
3. inline-block : block과 inline 짬뽕- 줄바꿈X 프로퍼티 정의 가능, content 너비만큼 가로폭 차지

### 2. visibility 프로퍼티

요소의 렌더링 여부

`visible` `hidden` `collapse` `none`

### 3. opacity 프로퍼티

요소의 투명도 설정 

**0.0 ~ 1.0**의 값을 입력하며 0.0은 투명, 1.0은 불투명을 의미

## Lesson06. 백그라운드

### 1. background-image 프로퍼티

요소에 배경 이미지 지정

### 2. background-repeat 프로퍼티

배경 이미지의 반복

복수개의 이미지를 설정 시, 먼저 설정된 이미지가 전면에 출력

### 3. background-size 프로퍼티

배경 이미지의 사이즈 지정

고유 비율을 유지하기 때문에 설정에 따라 이미지의 일부가 보이지 않을 수 있다.

…

## Lesson08-09. position-float (위치-정렬)

### 1. position 프로퍼티

요소의 위치 정의

1. static : 기본위치
2. relative : 상대위치
3. absolute : 절대위치
4. fixed : 고정위치

### 2. z-index 프로퍼티

z-index 프로퍼티에 큰 숫자값을 지정할수록 화면 전면에 출력된다. position 프로퍼티가 static 이외인 요소에만 적용된다.

### 3. overflow 프로퍼티

자식 요소가 부모 요소의 영역를 벗어났을 때 처리방법 정의

---

## Lesson10. 상속과 적용 우선 순위

### 1. 상속

상위(부모, 조상) 요소에 적용된 프로퍼티를 하위(자식, 자손) 요소가 물려 받는 것, 모든 프로퍼티가 상속되는 것은 아니다.

상속되지 않는 경우(상속받지 않는 요소 또는 상속되지 않는 프로퍼티), `inherit` 키워드를 사용하여 명시적으로 상속받게 할 수 있다.

### 2.캐스캐이딩(Cascading)

요소는 하나 이상의 CSS 선언에 영향을 받을 수 있다. 

이때 충돌을 피하기 위해 **CSS 적용 우선순위**가 필요한데 이를 **캐스캐이딩(Cascading Order)**이라고 한다.

캐스캐이딩에는 다음과 같이 세가지 규칙이 있다.

1. 중요도 : **어디에 선언**되었는지에 따라 우선순위 change
2. 명시도 :대상을 **명확하게 특정**할수록 명시도가 높아지고 우선순위가 높아진다.
    
    ```css
    !important > 인라인 스타일 > 아이디 선택자 > 클래스/어트리뷰트/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성
    ```
    
3. 선언 순서 : **선언된 순서**에 따라 우선 순위가 적용된다. 즉, 나중에 선언된 스타일이 우선 적용된다.