# 🚀 MIEE Agenthon 개발환경 셋팅 가이드

> 🎯 **MIEE Agenthon 참가자를 위한 개발환경 셋업 매뉴얼**

본 Agenthon 프로그램은 참가자 모두에게 **동일한 성능 및 개발 환경**을 제공하기 위해 ☁️ **Azure Virtual Desktop (AVD)** 기반의 표준 개발 환경을 제공합니다.

---

## 🧠 시작 전 꼭 읽어주세요

아래 상황에 해당하는 경우 👉 **AVD 사용을 권장**합니다.

- iPad / Android 환경에서 참여하는 경우  
- Windows / Mac 환경이지만 **성능 이슈**가 발생하는 경우  

➡️ 이 경우 **[1️⃣ Windows App 설치 및 실행](#step1)** 단계부터 시작하세요.

---

반대로 아래 조건에 해당한다면,

- OS 및 성능 이슈가 전혀 없는 경우  
- 로컬 환경에서 개발이 가능한 경우  

➡️ **AVD는 필수가 아니며**,  
➡️ **계정만 확인 후 바로 [2️⃣ Copilot Studio 접속](#step2)** 단계로 이동하셔도 됩니다.

---

## 🧭 전체 진행 흐름 (Quick Navigation)

- 👉 [1️⃣ Windows App 설치 및 실행](#step1)  
- 👉 [2️⃣ Copilot Studio 접속 및 에이전트 게시](#step2)  
- 👉 [3️⃣ Microsoft Foundry 접속](#step3)  

---

<a id="step1"></a>
## 1️⃣ Windows App 설치 및 실행 (AVD Client)

<details>
<summary><strong>🔍 여기를 클릭하여 Windows App 설치 및 실행 절차를 확인하세요. Window OS를 이미 사용하시는 경우, 2번으로 넘어가시길 추천 드립니다!</strong></summary>
Azure Virtual Desktop(AVD)에 접속하기 위해 먼저 **Windows App (AVD Client)** 를 설치합니다.

### 📥 Windows App 다운로드

- 💻 [Windows용](https://apps.microsoft.com/detail/9n1f85v9t8bn?hl=ko-KR&gl=US)
- 🍎 [Mac용](https://apps.apple.com/us/app/windows-app/id1295203466?mt=12)
- 🤖 [Android용](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en&pli=1)
- 📱 [iPad용](https://apps.apple.com/us/app/windows-app-mobile/id714464092?platform=ipad)

---

### ▶️ Windows App 실행

- Windows App을 설치 후 실행합니다.
- 최초 실행 시 **No Devices** 화면이 표시됩니다.

<img width="1072" height="1012" alt="스크린샷 2025-12-15 00 18 17" src="https://github.com/user-attachments/assets/0b8ec373-a449-41a9-a152-95a5f9385c45" />

---

### ➕ 계정 추가 (Work or School Account)

- 우측 상단의 **➕ 버튼**을 클릭합니다.
- **Add Work or School Account** 를 선택합니다.

<img width="1281" height="1012" alt="스크린샷 2025-12-15 00 18 24" src="https://github.com/user-attachments/assets/1ed1743a-14f4-4750-9edd-af68243bff2a" />

---
### 👤 계정 정보 입력

- 위에서 확인한 **개인 계정**을 입력합니다.
<img width="692" height="810" alt="스크린샷 2025-12-15 00 18 55" src="https://github.com/user-attachments/assets/3a0700e4-459f-4671-b720-9b4919de2b5e" />

---
### 🔑 초기 비밀번호 입력

- 초기 비밀번호 **`Elevate!`** 를 입력합니다.
<img width="921" height="810" alt="스크린샷 2025-12-15 00 19 14" src="https://github.com/user-attachments/assets/d1a60aa7-d252-4b3f-a552-11e0ea260ec8" />

---
### 🔐 비밀번호 변경

- 최초 로그인 시 **비밀번호 변경이 요구됩니다.**
- 비밀번호는 아래 규칙을 충족해야 합니다.
<img width="921" height="810" alt="스크린샷 2025-12-15 00 19 30" src="https://github.com/user-attachments/assets/5e8a6f59-3cae-4365-a67a-a9ba09f6d4a3" />

- **비밀번호 규칙** : 8자 이상 / 대문자 포함 / 소문자 포함 / 숫자 포함 / 특수문자 포함
- 변경 완료 후 **Sign in** 버튼을 클릭합니다.
---
### 🖥️ AVD 세션 접속

- 로그인이 완료되면 **Devices** 화면에  
  **AVD-WS | SessionDesktop** 카드가 표시됩니다.
<img width="1072" height="1012" alt="스크린샷 2025-12-15 00 20 07" src="https://github.com/user-attachments/assets/24bf696a-d71e-4dc8-963b-f8fb0081efb6" />

- **SessionDesktop** 을 더블클릭합니다.
---
### ✅ 최종 로그인

- 방금 변경한 **새 비밀번호**를 입력합니다.
<img width="662" height="377" alt="스크린샷 2025-12-15 00 20 26" src="https://github.com/user-attachments/assets/c158f961-10f1-42b9-a3eb-3752dddb998f" />

---
### 🖥️ AVD 세션 접속 완료
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 20 46" src="https://github.com/user-attachments/assets/48bcb102-59c0-4fff-a5a8-243bc3e7f62b" />

- 접속 에러가 나시는 경우 일단 아래 **2️⃣ Copilot Studio 접속 및 에이전트 게시**로 넘어가세요.

</details>

---

<a id="step2"></a>
## 2️⃣ Copilot Studio 접속 및 에이전트 게시

본 단계에서는 **Copilot Studio**에 접속하여 에이전트를 생성하고 **게시(Publish)** 까지 완료합니다.

---

### 🌐 Copilot Studio 접속

- **Edge 브라우저**를 실행합니다.
- 주소창에 아래 URL을 입력하여 접속합니다.
	- copilotstudio.microsoft.com
- 🚨 **1️⃣ Windows App 설치 및 실행 절차를 skip한 분은** 반드시 **사전에 안내된 계정을 확인**하신 후 **해당 계정으로 로그인**해주세요. 🚨

<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 24 07" src="https://github.com/user-attachments/assets/91965a1d-4346-4ed7-8974-5fadb7b0f0ee" />

---
### 🤖 에이전트 생성

- 좌측 메뉴 바에서 **에이전트** 를 선택합니다.
- 우측 상단의 **빈 에이전트 만들기** 버튼을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 24 15" src="https://github.com/user-attachments/assets/40ab0b1e-1775-471e-9794-02a3498ebae8" />

---
### ⚙️ 에이전트 설정 변경

- 에이전트가 **프로비전**되면  
  우측 상단의 **설정** 버튼을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 24 53" src="https://github.com/user-attachments/assets/1257b52f-188c-478e-975a-038d39294bf2" />

---
### 🔐 인증 설정

- **보안** 메뉴를 선택합니다.
- 하위 메뉴에서 **인증** 을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 01" src="https://github.com/user-attachments/assets/19f5bd43-7d14-49ff-82b4-12cab83030b4" />

- **인증 없음** 을 선택합니다.
- 우측 상단의 **저장** 버튼을 선택합니다.

<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 08" src="https://github.com/user-attachments/assets/af3fa4f8-1a13-4f16-82ae-900794908ac6" />

- **게시로 이동** 버튼을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 25" src="https://github.com/user-attachments/assets/28543a9a-2382-48f9-a3e0-de8eb87985f7" />

---
### 🚀 에이전트 게시 (Publish)
- 우측 상단의 **게시** 버튼을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 38" src="https://github.com/user-attachments/assets/d7ad1407-e16f-412c-a609-78377509d6c6" />



<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 44" src="https://github.com/user-attachments/assets/7b7026c2-912f-47a8-9652-0281d9fa02e6" />

- 다시 한 번 **게시** 버튼을 선택하여 최종 게시를 완료합니다.

---

### 🔍 에이전트 미리보기 (Preview)

- **프리뷰 공유** → **데모 웹사이트** 를 선택합니다.
- **Open demo website** 버튼을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 26 27" src="https://github.com/user-attachments/assets/385ac8d6-8c25-4b84-9c1b-c1167d17d6fa" />

---
### 💬 에이전트 테스트

- 내가 만든 에이전트와 **직접 대화를 해봅니다 😎**
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 27 10" src="https://github.com/user-attachments/assets/f469443e-5614-4f9f-9e97-50c8f0066676" />

---

<a id="step3"></a>
## 3️⃣ Microsoft Foundry 접속

본 단계에서는 **Microsoft Foundry**에 접속하여 AI 모델을 탐색하고 프로젝트를 생성합니다.

<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 44 47" src="https://github.com/user-attachments/assets/d1711767-f259-4e57-9661-d59aa82fb9a4" />

---

### 🌐 Microsoft Foundry 접속

- 브라우저를 열고 아래 주소로 접속합니다.
	- ai.azure.com
- 접속 후 우측 상단의 **새 Foundry** 토글을 **ON** 으로 변경합니다.

<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 44 56" src="https://github.com/user-attachments/assets/aac9ae69-f303-4d94-8c06-6092adc0f1d3" />

---

### 📁 새 프로젝트 생성

- **새 프로젝트 만들기** 버튼을 선택합니다.

<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 44 59" src="https://github.com/user-attachments/assets/f305b137-35c8-4d47-8518-f21a36d73c03" />

- 임의의 **프로젝트 이름**을 입력한 후 **만들기** 버튼을 선택합니다.

---

### 🧠 모델 탐색 시작

- **Start Building** 을 선택합니다.
- 이어서 **Browse models** 를 선택합니다.

<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 46 05" src="https://github.com/user-attachments/assets/b7690182-f9eb-4b8c-8c5f-88b511ba4598" />

- 사용 가능한 **파운데이션 모델**들을 자유롭게 둘러봅니다.

<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 46 14" src="https://github.com/user-attachments/assets/250dcc23-62ed-4ac4-9d58-b095e20084ce" />

---

# 🎉 고생 많으셨습니다!

이제 **MIEE Agenthon 에이전톤을 위한 모든 준비가 완료되었습니다! 🚀**  
마음껏 에이전트를 만들고, 실험하고, 확장해봅시다! 😎
