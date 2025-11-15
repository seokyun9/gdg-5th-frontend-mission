# npm VS pnpm

## npm
    Node.js의 표준 패키지 매니저, 설치 시 기본 포함

#### 기본 명령어 예제
```
# npm 초기화
yarn init -y

# 패키지 설치
npm install react

# 패키지 삭제
npm uninstall react

# 패키지 실행
npm run start
```

## pnpm
`Performant npm`

    보다 효율적인 설치 및 관리 위한 패키지 매니저
    전역적 패키지 저장과 심볼릭 링크로 디스크 사용량 down

#### 기본 명령어 예제
```
# pnpm 초기화
pnpm init

# 패키지 설치
pnpm install react

# 패키지 삭제
pnpm remove react

# 패키지 실행
pnpm run start
```

## 그래서... npm VS pnpm?
| 구분               | npm                                             | pnpm                                               |
|--------------------|-------------------------------------------------|----------------------------------------------------|
| 디스크 공간 효율성 | 중복 저장으로 인해 같은 패키지가 여러 번 설치됨 | 전역 캐시를 활용하여 디스크 사용량 절약            |
| 설치 속도          | 기존 방식으로 설치, 속도가 느릴 수 있음         | **중복 파일**을 줄이고 링크를 활용하여 빠르게 설치     |
| 의존성 관리        | 중첩된 node_modules 구조 사용                   | 심볼릭 링크를 통해 의존성 충돌 최소화              |
| 호환성             | 대부분의 Node.js 프로젝트에서 기본적으로 사용됨 | 일부 패키지에서 예상하지 못한 문제 발생 가능       |
| 보안 및 무결성     | npm audit로 취약점 검사 가능                    | content-addressable storage를 사용하여 무결성 보장 |

<br>

cf. [npm과 pnpm의 차이점 알아보기](<https://javierju.github.io/react/npm-vs-pnpm/>)