@echo off
echo ========================================================
echo GitHub Push Script
echo ========================================================
echo.
echo Make sure you have created an empty repository on GitHub.
echo.
set /p repo_url="Enter your GitHub repository URL (e.g. https://github.com/username/sih-border-security.git): "
echo.

echo Initializing git repository...
git init

echo.
echo Adding files...
git add .

echo.
echo Committing files...
git commit -m "Initial commit: SIH Border Security AI Prototype"

echo.
echo Setting main branch...
git branch -M main

echo.
echo Adding remote origin...
git remote add origin %repo_url%

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================================
echo Process finished. Please read any errors above.
echo ========================================================
pause
