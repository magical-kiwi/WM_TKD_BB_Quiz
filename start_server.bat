@echo off
echo Starting Python HTTP server on port 8080...
start "" "http://localhost:8080"  // Open the browser immediately
"C:\Program Files\Python311\python.exe" -m http.server 8080
pause