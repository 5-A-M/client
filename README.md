# 클라이언트 코드

## vite 실행 명령어

- `npm start`: development 환경 실행
- `npm run build`: 빌드파일 생성
- `npm run preview`: 빌드파일 기반 production 환경 테스트
- host 옵션은 `--host <host>`를 명령어에 추가하여 실행

## 환경변수

- .env 파일 생성 후 아래 변수 등록 필요
  - `VITE_API_URL`: 백엔드 서버 URL
  - `VITE_TOSS_CLIENT_API_KEY`: 토스페이먼츠 클라이언트 키
- 프론트 코드 내에서 환경변수는 `import.meta.env.<환경변수 키값>`으로 불러옴
