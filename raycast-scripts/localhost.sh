#!/opt/homebrew/bin/zsh

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title localhost
# @raycast.mode silent

# Optional parameters:
# @raycast.icon 🕵️
# @raycast.packageName localhost
# @raycast.needsConfirmation false

# Documentation:
# @raycast.description opens incognito browser at http://localhost:3000
# @raycast.author Maxim Kudryashov

# Open a new incognito window and navigate to localhost:3000
open -n -a "Brave Browser" --args --incognito "http://localhost:3000"

