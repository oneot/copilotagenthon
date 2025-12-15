# 🚀 MIEE Agenthon 개발환경 셋팅 가이드

## 본 문서는 MIEE Agenthon 참가자를 위한 개발환경 셋업 매뉴얼입니다.

>모든 OS에서 동일한 성능, 환경을 제공해드리기 위해 Azure Virtual Desktop(AVD) 환경을 제공 했습니다.

>불가피하게 iPad, Android 환경이시거나 Windows, Mac 환경임에도 성능 이슈가 있으실 경우 아래 1️⃣ 번 Windows App, AVD 접속 프로세스 부터 시작하시면 되고,

>OS, 성능 이슈가 없으신 경우 굳이 AVD를 사용할 필요 없이, 아래 계정 확인 후 2️⃣ 번으로 넘어 가시면 됩니다.
---
<details>
	<summary>🔍이 곳을 열어 계정을 먼저 확인하세요🔍</summary>
	
| Display name | User principal name | Initial Password |
|---|---|---|
| Ara Go | ara.go@mieestudio.onmicrosoft.com | Elevate! |
| Byeongnam Hwang | byeongnam.hwang@mieestudio.onmicrosoft.com | Elevate! |
| Daesub Kim | daesub.kim@mieestudio.onmicrosoft.com | Elevate! |
| Dohyeon Kim | dohyeon.kim@mieestudio.onmicrosoft.com | Elevate! |
| Euiyeop Na | euiyeop.na@mieestudio.onmicrosoft.com | Elevate! |
| Eunhye Jeong | eunhye.jeong@mieestudio.onmicrosoft.com | Elevate! |
| Eunji Hwang | eunji.hwang@mieestudio.onmicrosoft.com | Elevate! |
| Hannah Kim | hannah.kim@mieestudio.onmicrosoft.com | Elevate! |
| Heekyoung Noh | heekyoung.noh@mieestudio.onmicrosoft.com | Elevate! |
| Heeyoon Cho | heeyoon.cho@mieestudio.onmicrosoft.com | Elevate! |
| Heyin Jeong | heyin.jeong@mieestudio.onmicrosoft.com | Elevate! |
| Hongnyeon Kim | hongnyeon.kim@mieestudio.onmicrosoft.com | Elevate! |
| Hongsoon Kim | hongsoon.kim@mieestudio.onmicrosoft.com | Elevate! |
| Hyeongchan Park | hyeongchan.park@mieestudio.onmicrosoft.com | Elevate! |
| Hyerim Oh | hyerim.oh@mieestudio.onmicrosoft.com | Elevate! |
| Hyungsu Kim | hyungsu.kim@mieestudio.onmicrosoft.com | Elevate! |
| Hyungwook Kim | hyungwook.kim@mieestudio.onmicrosoft.com | Elevate! |
| Hyunjung Kim | hyunjung.kim@mieestudio.onmicrosoft.com | Elevate! |
| Jaehyun Lee | jaehyun.lee@mieestudio.onmicrosoft.com | Elevate! |
| Jina Seo | jina.seo@mieestudio.onmicrosoft.com | Elevate! |
| Jinhyeok Lee | jinhyeok.lee@mieestudio.onmicrosoft.com | Elevate! |
| Jinwon Kim | jinwon.kim@mieestudio.onmicrosoft.com | Elevate! |
| Jisun Lee | jisun.lee@mieestudio.onmicrosoft.com | Elevate! |
| Jiyong Son | jiyong.son@mieestudio.onmicrosoft.com | Elevate! |
| Jongik Kwon | jongik.kwon@mieestudio.onmicrosoft.com | Elevate! |
| Jungmin Chae | jungmin.chae@mieestudio.onmicrosoft.com | Elevate! |
| Juyoung Kim | juyoung.kim@mieestudio.onmicrosoft.com | Elevate! |
| Kyungim Jang | kyungim.jang@mieestudio.onmicrosoft.com | Elevate! |
| MinHae Oh | minhae.oh@mieestudio.onmicrosoft.com | Elevate! |
| Minsang Kim | minsang.kim@mieestudio.onmicrosoft.com | Elevate! |
| Sangmin Lee (진천상산초) | sangmin.lee@mieestudio.onmicrosoft.com | Elevate! |
| Sangmin Lee (오금중) | sangminlee@mieestudio.onmicrosoft.com | Elevate! |
| Sangpyo Kim | sangpyo.kim@mieestudio.onmicrosoft.com | Elevate! |
| Seokwon Kang | seokwon.kang@mieestudio.onmicrosoft.com | Elevate! |
| Seongwoong Park | seongwoong.park@mieestudio.onmicrosoft.com | Elevate! |
| Seoyeon Chun | seoyeon.chun@mieestudio.onmicrosoft.com | Elevate! |
| Seoyeon Mun | seoyeon.mun@mieestudio.onmicrosoft.com | Elevate! |
| Sol Im | sol.im@mieestudio.onmicrosoft.com | Elevate! |
| Soobin Lee | soobin.lee@mieestudio.onmicrosoft.com | Elevate! |
| Sungho Choi | sungho.choi@mieestudio.onmicrosoft.com | Elevate! |
| Sunghoon Lee | sunghoon.lee@mieestudio.onmicrosoft.com | Elevate! |
| Sunghun Go | sunghun.go@mieestudio.onmicrosoft.com | Elevate! |
| Taegeon Eom | taegeon.eom@mieestudio.onmicrosoft.com | Elevate! |
| Taegyoung Lee | taegyoung.lee@mieestudio.onmicrosoft.com | Elevate! |
| Wangwon Kim | wangwon.kim@mieestudio.onmicrosoft.com | Elevate! |
| Yerin Jeon | yerin.jeon@mieestudio.onmicrosoft.com | Elevate! |
| Yongmin Seo | yongmin.seo@mieestudio.onmicrosoft.com | Elevate! |
| Younghoon Bae | younghoon.bae@mieestudio.onmicrosoft.com | Elevate! |
| Youngsang Cho | youngsang.cho@mieestudio.onmicrosoft.com | Elevate! |
| Yuseung Ko | yuseung.ko@mieestudio.onmicrosoft.com | Elevate! |

</details>

---

## 🧭 전체 진행 흐름
	1️⃣	Windows App 설치 및 실행
	
	2️⃣	Copilot Studio 접속 및 에이전트 게시
	
	3️⃣	Microsoft Foundry 접속

---

### 1️⃣ Windows App 설치 및 실행 (AVD Client)

- [Windows용](https://apps.microsoft.com/detail/9n1f85v9t8bn?hl=ko-KR&gl=US)
- [Mac용](https://apps.apple.com/us/app/windows-app/id1295203466?mt=12)
- [Android용](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en&pli=1)
- [iPad용](https://apps.apple.com/us/app/windows-app-mobile/id714464092?platform=ipad)
	- Windows App을 설치 후 실행합니다.
	- 최초 실행 시 No Devices 화면이 표시됩니다.
<img width="1072" height="1012" alt="스크린샷 2025-12-15 00 18 17" src="https://github.com/user-attachments/assets/0b8ec373-a449-41a9-a152-95a5f9385c45" />

- 우측 상단의 ➕ 버튼 클릭 후 Add Work or School Account ✅
<img width="1281" height="1012" alt="스크린샷 2025-12-15 00 18 24" src="https://github.com/user-attachments/assets/1ed1743a-14f4-4750-9edd-af68243bff2a" />
<img width="692" height="810" alt="스크린샷 2025-12-15 00 18 55" src="https://github.com/user-attachments/assets/3a0700e4-459f-4671-b720-9b4919de2b5e" />

- 위에서 확인 한 계정을 입력합니다.
<img width="921" height="810" alt="스크린샷 2025-12-15 00 19 14" src="https://github.com/user-attachments/assets/d1a60aa7-d252-4b3f-a552-11e0ea260ec8" />

- 초기 비밀번호 **Elevate!** 을 입력합니다.
<img width="921" height="810" alt="스크린샷 2025-12-15 00 19 30" src="https://github.com/user-attachments/assets/5e8a6f59-3cae-4365-a67a-a9ba09f6d4a3" />

- 최초 로그인 시 비밀번호 변경이 요구 됩니다.
- 🔐 비밀번호 규칙
	- 8자 이상 / 대문자 / 소문자 / 숫자 / 특수문자 포함
- 완료 후 Sign in 클릭
<img width="1072" height="1012" alt="스크린샷 2025-12-15 00 20 07" src="https://github.com/user-attachments/assets/24bf696a-d71e-4dc8-963b-f8fb0081efb6" />

- 로그인이 완료되면 Devices 화면에 AVD-WS | SessionDesktop 카드가 표시됩니다.
- SessionDesktop을 더블클릭 합니다.
<img width="662" height="377" alt="스크린샷 2025-12-15 00 20 26" src="https://github.com/user-attachments/assets/c158f961-10f1-42b9-a3eb-3752dddb998f" />

- 방금 변경한 비밀번호를 입력합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 20 46" src="https://github.com/user-attachments/assets/48bcb102-59c0-4fff-a5a8-243bc3e7f62b" />

---

### 2️⃣ Copilot Studio 접속 및 에이전트 게시

- Edge 브라우저를 열고 **copilotstudio.microsoft.com** 에 접속합니다.
- 🚨 **1️⃣	Windows App 설치 및 실행** 절차를 skip한 분은 계정을 먼저 확인 해주시고, 해당 계정으로 로그인 해주세요. 🚨
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 24 07" src="https://github.com/user-attachments/assets/91965a1d-4346-4ed7-8974-5fadb7b0f0ee" />
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 24 15" src="https://github.com/user-attachments/assets/40ab0b1e-1775-471e-9794-02a3498ebae8" />


- 좌측 메뉴 바에서 **에이전트** 선택 후 우측 상단의 **빈 에이전트 만들기** 를 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 24 53" src="https://github.com/user-attachments/assets/1257b52f-188c-478e-975a-038d39294bf2" />

- 에이전트가 **프로비전**이 되면, 우측 상단의 **설정** 을 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 01" src="https://github.com/user-attachments/assets/19f5bd43-7d14-49ff-82b4-12cab83030b4" />

- **보안** 선택 후, **인증** 을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 08" src="https://github.com/user-attachments/assets/af3fa4f8-1a13-4f16-82ae-900794908ac6" />

- **인증 없음** 선택 후, **저장**을 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 25" src="https://github.com/user-attachments/assets/28543a9a-2382-48f9-a3e0-de8eb87985f7" />

- **게시로 이동**을 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 38" src="https://github.com/user-attachments/assets/d7ad1407-e16f-412c-a609-78377509d6c6" />

- 우측 상단의 **게시** 버튼을 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 25 44" src="https://github.com/user-attachments/assets/7b7026c2-912f-47a8-9652-0281d9fa02e6" />

- **게시** 버튼을 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 26 27" src="https://github.com/user-attachments/assets/385ac8d6-8c25-4b84-9c1b-c1167d17d6fa" />

- **프리뷰 공유** -> **데모 웹사이트** 선택 후 **Open demo website**를 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 27 10" src="https://github.com/user-attachments/assets/f469443e-5614-4f9f-9e97-50c8f0066676" />

- 내가 만든 에이전트와 대화를 해봅니다 😎

---

### 3️⃣ Microsoft Foundry 접속
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 44 47" src="https://github.com/user-attachments/assets/d1711767-f259-4e57-9661-d59aa82fb9a4" />

- **ai.auzre.com** 접속 후, 우측 상단의 **새 Foundry** 토글을 켜줍니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 44 56" src="https://github.com/user-attachments/assets/aac9ae69-f303-4d94-8c06-6092adc0f1d3" />

- **새 프로젝트 만들기**를 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 44 59" src="https://github.com/user-attachments/assets/f305b137-35c8-4d47-8518-f21a36d73c03" />

- 임의의 프로젝트 이름을 넣고, **만들기**를 선택합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 46 05" src="https://github.com/user-attachments/assets/b7690182-f9eb-4b8c-8c5f-88b511ba4598" />

- **Start Building** 선택 후 **Browse models**를 선택 합니다.
<img width="2560" height="1440" alt="스크린샷 2025-12-15 00 46 14" src="https://github.com/user-attachments/assets/250dcc23-62ed-4ac4-9d58-b095e20084ce" />

- 사용 가능한 **파운데이션 모델**들을 둘러 봅니다.

---

# 고생 많으셨습니다! 이제 에이전톤 준비가 완료 되셨습니다!🚀


