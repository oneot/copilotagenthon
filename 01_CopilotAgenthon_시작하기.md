# 🚀 MIEE Agenthon 개발환경 셋팅 가이드

## 본 문서는 MIEE Agenthon 참가자를 위한 개발환경 셋업 매뉴얼입니다.

>모든 OS에서 동일한 성능, 환경을 제공해드리기 위해 Azure Virtual Desktop(AVD) 환경을 제공 했습니다.

>불가피하게 iPad, Android 환경이시거나 Windows, Mac 환경임에도 성능 이슈가 있으실 경우 아래 AVD 접속 프로세스 부터 시작하시면 되고,

>OS, 성능 이슈가 없으신 경우 굳이 AVD를 사용할 필요 없이, ??번째로 넘어 가시면 됩니다.

---

🧭 전체 진행 흐름
	1.	Windows App 설치 및 실행
	2.	Work/School 계정 추가
	3.	최초 로그인 & 비밀번호 변경
	4.	Azure Virtual Desktop 접속
	5.	Windows 환경 로그인
	6.	Copilot Studio 접속 및 에이전트 생성

⸻

1️⃣ Windows App 실행 (AVD Client)

📸 스크린샷: 00.18.17, 00.18.24

	•	Mac에서 Windows App을 실행합니다.
	•	최초 실행 시 No Devices 화면이 표시됩니다.

👉 우측 상단의 ➕ 버튼 클릭

선택 옵션:
	•	Add Work or School Account ✅

⸻

2️⃣ Work / School 계정 추가

📸 스크린샷: 00.18.55

아래와 같은 형식의 계정을 입력합니다.

test02@mieestudio.onmicrosoft.com

	•	제공받은 MIEE Agenthon 계정을 입력
	•	Next 클릭

⸻

3️⃣ 계정 로그인 (Single Sign-On)

📸 스크린샷: 00.19.14

	•	비밀번호 입력
	•	Sign in 클릭

💡 SSO(Single Sign-On) 안내 팝업이 나타날 수 있습니다.
기본 설정 그대로 진행해 주세요.

⸻

4️⃣ 최초 로그인 시 비밀번호 변경

📸 스크린샷: 00.19.30

최초 로그인 시 아래 화면이 나타납니다.

Update your password
	•	현재 비밀번호 입력
	•	새 비밀번호 입력
	•	새 비밀번호 확인

🔐 비밀번호 규칙
	•	8자 이상
	•	대문자 / 소문자 / 숫자 / 특수문자 포함

완료 후 Sign in 클릭

⸻

5️⃣ AVD Workspace 확인

📸 스크린샷: 00.20.07

로그인이 완료되면 Devices 화면에
아래와 같은 카드가 표시됩니다.
	•	AVD-WS
	•	SessionDesktop

➡️ 해당 카드를 더블 클릭

⸻

6️⃣ 원격 데스크톱 자격 증명 입력

📸 스크린샷: 00.20.26

Azure Virtual Desktop 접속을 위한 인증 단계입니다.
	•	Username:

test02@mieestudio.onmicrosoft.com


	•	Password: 계정 비밀번호

☑️ 필요 시 Show password 체크 가능
➡️ Continue 클릭

⸻

7️⃣ Windows 가상 환경 로그인

📸 스크린샷: 00.20.46

Windows 로그인 화면이 표시됩니다.
	•	사용자: test02
	•	잠시 대기하면 User Profile Service 준비 중 화면이 나타납니다.

⏳ 최초 로그인 시 1~2분 소요될 수 있습니다.

⸻

8️⃣ Windows Desktop 진입 완료 🎉

📸 스크린샷: 00.24.07

정상적으로 접속되면
Windows 11 기반의 가상 데스크톱 환경이 표시됩니다.

이 환경이 Agenthon 실습용 개발 환경입니다.

⸻

9️⃣ Copilot Studio 접속

📸 스크린샷: 00.24.15

Windows 환경에서 브라우저(Edge/Chrome)를 열고 접속:

https://copilotstudio.microsoft.com

	•	우측 상단 테넌트 확인: Contoso (default)
	•	정상 접속 시 Copilot Studio 홈 화면 표시

⸻

🔟 에이전트 생성 시작 🤖

Copilot Studio 메인 화면에서:
	•	에이전트 생성
	•	워크플로 생성
	•	에이전트 템플릿 활용

등을 통해 Agenthon 과제를 수행합니다.

⸻

✅ 개발환경 셋팅 완료 체크리스트
	•	Windows App 설치
	•	Work/School 계정 로그인
	•	AVD 접속 성공
	•	Windows 가상환경 로그인
	•	Copilot Studio 접속 완료

🎊 이제 Agenthon을 시작할 준비가 완료되었습니다!
