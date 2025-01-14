@echo off
echo Starting Python HTTP server on port 8080...
start "" "http://localhost:8080/"  // Open the browser immediately
cd docs
python -m http.server 8080
pause