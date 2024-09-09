@echo off
setlocal

rem Tạo các thư mục
mkdir src\assets\css
mkdir src\components
mkdir src\hooks
mkdir src\pages
mkdir src\router
mkdir src\services
mkdir src\utils

rem Tạo các tệp tin
echo. > src\assets\css\index.scss
echo. > src\components\Alert.tsx
echo. > src\components\Button.tsx
echo. > src\components\Header.tsx
echo. > src\components\Modal.tsx
echo. > src\components\LoginForm.tsx
echo. > src\components\MarksTable.tsx
echo. > src\hooks\useAuth.ts
echo. > src\hooks\useApi.ts
echo. > src\pages\HomePage.tsx
echo. > src\pages\LoginPage.tsx
echo. > src\pages\MarksPage.tsx
echo. > src\router\index.tsx
echo. > src\services\api.ts
echo. > src\services\auth.ts
echo. > src\utils\constants.ts
echo. > src\App.tsx
echo. > src\main.tsx
echo. > src\vite-env.d.ts

endlocal
