// flags
const
sticky   = 2**0, // always save position and if open
reload   = 2**1, // show reload button
awake    = 2**2, // prevent dim and pause when not active
full     = 2**3, // show full screen button
resize   = 2**4, // show resize buttons (apect ratio maintained)
code     = 2**5, // show code button (cant show code if help is set)

// system flags
closeAll   = 2**7,         // close all open windows
newUserProgram = 2**8,     // create new user program
deleteUserPrograms = 2**9, // remove all user programs

// defaults
defaultFlags = full|reload|resize,
defaultWidth = 720, defaultHeight = 405, // 16:9 aspect

// program format
//[src, icon, width, height, flags, name, help, folder]

programStubs = 
[
[,'❌',,,closeAll,'Close All'],
['help.html','<b><span style=color:#0f0>?',380,400,sticky,,'Check here to see help when available.\nSome programs have a option to show code instead.\n\nHave fun! ✌️😄'],
[,'⚙️',,,,'System',,
[
    ['system/settings.html','🎚️',470,190,sticky],
    ['system/trophyCase.html','🏆',,,full|resize|sticky],
    ['system/clock.dweet.js','🕰️',198,198,sticky|code|awake],
    [,'📁',,,,'Test',,
    [
        ['system/systemTest.html',,600,370,defaultFlags|code],
        ['index.html','✌️😄',,,,'Meta OS13k'],
    ]],
]],
[,'🛠️',,,,'Apps',,
[
    ['apps/stickyNote.html','✍️',300,263,sticky|reload,,'Ctrl+B - Bold\nCtrl+I - Italic\nCtrl+U - Underline\n\Reload to clear'],
    ['apps/timer.html','⌛',400,139,sticky|reload],
]],
[,'🎮',,,,'Games',,
[
    ['games/bogusSlopes.dweet.js','🏂🏻'],
]],
[,'🎶',,,,'Music',,
[
    ['music/musicPlayer.html','🎵',400,330,sticky],
    ['music/piano.html','🎹',520,510,reload],
    ['music/visualizer.dweet.js','👁️',,,awake|full|resize|code],
]]
];