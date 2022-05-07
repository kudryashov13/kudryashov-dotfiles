const { exec } = require("child_process");

exec("yabai -m query --displays | jq '.[] | select(.id == 1) | .spaces'", (error, stdout, stderr) => {
  const workspaces = JSON.parse(stdout);
  workspaces.forEach((workspace) => {
				exec(`yabai -m space ${workspace} --layout bsp`);
				exec(`yabai -m space ${workspace} --padding abs:0:0:0:0`);
  });
});
