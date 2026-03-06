# 🚀 | Global Training Partner | Microsoft AI Skilling 개발 환경 셋팅 가이드 |

> 🎯 **Microsoft AI Skilling 프로그램을 진행하는 Global Training Partner를 위한 환경 셋업 매뉴얼**

본 Microsoft AI Skilling 프로그램은 참가자 모두에게 **동일한 성능 및 개발 환경**을 제공하기 위해  
☁️ **Azure Virtual Desktop (AVD)** 기반의 **표준 개발 환경**을 제공합니다.

---

## 🔥 Global Training Partner Studio 계정 확인
<details>
<summary><strong>🔍 여기를 클릭하여 **GTPstudio** 계정을 확인 하세요!</strong></summary>

| Partner | ID | PW |
|---|---|---|
| DMOA | `dmoa@GTPstudio.onmicrosoft.com` | `Elevate!` |
| Gownet | `gownet@GTPstudio.onmicrosoft.com` | `Elevate!` |
| Spin | `spin@GTPstudio.onmicrosoft.com` | `Elevate!` |
| SquareNet | `squarenet@GTPstudio.onmicrosoft.com` | `Elevate!` |
| TekVille | `tekville@GTPstudio.onmicrosoft.com` | `Elevate!` |
| ToBeEdu | `tobeedu@GTPstudio.onmicrosoft.com` | `Elevate!` |

</details>

## 🧭 전체 진행 흐름 (Quick Navigation)

- 👉 [0️⃣ AVD 환경 셋팅](#step0)  
- 👉 [1️⃣ Windows App 설치 및 실행](#step1)  
- 👉 [2️⃣ Copilot Studio 접속 및 에이전트 게시](#step2)  
- 👉 [3️⃣ Microsoft Foundry 접속](#step3)  

---

<a id="step0"></a>
## 0️⃣ AVD 환경 셋팅 

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/28d0ba1a-38fc-49d6-a775-adbaea3b1599" />

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/c19cb4c3-a956-4179-9103-0e7a79f3bd23" />

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/5edcbebf-7d4a-4fe0-9b14-fa7d57264628" />

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/f4132a5d-798e-44ac-baa5-16668b764a93" />

### 📌 확인 사항

관리자 계정이 **Azure 구독의 다음 권한 중 하나로 설정되어 있는지 확인합니다.**

- **Owner (소유자)**
- **Contributor (기여자)**

⚠️ 해당 권한이 없으면 **AVD 리소스 생성이 불가능합니다.**

---

### 👥 Entra ID 동적 Group 설정

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/e0cd4ea6-fef1-48f4-8627-80b15cbcb7d5" />

- Azure Portal에서 **Microsoft Entra ID**에 접속합니다.


<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/3f7ba499-e837-418a-8d9e-e6231fe709e2" />

- 좌측 메뉴에서 **Groups → 새 그룹(New Group)** 을 선택합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/ca968336-3e64-4a4c-aea8-78626c1fe5e1" />

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/758a079b-0349-4ade-adc1-7127afbdd3a4" />

- **Group type:** 보안(Security)
- **Group Name:** 임의 기입
- **Membership type:** 동적 사용자(Dynamic User)

이후 **동적 쿼리 추가(Add Dynamic Query)** 를 선택합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/ccdfa29c-225c-4a81-ac00-92dc264f07f7" />

- 우측의 **편집(Edit)** 을 선택합니다.

- 아래 쿼리를 복사하여 붙여 넣습니다.

- **테넌트 전체 사용자를 동적으로 그루핑하는 쿼리 입니다.**

```
(user.accountEnabled-eq true)-and (user.userType-eq "Member")
```

 📌 **설명**

해당 쿼리는 다음 사용자를 자동으로 그룹에 포함합니다.

- 계정이 **활성화된 사용자**
- **Member 유형 사용자**

즉, **테넌트의 모든 내부 사용자**를 자동으로 그룹에 포함합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/0677c740-61bb-45ab-b442-3f43e5784908" />

- **저장(Save)** 을 선택합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/d4b7e286-9f07-4a5c-a52a-d5129a8f3818" />

- **만들기(Create)** 를 선택하여 그룹 생성을 완료합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/4238850f-0542-45b4-8d25-ed2061d593ca" />

- 테넌트의 모든 구성원이 **동적으로 그룹에 자동 할당된 것을 확인합니다.**

---

### ☁️ Azure Virtual Desktop (AVD) 구축

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/e21a6194-7474-4bef-ae5b-a42ce753d49d" />

- Azure Portal에서 **Azure Virtual Desktop** 을 검색 후 선택합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/07060435-d898-4f31-8402-83f4ce915b78" />

- 좌측 메뉴에서 **빠른 시작 (Quick Start)** 을 선택합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/5b3b5c60-d1e4-47b4-85f8-f99a58e766e6" />

- **Azure Virtual Desktop 선택**
- **만들기(Create)** 클릭

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/64238c0b-a71a-41a6-bdd1-1ccab9edd1f9" />

- **구독**: 권한 확인이 완료된 Azure Subscription 선택

- **위치**: `Korea Central`

- **사용자 이름 / 암호**: 임의 생성 후 안전하게 저장

- **할당**: **최대 두 명의 사용자 선택**

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/c78e1611-389f-4fe6-969b-ab31aee12405" />

- 이전에 생성한 **동적 그룹(Dynamic Group)** 을 선택합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/9b4b7ca7-43a6-4f1c-8f42-38c103aaf390" />

- **검토 + 만들기 (Review + Create)** 를 선택합니다.

<img width="1660" height="1076" alt="screenshot" src="https://github.com/user-attachments/assets/39a0afda-434f-42b8-8cc6-2b2065581040" />

- 유효성 검사를 통과하면 **만들기(Create)** 를 선택합니다.

<img width="1704" height="1120" alt="screenshot" src="https://github.com/user-attachments/assets/c34354e0-7576-4a24-954d-3853fdbf0d37" />

- 오류 없이 배포가 완료되면 **Azure Virtual Desktop 환경이 정상적으로 구축된 것입니다.**
- 이제 참가자는 **표준 개발 환경에서 동일한 성능으로 AI Skilling 프로그램을 진행할 수 있습니다.**

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
