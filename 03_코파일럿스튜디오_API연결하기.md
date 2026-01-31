# 🤖 Copilot Studio에서 커스텀 커넥터로 ‘학교알리미 API’ 연결하기 🔥

안녕하세요! 😊  
이번에는 **Copilot Studio의 Custom Connector(사용자 지정 커넥터)** 기능을 이용해서
**교육부 공식 사이트 ‘학교알리미’ OPEN API**를 에이전트에 연결해보겠습니다.

---

## 0) 먼저, 코파일럿에게 “학교알리미 API가 뭐예요?” 물어보기

<img width="800" height="543" alt="1" src="https://github.com/user-attachments/assets/8bc16adf-6a18-498a-a758-b184e2766af2" />

 - 코파일럿에게 위와 같이 질문해보면 보통 이런 설명이 나옵니다.
```markdown
### 🏫 학교알리미란?
학교알리미는 교육부에서 운영하는 **공식 사이트**로,  
각 학교가 의무적으로 공개해야 하는 정보를 모아 놓은 곳이에요.

예를 들면:
- 학교 기본 정보 (주소, 전화번호, 설립유형)
- 학생 수 / 학급 수
- 교사 수
- 급식 현황
- 학업성취도, 졸업 후 진로
- 예산·결산 정보

👉 이 정보를 사람이 웹사이트에서 직접 보는 게 아니라,  
👉 **프로그램이 자동으로 가져올 수 있게 만든 것이 ‘학교알리미 API’**입니다.

---

## 1) API가 뭐예요?

API는 **Application Programming Interface**의 약자로, “다른 프로그램이 데이터를 요청해서 받는 통로”라고 생각하시면 돼요.

즉,
- 웹사이트 → 사람이 직접 봄  
- API → 컴퓨터(프로그램)가 데이터만 깔끔하게 받음  

---

## 2) 학교알리미 API로 뭘 할 수 있나요?

학교알리미 API를 이용하면 개발자들이 이런 것들을 만들 수 있어요 😊
- ✅ 학교 정보 조회 앱
- ✅ 지역별 학교 비교 서비스
- ✅ 학부모용 학교 정보 대시보드
- ✅ 학술·교육 정책 분석용 데이터 수집

예)
- “서울 강남구 초등학교 학생 수 TOP 10”
- “급식실 보유한 중학교 찾기”
- “설립유형별 교사 1인당 학생 수 비교”

---

## 3) 어떤 데이터가 제공되나요?

대표적으로 아래 같은 데이터가 제공돼요.
- 학교 기본 정보
- 학생·교원 현황
- 학급 수
- 시설 현황
- 급식 운영 여부
- 재정(예산/결산)
- 학업성취도(일부 항목)

📌 그리고 대부분 **연도별 공시 데이터**라서  
“2023년 기준”처럼 연도(pbanYr)를 함께 넣어 조회하게 됩니다.

---

## 4) 누가 사용할 수 있나요?

아래 대상 모두 사용할 수 있어요.
- 개인 개발자 ✅
- 학생·학부모 ✅
- 연구자 ✅
- 기업 ✅

보통은
- **공공데이터포털(data.go.kr)** 또는 학교알리미 사이트에서
- **API 키(apiKey)**를 발급받아 사용합니다.
```
---

## 1) 시작해볼까요? (학교알리미 사이트 접속)

먼저 아래 주소로 접속한 후 가입과 로그인까지 해봅시다.

👉 https://www.schoolinfo.go.kr/ng/go/pnnggo_a01_l0.do

<img width="809" height="549" alt="2" src="https://github.com/user-attachments/assets/df22dcd6-c7d7-48cb-a638-549439bc888f" />

---

## 2) 인증키(API Key)를 저장해두기

<img width="796" height="540" alt="3" src="https://github.com/user-attachments/assets/5162a435-ae97-449f-89b2-64606e70c9be" />

인증키는 아주 중요하니 메모장이나 안전한 곳에 저장해 주세요.

 - 예시) ad42426604854c398f68eb7359aeafee

---

## 3) 요청 인자(Parameter) 구조 이해하기

이제 사이트에서 **API 제공 목록 → 학사/학생 → 학교기본정보**로 들어가 보면 “요청 인자”라는 항목이 보일 거예요.

<img width="803" height="545" alt="4" src="https://github.com/user-attachments/assets/89d5006a-a803-4e3c-8c42-cdc94cae9f3e" />

<img width="804" height="546" alt="33" src="https://github.com/user-attachments/assets/6eddd167-d604-44c6-b9a6-4cbe2b916978" />

대표 요청 인자는 이런 것들이 있어요:
- `apiKey` : 인증키
- `apiType` : API 종류(무슨 데이터를 가져올지)
- `pbanYr` : 공시 연도
- `sidoCode` : 시·도 코드
- `sggCode` : 시·군·구 코드
- `schulKndCode` : 학교급 코드

---

## 4) 시도·시군구 코드 파일도 받아볼까요?
<img width="802" height="531" alt="6" src="https://github.com/user-attachments/assets/c254d3ae-f884-4cc8-a0eb-268252478513" />

[시도시군고코드.xlsx](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.schoolinfo.go.kr%2Fdownload%2Fsido_sggCode.xlsx&wdOrigin=BROWSELINK)를 저장해서 열어보면, 지역 이름과 코드가 연결되어 있는 걸 확인할 수 있어요.

👉 이 코드들을 요청 인자(`sidoCode`와 `sggCode`)로 넣으면 원하는 지역의 학교 데이터를 API로 받아올 수 있습니다.

---

## 5) API를 직접 테스트해볼게요 (브라우저에서!)

이제 아래 URL을 **그대로 복사해서 브라우저에 붙여넣어** 열어보세요.

```markdown
https://www.schoolinfo.go.kr/openApi.do?apiKey=ad42426604854c398f68eb7359aeafee&apiType=22&pbanYr=2025&sidoCode=11&sggCode=11680&schulKndCode=02
```

### 🔎 이 URL이 의미하는 것
- `apiKey` : 내가 발급받은 개인 인증키
- `apiType` : 가져올 데이터 종류
- `pbanYr` : 공시 연도 (예: 2025)
- `sidoCode` : 시도 코드
- `sggCode` : 시군구 코드
- `schulKndCode` : 학교급 코드

<img width="800" height="543" alt="7" src="https://github.com/user-attachments/assets/15c9dd66-e1d4-428c-a963-43d17db25363" />

- 뭔지는 모르겠지만 내가 요청한 요청인자들을 활용하여 데이터를 준 것 같습니다!

👉 이렇게 “이 조건의 데이터를 주세요!”라고 API에 요청하면  
👉 그 조건에 맞는 데이터가 응답으로 내려오는 방식입니다 😊

---

## 6) 이제 Copilot Studio로 돌아가서 연결해볼게요!

Copilot Studio로 이동합니다.

👉 https://copilotstudio.microsoft.com

<img width="804" height="546" alt="8" src="https://github.com/user-attachments/assets/02187bfe-0af2-47fa-a1b3-3f6be6bb3187" />

1) **빈 에이전트 만들기**를 선택하고 시작해 주세요.  
2) 에이전트 이름도 바꾸고, 아이콘도 예쁘게 넣어주면 좋아요 😊

<img width="807" height="548" alt="9" src="https://github.com/user-attachments/assets/db612b46-4954-4140-9ff1-fea432c47d2c" />

3) 파운데이션 모델도 변경해볼까요?  
   - Agentic AI 사고에 적합한 **Claude Opus 4.5**를 선택합니다.

4) **지침 편집**을 눌러 아래 내용을 그대로 붙여넣고 저장합니다.

```markdown
# 📘 학교 알리미 에이전트 지침

## 1. 에이전트의 역할과 목적
이 에이전트는 학교알리미 OPEN API를 Custom Connector로 호출하여  
대한민국 전국 초·중·고·특수·각종학교의 공식 공시 정보를  
정확하고 이해하기 쉬운 문장으로 친절하게 안내하는 것을 목적으로 한다.

- 추측, 해석, 예측을 하지 않는다.
- API 응답에 포함된 공식 공시 데이터만 사용한다.
- 수치는 그대로 전달하되, 필요 시 최소한의 설명만 덧붙인다.

---

## 2. 데이터 호출 기본 원칙
- 모든 응답은 학교알리미 API 호출 결과를 기반으로 한다.
- 사용자 질문의 의도를 분석하여 apiType은 반드시 1개만 선택한다.
- `sidoCode`, `sggCode`는 무조건 `sidoCode_sggCode.csv`만 조회한다.  
  (다른 출처·추론·하드코딩 절대 금지)
- 불필요하게 여러 apiType을 동시에 호출하지 않는다.
- 필수 정보가 부족한 경우에만 추가 질문을 한다.

---

## 3. apiType 매핑 규칙 (변경 금지)

| 조회 항목 | apiType |
|---|---|
| 학교 기본 정보 | 0 |
| 수업일수 및 수업시수 현황 | 08 |
| 자유학기제 운영에 관한 사항 | 04 |
| 학교 현황 | 62 |
| 성별 학생 수 | 63 |
| 학년별·학급별 학생 수 | 09 |
| 전·출입 및 학업중단 학생 수 | 10 |
| 직위별 교원 현황 | 22 |
| 자격종별 교원 현황 | 64 |
| 표시과목별 교원 현황 | 24 |
| 대상별 학교폭력 예방 교육 실적 | 94 |
| 입학생 현황 | 51 |
| 학교용지 현황 | 16 |
| 교사 현황 | 17 |
| 학생교육활동 지원시설 현황 | 18 |
| 학교시설 개방에 관한 사항 | 20 |
| 학교회계 예·결산서(국공립) | 27 |
| 사립학교 교비회계 예·결산서 | 28 |
| 학교발전기금 | 30 |
| 환경위생관리 현황 | 42 |
| 시설안전 점검 현황 | 44 |
| 교복 구매 유형 및 단가 | 73 |
| 교육운영 특색사업 계획 | 67 |
| 장애인 편의시설 현황 | 21 |
| 급식 실시 현황 | 34 |
| 급식비 집행 실적 | 35 |
| 보건관리 현황 | 38 |
| 안전교육 계획 및 실시 현황 | 43 |
| 장학금 수혜 현황 | 55 |
| 동아리 활동 현황 | 56 |
| 학교도서관 현황 | 58 |
| 방과후학교 운영 계획 및 운영·지원 현황 | 59 |
| 학생·학부모 상담계획 및 실시 현황 | 61 |
| 직원 현황 | 68 |
| 학생 체력 증진에 관한 사항 | 90 |

- apiType은 숫자 코드 그대로 사용한다.
- 응답 시 apiType 숫자는 사용자에게 노출하지 않는다.

---

## 4. 필수 파라미터 사용 규칙

### 4.1 공통 파라미터
- `pbanYr` : 공시 연도 (`yyyy`)
  - 사용자 미언급 시 2025년 기준
  - 추가 질문 ❌
- `sidoCode` : 시·도 코드  
  - 반드시 `sidoCode_sggCode.csv`에서만 조회
- `sggCode` : 시·군·구 코드  
  - 반드시 `sidoCode_sggCode.csv`에서만 조회
- `schulKndCode` : 학교급 코드  
  - 사용자 미언급 시 고등학교(`04`) 기준
  - 추가 질문 ❌  
  - 코드값:
    - `02` 초등학교
    - `03` 중학교
    - `04` 고등학교
    - `05` 특수학교
    - `06` 기타학교
    - `07` 각종학교

---

## 4.2 `depthNo` 사용 규칙 (조건부 / 매우 중요)

- `depthNo`는 공통 파라미터 아님
- 아래에 명시된 특정 apiType에서만 필수 사용
- 그 외 apiType에서는 절대 포함하지 않는다

| apiType | depthNo 값 | 의미 |
|---|---|---|
| 04 | 10 | 자유학기제 1학기 |
| 04 | 20 | 자유학기제 2학기 |
| 24 | 10 | 표시과목별 교원 – 교과별 |
| 24 | 20 | 표시과목별 교원 – 과목별 |
| 27 | 10 | 학교회계 예산 |
| 27 | 20 | 학교회계 결산 |
| 28 | 10 | 사립학교 교비회계 예산 |
| 28 | 20 | 사립학교 교비회계 결산 |
| 35 | 10 | 급식비 부담 주체 |
| 35 | 20 | 급식비 지출 내역 |
| 58 | 10 | 학교도서관 자료 보유 |
| 58 | 20 | 학교도서관 운영 현황 |
| 58 | 30 | 학교도서관 이용 현황 |

---

## 4.3 `depthNo2` 사용 규칙 (조건부 / 매우 중요)

- `depthNo2`는 apiType 27, 28에서만 필수
- 그 외 apiType에서는 절대 포함하지 않는다

| apiType | depthNo2 | 의미 |
|---|---|---|
| 27 | 1 | 세입(예산) |
| 27 | 2 | 세출(예산) |
| 27 | 3 | 세입(결산) |
| 27 | 4 | 세출(결산) |
| 28 | 1 | 세입(예산) |
| 28 | 2 | 세출(예산) |
| 28 | 3 | 세입(결산) |
| 28 | 4 | 세출(결산) |

---

## 4.4 강제 규칙
- apiType 조건을 만족하지 않으면 `depthNo`, `depthNo2`는 무조건 미포함
- 사용자가 직접 언급하더라도 조건 불충족 시 무시

---

## 4.5 내부 결정 순서 (고정)
1. apiType 결정
2. apiType에 따라 `depthNo` 필요 여부 판단
3. apiType에 따라 `depthNo2` 필요 여부 판단
4. 필요 없는 파라미터는 null/미포함 처리

---

## 5. 사용자 질문 처리 흐름
1. 사용자 질문에서 다음 정보 파악:
   - 학교 위치(시·도 / 시·군·구)
   - 학교급
   - 공시 연도
   - 조회 목적
2. 필수 정보가 부족한 경우에만 추가 질문
3. apiType 1개 선택 후 API 호출
4. 응답은 다음 순서로 안내:
   - 핵심 요약
   - 주요 수치 및 항목
   - 간단한 설명(필요 시)

---

## 6. 응답 스타일 가이드
- 공공기관 안내 톤 유지
- 숫자는 그대로 전달
- 예시 표현:
  - “학교알리미 공시 기준으로 안내드리면…”
  - “○○년도 기준 공식 공시 정보입니다.”

---

## 7. 오류 및 데이터 없음 처리
- 데이터 없음:
  - “해당 연도 또는 조건에 대해 공시된 정보가 없습니다.”
- API 오류:
  - “현재 학교알리미 시스템 응답이 지연되고 있습니다. 잠시 후 다시 시도해 주세요.”

---

## 8. 금지 사항
- 비공식 정보 제공 금지
- API 응답(JSON) 구조 그대로 노출 금지

---

## 9. 지침의 목표
이 에이전트는 교육청, 학교, 학부모 누구에게나 신뢰 가능한 공식 학교 정보 안내 에이전트로 인식되어야 한다.
```

<img width="803" height="545" alt="10" src="https://github.com/user-attachments/assets/6acc349f-27fd-49ea-a9c8-be7983dac39a" />

---

## 7) 참고 자료(파일) 추가하기

이제 아까 다운받은 [sidoCode_sggCode.csv](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.schoolinfo.go.kr%2Fdownload%2Fsido_sggCode.xlsx&wdOrigin=BROWSELINK) 파일을 에이전트의 **참조 자료(Reference)**로 추가해 주세요.

<img width="770" height="503" alt="11" src="https://github.com/user-attachments/assets/6228fa57-bc20-4195-9563-63d7293e9244" />

---

## 8) 사용자 지정 커넥터 만들기 (Power Apps)

이제 **도구 추가 → 사용자 지정 커넥터(Custom Connector)** 를 선택하면 Power Apps 페이지로 이동합니다.

<img width="805" height="546" alt="12" src="https://github.com/user-attachments/assets/492f2a56-5c81-4fbd-afcf-0473f5bf8578" />

1) **새 사용자 지정 커넥터 → 처음부터 만들기**를 선택합니다.

<img width="804" height="546" alt="13" src="https://github.com/user-attachments/assets/0d3f9727-bf61-457d-b50c-237124041e95" />

2) 커넥터 이름을 간단하게 입력합니다.

<img width="804" height="546" alt="14" src="https://github.com/user-attachments/assets/ede9f00c-50f0-42d1-8fc9-2f7c6528dbed" />

3) **Host**에는 아래를 입력합니다.
- `schoolinfo.go.kr`

<img width="802" height="544" alt="0" src="https://github.com/user-attachments/assets/f21cfaf0-e24f-40d3-ad29-6b4260bcfb90" />

---

## 9) 인증 방식 설정 (API Key)

<img width="806" height="547" alt="16" src="https://github.com/user-attachments/assets/79fe7577-4c0c-4fc6-a031-da1d24e1e233" />

인증 설정에서 아래처럼 선택해 주세요.
- 인증 방식: `API 키`
- 매개 변수 레이블: `apikey`
- 매개 변수 이름: `apikey`
- 매개 변수 위치: `쿼리`

---

## 10) 동작(Action) 만들기

<img width="805" height="546" alt="17" src="https://github.com/user-attachments/assets/8197f1be-4060-42ab-8299-7a1a3d7dbc16" />

- 일반 내용을 위와 같이 넣어 주고, **샘플**에서 **가져오기**를 선택 합니다.

1) 동사(Verb)는 **GET**을 선택합니다.   
2) 아래 URL을 넣고 가져오기를 누릅니다.
```markdown
https://www.schoolinfo.go.kr/openApi.do?apiKey=ad42426604854c398f68eb7359aeafee&apiType=27&pbanYr=2025&sidoCode=11&sggCode=11680&schulKndCode=04&depthNo=10&depthNo2=1
```

<img width="802" height="544" alt="18" src="https://github.com/user-attachments/assets/6f50c942-b3b5-4c42-9f96-bb58288f6d7a" />

👉 쿼리들(학교 알리미 api의 **요청 인자** 값 들이죠?)이 자동 생성되는 것을 확인하실 수 있어요.

<img width="801" height="544" alt="19" src="https://github.com/user-attachments/assets/16630518-dbe1-4b12-82d7-3b7ac471cbdf" />

---

## 11) 쿼리(Query) 표시 옵션 설정

생성된 **🚨모든🚨**쿼리들을 **편집(Edit)** 으로 들어가서,
- 표시 여부: **Important**
- 유형(Type): **string**
으로 바꿔 주세요.

<img width="801" height="544" alt="19" src="https://github.com/user-attachments/assets/16630518-dbe1-4b12-82d7-3b7ac471cbdf" />

<img width="802" height="536" alt="20" src="https://github.com/user-attachments/assets/00c75588-1772-4e93-9c4b-7a9278caa1b0" />

---

## 12) Response(응답) 샘플도 넣어주기

Response의 **Default → 샘플에서 가져오기**를 선택한 후,  
아래 URL을 브라우저에서 열어 나온 결과값을 **전체 복사**해서 붙여넣고 가져오기를 누릅니다.

```markdown
https://www.schoolinfo.go.kr/openApi.do?apiKey=ad42426604854c398f68eb7359aeafee&apiType=22&pbanYr=2025&sidoCode=11&sggCode=11680&schulKndCode=02
```

<img width="803" height="545" alt="21" src="https://github.com/user-attachments/assets/f5fffba0-9b18-455f-89ab-c22521eb239e" />

<img width="804" height="546" alt="22" src="https://github.com/user-attachments/assets/5a004cd8-e1dd-4236-969d-41dff7cb9d96" />

---

## 13) 커넥터 만들기 & 테스트

<img width="802" height="544" alt="23" src="https://github.com/user-attachments/assets/d53dfa12-a734-4ebb-80a2-cd64e43f0dee" />

1) 우측 상단 **커넥터 만들기(Create connector)** 를 클릭합니다.  
2) 생성 완료 후 테스트를 진행해볼까요?

- **새 연결(New connection)** 을 선택  
- 본인의 `apiKey`를 입력 (학교 알리미 API에서 복사한) `예시) ad42426604854c398f68eb7359aeafee`
- 만들기(Create) 클릭

<img width="803" height="545" alt="24" src="https://github.com/user-attachments/assets/71af4672-0fcd-40ef-9a96-1bda9670671e" />

<img width="802" height="544" alt="25" src="https://github.com/user-attachments/assets/e8727a90-8de8-4ec7-829f-be2d622db127" />

👉 잘 연결되면 성공입니다! 🎉

---

## 14) Copilot Studio로 돌아가 커넥터 연결하기

Copilot Studio로 돌아와서,

1) 도구 추가에서 `School` 을 검색합니다.  
2) 방금 만든 `SchoolinfoAPIConnector`를 선택합니다.

<img width="804" height="546" alt="26" src="https://github.com/user-attachments/assets/361935cc-7afc-47ad-b0ed-582d9cd3623b" />

3) **추가 및 구성(Add and configure)** 을 선택합니다.

<img width="804" height="546" alt="27" src="https://github.com/user-attachments/assets/3b9de457-084b-4873-a647-46561b81bd9a" />

4) “추가 세부 정보”에서 자격 증명을  
   **작성자가 제공한 자격 증명**으로 변경합니다.

<img width="804" height="546" alt="28" src="https://github.com/user-attachments/assets/c74c2902-74c1-4ee0-9cc1-57ca50bd36f7" />

5) **입력 추가(Add inputs)** 를 눌러 `depthNo`와 `depthNo2`를 **제외한** 목록의 쿼리를 모두 추가합니다.

<img width="805" height="546" alt="30" src="https://github.com/user-attachments/assets/f411cb10-5f91-4dcd-a22c-db9e69aeb64b" />

6) `apiKey`는 **사용자 지정 값**으로 바꾸고 본인 키를 넣습니다. (학교 알리미 API에서 복사한) `예시) ad42426604854c398f68eb7359aeafee`

<img width="805" height="546" alt="30" src="https://github.com/user-attachments/assets/591d3ab7-88d4-4e3d-b060-a9b05b3226ac" />

7) 상단 **저장(Save)** 을 누릅니다.

<img width="804" height="546" alt="31" src="https://github.com/user-attachments/assets/5fedfd18-808a-4600-be01-0fa8804275ec" />

---

## 15) 마지막으로 에이전트 테스트해보기

우측 상단 **에이전트 테스트 옆 + 버튼**을 클릭해서 테스트를 시작합니다.

<img width="802" height="537" alt="32" src="https://github.com/user-attachments/assets/e87fedf4-c389-42ab-9120-f6a55d203ff5" />

예시 프롬프트:
```markdown
서울시 강남구 기준, 대상별 학교폭력 예방교육 실적 가장 좋은 고등학교 Top10 알려줘.
```

```markdown
서울시 강남구 입학생 가장 많은 고등학교 Top10 알려줘
```

```markdown
서울시 강남구 성별 학생 수 알려줘
```

```markdown
서울시 강남구 전·출입 및 학업중단 학생 수 가장 많은 학교 Top10 알려줘
```
