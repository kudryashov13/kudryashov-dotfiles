# Constants
widget_id=kud-top-bar-spaces-jsx
yabai_path=/opt/homebrew/bin/yabai

apple_script="tell application id \"tracesOf.Uebersicht\" to refresh widget id \"$widget_id\""
update_widget_script="osascript -e '$apple_script'"

# Gathering yabai data
spaces=$($yabai_path -m query --spaces)
windows=$($yabai_path -m query --windows | sed 's/\\.//g; s/\n//g')
displays=$($yabai_path -m query --displays)

# Helpers
function subscribe () {
  local event action label
  local "${@}"

  $yabai_path -m signal --add event=$event action="$action" label="$label"
}

# Subscribe to yabai events
subscribe \
  event=space_changed \
  action="$update_widget_script" \
  label="Refresh $widget_id on space change"

subscribe \
  event=display_changed \
  action="$update_widget_script" \
  label="Refresh $widget_id on display focus change"

subscribe \
  event=window_focused \
  action="$update_widget_script" \
  label="Refresh $widget_id on window focus"

# Pass data to widget
echo $(cat <<-EOF
  {
    "spaces": $spaces,
    "windows": $windows,
    "displays": $displays
  }
EOF
)