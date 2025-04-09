// 🧭 Numerology Cycle – Network Ops Context (START === onStart)

const netStartCard = {
    phase: "START",
    numerology: 1,
    title: "Take a forward-thinking view.",
    context: "Network Infrastructure Readiness",
    supposition: [
      "You're likely setting up, managing, or troubleshooting a network device (switch/router).",
      "You may be scripting automation across network infra.",
      "Possibly prepping a lab or managing a client environment.",
      "Or pulling firmware/VLAN config magic."
    ],
    goal: "Establish console/terminal access to the switch.",
    methods: {
      physicalAccess: {
        label: "🛠️ Physical Console Setup",
        steps: [
          "Grab console cable (USB-to-RJ45 or serial).",
          "Plug into switch console port.",
          "Launch terminal (PuTTY, Tera Term, minicom, screen).",
          "Set serial settings (9600, 8N1, no flow control).",
          "Boot switch – observe logs."
        ]
      },
      remoteAccess: {
        label: "🌐 Remote Access (SSH/Telnet)",
        steps: [
          "Find switch IP address.",
          "Run `ssh admin@192.168.1.1` or `telnet 192.168.1.1`.",
          "Login with credentials."
        ]
      }
    },
    bonusOps: {
      label: "🧰 Bonus Playbook (SENIODEV Style)",
      actions: [
        "Automate logins via expect, paramiko, or Netmiko.",
        "Save sessions via PuTTY or VSCode Remote Explorer.",
        "If Cisco: `enable → configure terminal` and go.",
        "Log sessions with `script switch-session.log`."
      ]
    }
  };
  
  console.log("🌐 Network Phase:", netStartCard.phase);
  console.table(netStartCard.methods.physicalAccess.steps);
  